import loaders from './loaders.js';

const attackSound = new Audio(
	'static/assets/audio/sounds/street-fighter-sound-hadouken.mp3'
);
const walkingSound = new Audio('static/assets/audio/sounds/step_lth4.mp3');
let animationCount = 0;
let isMoving = false;
let direction = 1;
let isJumping = false;
let isColliding = false;

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
let colliderSprite = new PIXI.Sprite(colliderImage);
colliderSprite.anchor.set(0.0);
colliderSprite.x = 0;
colliderSprite.y = 288;
colliderSprite.scale.x = 0.5;
colliderSprite.scale.y = 0.1;
app.stage.addChild(colliderSprite);

let colliderWallImage = PIXI.Texture.from(
	pathToImgFolder + 'Levels/simple_wall.png'
);
let colliderWallSprite = new PIXI.Sprite(colliderWallImage);
colliderWallSprite.anchor.set(0.0);
colliderWallSprite.x = 350;
colliderWallSprite.y = 0;
colliderWallSprite.scale.x = 0.1;
colliderWallSprite.scale.y = 0.35;
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
const scaleX = 0.2;
const scaleY = 0.2;
warrior.scale.x = scaleX;
warrior.scale.y = scaleY;
warrior.x = app.screen.width / 2 - 350;
warrior.y = app.screen.height / 2 - 28.5;

app.stage.addChild(warrior);

// Listen for animate update
app.ticker.add((delta) => {
	const warriorBox = warrior.getBounds();
	/* 	const colliderBox = colliderSprite.getBounds(); */
	const wallBox = colliderWallSprite.getBounds();
	isColliding = detectCollision(warriorBox, wallBox);
	if (isJumping) {
		const initialY = warrior.y;
		const initialX = warrior.y;
		const g = 1;
		const p = 1.5;
		const upVector = initialY + p;
		const downVector = -g * delta;
		const xVector = p - delta;
		if (warrior.y >= initialY) {
			warrior.y = -(upVector + downVector);
		}
		if (isMoving && xVector > 0) {
			warrior.x = initialX + xVector;
		}
		if (warrior.y - initialY < 0.1) {
			isJumping = false;
		}
	} else if (isMoving) {
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
		const warriorBox = warrior.getBounds();
		const wallBox = colliderWallSprite.getBounds();
		if (e.keyCode == 37) {
			warriorBox.x -= 1;
			if (!detectCollision(warriorBox, colliderWallSprite)) {
				direction = -1;
				warrior.scale.x = -scaleX;
				move();
			}
		}
		if (e.keyCode == 38) {
			jump();
		}
		if (e.keyCode == 39) {
			warriorBox.x += 1;
			if (!detectCollision(warriorBox, colliderWallSprite)) {
				direction = 1;
				warrior.scale.x = scaleX;
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
	if (!isColliding) {
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

function detectCollision(sprite1, sprite2) {
	return (
		sprite1.x + sprite1.width > sprite2.x &&
		sprite1.x < sprite2.x + sprite2.width &&
		sprite1.y + sprite1.height > sprite2.y &&
		sprite1.y < sprite2.y + sprite2.height
	);
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
	warrior.y = 250;
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
