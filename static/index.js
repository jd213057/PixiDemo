import loaders from '/static/loaders.js';
/* const loaders = require('/static/loaders.js'); */
/* import * as loaders from '/static/loaders.js'; */
console.log(loaders);

const attackSound = new Audio(
	'static/assets/audio/sounds/street-fighter-sound-hadouken.mp3'
);
const walkingSound = new Audio('static/assets/audio/sounds/step_lth4.mp3');
let animationCount = 0;
let isMoving = false;
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
// create a new Sprite from an image path
let warriorRunningImg = [
	pathToAnimation + '/Run/Run__000.png',
	pathToAnimation + '/Run/Run__001.png',
	pathToAnimation + '/Run/Run__002.png',
	pathToAnimation + '/Run/Run__003.png',
	pathToAnimation + '/Run/Run__004.png',
	pathToAnimation + '/Run/Run__005.png',
	pathToAnimation + '/Run/Run__006.png',
	pathToAnimation + '/Run/Run__007.png',
	pathToAnimation + '/Run/Run__008.png',
	pathToAnimation + '/Run/Run__009.png',
	pathToAnimation + '/Run/Run__010.png',
	pathToAnimation + '/Run/Run__011.png',
	pathToAnimation + '/Run/Run__012.png',
];
let warriorJumpingImg = [
	pathToAnimation + '/Jump/Jump__000.png',
	pathToAnimation + '/Jump/Jump__001.png',
	pathToAnimation + '/Jump/Jump__002.png',
];
let warriorIdlingImg = [
	pathToAnimation + '/Idle/Idle__000.png',
	pathToAnimation + '/Idle/Idle__001.png',
	pathToAnimation + '/Idle/Idle__002.png',
	pathToAnimation + '/Idle/Idle__003.png',
	pathToAnimation + '/Idle/Idle__004.png',
	pathToAnimation + '/Idle/Idle__005.png',
	pathToAnimation + '/Idle/Idle__006.png',
	pathToAnimation + '/Idle/Idle__007.png',
	pathToAnimation + '/Idle/Idle__008.png',
	pathToAnimation + '/Idle/Idle__009.png',
	pathToAnimation + '/Idle/Idle__010.png',
	pathToAnimation + '/Idle/Idle__011.png',
	pathToAnimation + '/Idle/Idle__012.png',
	pathToAnimation + '/Idle/Idle__013.png',
	pathToAnimation + '/Idle/Idle__014.png',
	pathToAnimation + '/Idle/Idle__015.png',
	pathToAnimation + '/Idle/Idle__016.png',
	pathToAnimation + '/Idle/Idle__017.png',
	pathToAnimation + '/Idle/Idle__018.png',
	pathToAnimation + '/Idle/Idle__019.png',
	pathToAnimation + '/Idle/Idle__020.png',
	pathToAnimation + '/Idle/Idle__021.png',
	pathToAnimation + '/Idle/Idle__022.png',
	pathToAnimation + '/Idle/Idle__023.png',
	pathToAnimation + '/Idle/Idle__024.png',
	pathToAnimation + '/Idle/Idle__025.png',
];
let warriorDyingImg = [
	pathToAnimation + '/Die/Die__000.png',
	pathToAnimation + '/Die/Die__001.png',
	pathToAnimation + '/Die/Die__002.png',
	pathToAnimation + '/Die/Die__003.png',
	pathToAnimation + '/Die/Die__004.png',
	pathToAnimation + '/Die/Die__005.png',
	pathToAnimation + '/Die/Die__006.png',
	pathToAnimation + '/Die/Die__007.png',
	pathToAnimation + '/Die/Die__008.png',
	pathToAnimation + '/Die/Die__009.png',
	pathToAnimation + '/Die/Die__010.png',
	pathToAnimation + '/Die/Die__011.png',
	pathToAnimation + '/Die/Die__012.png',
	pathToAnimation + '/Die/Die__013.png',
	pathToAnimation + '/Die/Die__014.png',
	pathToAnimation + '/Die/Die__015.png',
	pathToAnimation + '/Die/Die__016.png',
	pathToAnimation + '/Die/Die__017.png',
];
let warriorAttackingImg = [
	pathToAnimation + '/Attack/Attack__000.png',
	pathToAnimation + '/Attack/Attack__001.png',
	pathToAnimation + '/Attack/Attack__002.png',
	pathToAnimation + '/Attack/Attack__003.png',
	pathToAnimation + '/Attack/Attack__004.png',
	pathToAnimation + '/Attack/Attack__005.png',
	pathToAnimation + '/Attack/Attack__006.png',
	pathToAnimation + '/Attack/Attack__007.png',
	pathToAnimation + '/Attack/Attack__008.png',
	pathToAnimation + '/Attack/Attack__009.png',
	pathToAnimation + '/Attack/Attack__010.png',
];
let warriorAttacking2Img = [
	pathToAnimation + '/Attack 2/Attack2__000.png',
	pathToAnimation + '/Attack 2/Attack2__001.png',
	pathToAnimation + '/Attack 2/Attack2__002.png',
	pathToAnimation + '/Attack 2/Attack2__003.png',
	pathToAnimation + '/Attack 2/Attack2__004.png',
	pathToAnimation + '/Attack 2/Attack2__005.png',
	pathToAnimation + '/Attack 2/Attack2__006.png',
	pathToAnimation + '/Attack 2/Attack2__007.png',
	pathToAnimation + '/Attack 2/Attack2__008.png',
	pathToAnimation + '/Attack 2/Attack2__009.png',
	pathToAnimation + '/Attack 2/Attack2__010.png',
	pathToAnimation + '/Attack 2/Attack2__011.png',
	pathToAnimation + '/Attack 2/Attack2__012.png',
	pathToAnimation + '/Attack 2/Attack2__013.png',
	pathToAnimation + '/Attack 2/Attack2__014.png',
	pathToAnimation + '/Attack 2/Attack2__015.png',
	pathToAnimation + '/Attack 2/Attack2__016.png',
	pathToAnimation + '/Attack 2/Attack2__017.png',
	pathToAnimation + '/Attack 2/Attack2__018.png',
	pathToAnimation + '/Attack 2/Attack2__019.png',
	pathToAnimation + '/Attack 2/Attack2__020.png',
	pathToAnimation + '/Attack 2/Attack2__021.png',
];
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
			warriorBox.x -= 5;
			if (!detectCollision(warriorBox, colliderWallSprite)) {
				moveLeft();
			}
		}
		if (e.keyCode == 38) {
			jump();
		}
		if (e.keyCode == 39) {
			warriorBox.x += 5;
			if (!detectCollision(warriorBox, colliderWallSprite)) {
				moveRigth();
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
		/* warrior.y = 250; */
		stop();
	});
}

// Move functions :

function moveLeft() {
	if (!isColliding) {
		playSound(walkingSound);
		warrior.scale.x = -scaleX;
		warrior.x -= 5;
		loadRunTexture();
	}
}

function moveRigth() {
	if (!isColliding) {
		playSound(walkingSound);
		warrior.scale.x = scaleX;
		warrior.x += 5;
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
	for (let i = 0; i <= 10; i++) {
		let texture = PIXI.Texture.from(warriorAttackingImg[i]);
		textureArray.push(texture);
	}
	warrior.y = 260;
	isMoving = true;
}

function loadBigAttackTexture() {
	textureArray = [];
	for (let i = 0; i <= 21; i++) {
		let texture = PIXI.Texture.from(warriorAttacking2Img[i]);
		textureArray.push(texture);
	}
	warrior.y = 225;
	isMoving = true;
}

function loadIdleTexture() {
	warrior.y = 250;
	textureArray = [];
	for (let i = 0; i <= 25; i++) {
		let texture = PIXI.Texture.from(warriorIdlingImg[i]);
		textureArray.push(texture);
	}
	isMoving = true;
}

function loadJumpTexture() {
	warrior.y = 250;
	textureArray = [];
	for (let i = 0; i <= 2; i++) {
		let texture = PIXI.Texture.from(warriorJumpingImg[i]);
		textureArray.push(texture);
	}
	isMoving = true;
}

function loadRunTexture() {
	warrior.y = 250;
	textureArray = [];
	for (let i = 0; i <= 12; i++) {
		let texture = PIXI.Texture.from(warriorRunningImg[i]);
		textureArray.push(texture);
	}
	isMoving = true;
}

function loadDieTexture() {
	warrior.y = 270;
	textureArray = [];
	for (let i = 0; i <= 17; i++) {
		let texture = PIXI.Texture.from(warriorDyingImg[i]);
		textureArray.push(texture);
	}
	isMoving = true;
}
