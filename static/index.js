import loaders from './loaders.js';

const attackSound = new Audio(
	'static/assets/audio/sounds/street-fighter-sound-hadouken.mp3'
);
const walkingSound = new Audio('static/assets/audio/sounds/step_lth4.mp3');
let animationCount = 0;
let isMoving = false;
let direction = 1;
let isJumping = false;
let onFloor = false;
let isColliding = false;
let collidersList = [];

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
let colliderWallSprite = new PIXI.Sprite(colliderWallImage);
colliderWallSprite.anchor.set(0.0);
colliderWallSprite.x = 350;
colliderWallSprite.y = 200;
colliderWallSprite.width = 20;
colliderWallSprite.height = 113;
app.stage.addChild(colliderWallSprite);

// path starting point from server.js where script js is served
const pathToAnimation = '/static/assets/images/Warrior/Animations';

let textureArray = [];
let texture = PIXI.Texture.from(pathToAnimation + '/Idle/Idle__000.png');
textureArray.push(texture);
let warrior = new PIXI.AnimatedSprite(textureArray);

loadIdleTexture();
// center the sprite's anchor point
warrior.anchor.set(0.5);

// move the sprite to the center of the screen

warrior.width = 70;
warrior.height = 75;
/* warrior.scale.x = 0.2;
warrior.scale.y = 0.2; */
warrior.x = app.screen.width / 2 - 350;
/* warrior.y = app.screen.height / 2 - 28.5; */
warrior.y = app.screen.height / 2 - 150;
let vx = 0;
let vy = 5;
app.stage.addChild(warrior);

const wallBox = colliderWallSprite.getBounds();
const floorBox = colliderFloorSprite.getBounds();
collidersList.push(floorBox, wallBox);

// Listen for animate update
app.ticker.add((delta) => {
	const warriorBox = warrior.getBounds();
/* 	warriorBox.x += 5;
	warriorBox.y += 1; */
	isColliding = detectCollision(warriorBox);
	applyingGravity();
	if (isMoving) {
		const animationSpeed = delta / 2;
		animationCount =
			Math.round(animationCount + animationSpeed) % textureArray.length;
		warrior.texture = textureArray[animationCount];
	}
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
		const warriorBounds = warrior.getBounds();
		warriorBounds.y += 1;
		if (e.keyCode == 37) {
			warriorBounds.x -= 1;
			if (!detectCollision(warriorBounds)) {
				direction = -1;
				warrior.scale.x = -1;
				move();
			}
		}
		if (e.keyCode == 38) {
			jump();
		}
		if (e.keyCode == 39) {
			warriorBounds.x += 1;
			if (!detectCollision(warriorBounds)) {
				direction = 1;
				warrior.scale.x = 1;
				move();
			}
		}
		if (e.keyCode == 65) {
			smallAttack();
		}
		if (e.keyCode == 90) {
			bigAttack();
		}
	});
	window.addEventListener('keyup', () => {
		stop();
	});
}

// Move functions :

function move() {
	playSound(walkingSound);
	if (!detectCollision(warrior.getBounds()) && onFloor) {
		warrior.x += 5 * direction;
		loadRunTexture();
	}
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

function detectCollision(playerBox) {
	for (const collider of collidersList) {
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
	if (!isColliding && !onFloor) {
		warrior.y += vy;
	} else {
		onFloor = true;
		vy = 0;
	}
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
	let loaderArray = loaders.warriorLoader.warriorAttackingImg;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
	warrior.y = 250;
	isMoving = true;
}

function loadBigAttackTexture() {
	textureArray = [];
	let loaderArray = loaders.warriorLoader.warriorAttacking2Img;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
	warrior.y = 245;
	isMoving = true;
}

function loadIdleTexture() {
	warrior.y = 245;
	textureArray = [];
	let loaderArray = loaders.warriorLoader.warriorIdlingImg;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
	isMoving = true;
}

function loadJumpTexture() {
	warrior.y = 250;
	textureArray = [];
	let loaderArray = loaders.warriorLoader.warriorJumpingImg;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
	isMoving = true;
}

function loadRunTexture() {
	warrior.y = 250;
	textureArray = [];
	let loaderArray = loaders.warriorLoader.warriorRunningImg;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
	isMoving = true;
}

function loadDieTexture() {
	warrior.y = 260;
	textureArray = [];
	let loaderArray = loaders.warriorLoader.warriorDyingImg;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
	isMoving = true;
}
