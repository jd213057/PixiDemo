import loaders from './loaders.js';
import colliders from './colliders.js';

const attackSound = new Audio(
	'static/assets/audio/sounds/street-fighter-sound-hadouken.mp3'
);
const walkingSound = new Audio('static/assets/audio/sounds/step_lth4.mp3');
let animationCount = 0;
let direction = 1;
let isJumping = false;
let onFloor = false;
let isAboutToCollide = false;
let wallCollidersList = [];
let floorCollidersList = [];
let warriorNarrowBox = new PIXI.Rectangle();
let bottomCollisionBox = new PIXI.Rectangle();
let leftCollisionBox = new PIXI.Rectangle();
let rightCollisionBox = new PIXI.Rectangle();
let vx = 0;
let vy = 5;

setControls();
setKeyboardControls();
setBackgroundVolume();
setAudioEvents();

const app = new PIXI.Application({
	height: 550,
	width: 900,
	transparent: true,
});

document.getElementById('screen').appendChild(app.view);

const pathToImgFolder = '/static/assets/images/';
let backgroundImage = PIXI.Texture.from(
	pathToImgFolder + 'Levels/firstmaplevel_background.png'
);
let backgroundSprite = new PIXI.Sprite(backgroundImage);
backgroundSprite.anchor.set(0.0);
backgroundSprite.height = 642;
backgroundSprite.width = 3073;
app.stage.addChild(backgroundSprite);

let colliderFloorSprite = createBasicCollider(colliders.colliderFloorSprite);
let leftColliderWallSprite = createBasicCollider(
	colliders.leftColliderWallSprite
);
let rightColliderWallSprite = createBasicCollider(
	colliders.rightColliderWallSprite
);
app.stage.addChild(colliderFloorSprite);
app.stage.addChild(leftColliderWallSprite);
app.stage.addChild(rightColliderWallSprite);

// path starting point from server.js where script js is served
const pathToAnimation = '/static/assets/images/';

let textureArray = [];
let texture = PIXI.Texture.from(
	pathToAnimation + 'Adventurer/Idle/adventurer-idle-00.png'
);
textureArray.push(texture);
let warrior = new PIXI.AnimatedSprite(textureArray);

loadIdleTexture();
// center the sprite's anchor point
warrior.anchor.set(0.5);

// move the sprite to the center of the screen

warrior.scale.x = 2;
warrior.scale.y = 2;
warrior.x = app.screen.width / 2 - 350;
warrior.y = app.screen.height / 2 - 150;
app.stage.addChild(warrior);

const rightWallBox = rightColliderWallSprite.getBounds();
const leftWallBox = leftColliderWallSprite.getBounds();
const floorBox = colliderFloorSprite.getBounds();
wallCollidersList.push(leftWallBox, rightWallBox);
floorCollidersList.push(floorBox);

// Listen for animate update
app.ticker.add((delta) => {
	warriorNarrowBox = warrior.getBounds();
	calculateWideBoxes();
	isAboutToCollide = detectFloorCollision(bottomCollisionBox);
	if (!isAboutToCollide) {
		applyingGravity();
	}
	if (isJumping) {
		makeJump();
	}
	const animationSpeed = delta / 4;
	animationCount =
		Math.round(animationCount + animationSpeed) % textureArray.length;
	warrior.texture = textureArray[animationCount];
});

var playingSound = false;

// Build Map functions

function createBasicCollider(colliderConf) {
	let newTexture = PIXI.Texture.from(colliderConf.imgPath);
	let newCollider = new PIXI.Sprite(newTexture);
	newCollider.anchor.set(colliderConf.anchor);
	newCollider.x = colliderConf.x;
	newCollider.y = colliderConf.y;
	newCollider.width = colliderConf.width;
	newCollider.height = colliderConf.height;
	return newCollider;
}

// Controls functions :

function setControls() {
	document.getElementById('Attack').addEventListener('click', () => {
		loadSmallAttackTexture();
	});
	document.getElementById('Attack2').addEventListener('click', () => {
		loadBigAttackTexture();
	});
	document.getElementById('Idle').addEventListener('click', () => {
		loadIdleTexture();
	});
	document.getElementById('Jump').addEventListener('click', () => {
		loadJumpTexture();
	});
	document.getElementById('Die').addEventListener('click', () => {
		loadDieTexture();
	});
	document.getElementById('Run').addEventListener('click', () => {
		loadRunTexture();
	});
}

function setKeyboardControls() {
	window.addEventListener('keydown', (e) => {
		if (e.keyCode === 37) {
			warrior.scale.x = -2;
			direction = -1;
			if (!detectWallCollision(leftCollisionBox)) {
				move();
			}
		}
		if (e.keyCode === 39) {
			warrior.scale.x = 2;
			direction = 1;
			warrior.y -= 5;
			if (!detectWallCollision(rightCollisionBox)) {
				move();
			}
		}

		if (e.keyCode === 38) {
			jump();
		}

		if (e.keyCode === 65) {
			smallAttack();
		}
		if (e.keyCode === 90) {
			bigAttack();
		}
	});
	window.addEventListener('keyup', (e) => {
		stop();
	});
}

// Move functions :

function calculateWideBoxes() {
	bottomCollisionBox.x =
		warriorNarrowBox.x + (1 / 3) * warriorNarrowBox.width;
	bottomCollisionBox.width = (1 / 3) * warriorNarrowBox.width;
	bottomCollisionBox.y =
		warriorNarrowBox.y + (2 / 3) * warriorNarrowBox.height;
	bottomCollisionBox.height = (1 / 3) * warriorNarrowBox.height + 1;
	leftCollisionBox.x = warriorNarrowBox.x + 10;
	leftCollisionBox.width = warriorNarrowBox.width / 2 - 15;
	leftCollisionBox.y = warriorNarrowBox.y - 1;
	leftCollisionBox.height = warriorNarrowBox.height + 1;
	rightCollisionBox.x = warriorNarrowBox.x + warriorNarrowBox.width / 2;
	rightCollisionBox.width = warriorNarrowBox.width / 2 - 15;
	rightCollisionBox.y = warriorNarrowBox.y - 1;
	rightCollisionBox.height = warriorNarrowBox.height + 1;
}

function move() {
	if (!isJumping && onFloor) {
		playSound(walkingSound);
		loadRunTexture();
		vx = 5;
		warrior.x += vx * direction;
	}
}

function jump() {
	loadJumpTexture();
	if (!isJumping && onFloor) {
		isJumping = true;
		onFloor = false;
		makeJump();
		setTimeout(() => {
			isJumping = false;
		}, 750);
	}
}

function stop() {
	if (!isJumping && onFloor) {
		loadIdleTexture();
	}
	playingSound = false;
	setTimeout(() => {
		vx = 0;
	}, 250);
	vx = 0;
	stopSound();
}

function smallAttack() {
	playSound(attackSound);
	loadSmallAttackTexture();
}

function bigAttack() {
	playSound(attackSound);
	loadBigAttackTexture();
}

// Physics functions:

function detectWallCollision(playerBox) {
	for (const collider of wallCollidersList) {
		if (
			playerBox.x + playerBox.width > collider.x &&
			playerBox.x < collider.x + collider.width &&
			playerBox.y + playerBox.height > collider.y &&
			playerBox.y < collider.y + collider.height
		) {
			return true;
		}
	}
	return false;
}

function detectFloorCollision(playerBox) {
	for (const collider of floorCollidersList) {
		if (
			playerBox.x + playerBox.width > collider.x &&
			playerBox.x < collider.x + collider.width &&
			playerBox.y + playerBox.height > collider.y &&
			playerBox.y < collider.y + collider.height
		) {
			isJumping = false;
			onFloor = true;
			return true;
		}
	}
	return false;
}

function applyingGravity() {
	warrior.y += vy;
}

function makeJump() {
	vx -= 0.1 * direction;
	warrior.x += vx;
	warrior.y -= vy + 5;
}

//Audio functions:

function setBackgroundVolume() {
	const backgroundAudio = document.getElementById('audio');
	backgroundAudio.volume = 0.3;
}

function playSound(sound) {
	if (!playingSound) {
		sound.currentTime = 0;
		sound.volume = 1;
		sound.play();
	}
	playingSound = true;
}

function stopSound() {
	attackSound.pause();
	walkingSound.pause();
}

function setAudioEvents() {
	attackSound.addEventListener('play', () => {
		attackSound.volume = 0.5;
	});
	attackSound.addEventListener('ended', () => {
		playingSound = false;
	});
	walkingSound.addEventListener('ended', () => {
		playingSound = false;
	});
}

// TextureLoader functions :

function loadSmallAttackTexture() {
	textureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerAttacking1Anim;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
}

function loadBigAttackTexture() {
	textureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerAttacking2Anim;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
}

function loadIdleTexture() {
	textureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerIdlingAnim;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
}

function loadJumpTexture() {
	textureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerJumpingAnim;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
}

function loadRunTexture() {
	textureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerRunningAnim;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
}

function loadDieTexture() {
	textureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerDyingAnim;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
}
