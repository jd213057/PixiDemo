import loaders from './loaders.js';

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
let warriorWideBox = new PIXI.Rectangle();
let warriorNarrowBox = new PIXI.Rectangle();
let leftCollision = false;
let rightCollision = false;

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

let colliderImage = PIXI.Texture.from(
	pathToImgFolder + 'Levels/simple_ground.png'
);
let colliderFloorSprite = new PIXI.Sprite(colliderImage);
colliderFloorSprite.anchor.set(0.0);
colliderFloorSprite.x = 0;
colliderFloorSprite.y = 288;
colliderFloorSprite.width = 350;
colliderFloorSprite.height = 25;
app.stage.addChild(colliderFloorSprite);

let colliderWallImage = PIXI.Texture.from(
	pathToImgFolder + 'Levels/simple_wall.png'
);
let leftColliderWallSprite = new PIXI.Sprite(colliderWallImage);
leftColliderWallSprite.anchor.set(0.0);
leftColliderWallSprite.x = 0;
leftColliderWallSprite.y = 200;
leftColliderWallSprite.width = 20;
leftColliderWallSprite.height = 113;
app.stage.addChild(leftColliderWallSprite);
let rightColliderWallSprite = new PIXI.Sprite(colliderWallImage);
rightColliderWallSprite.anchor.set(0.0);
rightColliderWallSprite.x = 350;
rightColliderWallSprite.y = 200;
rightColliderWallSprite.width = 20;
rightColliderWallSprite.height = 113;
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
let vx = 0;
let vy = 5;
app.stage.addChild(warrior);

const rightWallBox = rightColliderWallSprite.getBounds();
const leftWallBox = leftColliderWallSprite.getBounds();
const floorBox = colliderFloorSprite.getBounds();
wallCollidersList.push(leftWallBox, rightWallBox);
floorCollidersList.push(floorBox);

// Listen for animate update
app.ticker.add((delta) => {
	warriorNarrowBox = warrior.getBounds();
	calculateWideBox();
	isAboutToCollide = detectFloorCollision(warriorWideBox);
	if (!isAboutToCollide) {
		applyingGravity();
	}
	const animationSpeed = delta / 4;
	animationCount =
		Math.round(animationCount + animationSpeed) % textureArray.length;
	warrior.texture = textureArray[animationCount];
});

var playingSound = false;

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
		console.log(leftCollision);
		if (e.keyCode === 37) {
			if (direction === 1) {
				warrior.scale.x = -2;
			}
			direction = -1;
			if (rightCollision || !detectWallCollision(warriorWideBox)) {
				move();
			}
			leftCollision = detectWallCollision(warriorWideBox) ? true : false;
		}
		if (e.keyCode === 39) {
			if (direction === -1) {
				warrior.scale.x = 2;
			}
			direction = 1;
			warrior.y -= 5;
			if (leftCollision || !detectWallCollision(warriorWideBox)) {
				move();
			}
			rightCollision = detectWallCollision(warriorWideBox) ? true : false;
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

function calculateWideBox() {
	warriorWideBox.x = warriorNarrowBox.x + 1;
	warriorWideBox.width = warriorNarrowBox.width - 30;
	warriorWideBox.y = warriorNarrowBox.y + 1;
	warriorWideBox.height = warriorNarrowBox.height - 1;
}

function move() {
	playSound(walkingSound);
	loadRunTexture();
	warrior.x += 5 * direction;
}

function jump() {
	loadJumpTexture();
	isJumping = true;
}

function stop() {
	loadIdleTexture();
	playingSound = false;
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
			return true;
		}
	}
	return false;
}

function applyingGravity() {
	warrior.y += vy;
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
