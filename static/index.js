import loaders from './loaders.js';
import colliders from './colliders.js';
import textConfig from './text.js';

/**
 * @type {HTMLAudioElement}
 */
const attackSound = new Audio(
	'static/assets/audio/sounds/street-fighter-sound-hadouken.mp3'
);
/**
 * @type {HTMLAudioElement}
 */
const walkingSound = new Audio('static/assets/audio/sounds/step_lth4.mp3');
/**
 * @type {HTMLAudioElement}
 */
const openingTreasureChest = new Audio(
	'static/assets/audio/sounds/treasure-chest-opening.mp3'
);
/**
 * @type {number}
 */
let adventurerAnimationCount = 0;
/**
 * @type {number}
 */
let treasureChestAnimationCount = 0;
/**
 * @type {number}
 */
let direction = 1;
/**
 * @type {boolean}
 */
let isJumping = false;
/**
 * @type {boolean}
 */
let onFloor = false;
/**
 * @type {boolean}
 */
/**
 * @type {boolean}
 */
let isAboutToTouchGround = false;
/**
 * @type {boolean}
 */
let isAboutToCollide = false;
/**
 * @type {boolean}
 */
let treasureChestOpened = false;
/**
 * @type {boolean}
 */
let isWarriorCentered = false;
/**
 * @type {boolean}
 */
let leftEdgeStageReached = false;
/**
 * @type {boolean}
 */
let rightEdgeStageReached = false;
/**
 * @type {Array}
 */
let wallCollidersList = [];
/**
 * @type {Array}
 */
let floorCollidersList = [];
/**
 * @type {Array}
 */
let objectCollidersList = [];
/**
 * @type {object}
 */
let treasureChest;
/**
 * @type {Array}
 */
let treasureChestTextureArray = [];
/**
 * @type {PIXI.Rectangle}
 */
let warriorNarrowBox = new PIXI.Rectangle();
/**
 * @type {PIXI.Rectangle}
 */
let bottomCollisionBox = new PIXI.Rectangle();
/**
 * @type {PIXI.Rectangle}
 */
let leftCollisionBox = new PIXI.Rectangle();
/**
 * @type {PIXI.Rectangle}
 */
let rightCollisionBox = new PIXI.Rectangle();
/**
 * @type {number}
 */
let vx = 0;
/**
 * @type {number}
 */
let vy = 0;

let textBox = new PIXI.Container();

setControls();
setKeyboardControls();
setBackgroundVolume();
setAudioEvents();

var app = new PIXI.Application({
	height: 550,
	width: 900,
	transparent: true,
	x: 0,
	y: 0,
});

document.getElementById('screen').appendChild(app.view);
buildMap();
displayInitialMsg();

// path starting point from server.js where script js is served
/**
 * @type {string}
 */
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

// Listen for animate update
app.ticker.add((delta) => {
	warriorNarrowBox = warrior.getBounds();
	calculateWideBoxes();
	moveCamera(app);
	isAboutToCollide = detectFloorCollision(bottomCollisionBox);
	if (!isAboutToCollide) {
		applyingGravity();
	} else if (isAboutToCollide) {
		vy = 0;
	}
	if (!isAboutToTouchGround && isAboutToCollide) {
		loadIdleTexture();
		isAboutToTouchGround = true;
	}
	if (isJumping) {
		makeJump();
	}
	const animationSpeed = delta / 4;
	adventurerAnimationCount =
		Math.round(adventurerAnimationCount + animationSpeed) %
		textureArray.length;
	warrior.texture = textureArray[adventurerAnimationCount];
	treasureChestAnimationCount =
		Math.round(treasureChestAnimationCount + animationSpeed) %
		treasureChestTextureArray.length;
	treasureChest.texture =
		treasureChestTextureArray[treasureChestAnimationCount];
});

var playingSound = false;

// Build Map functions

function buildMap() {
	setBackgroungImg();
	setColliders(colliders);
	setDecors(loaders);
	setObjects();
}

function setBackgroungImg() {
	const pathToImgFolder = '/static/assets/images/';
	let backgroundImage = PIXI.Texture.from(
		pathToImgFolder + 'Levels/firstmaplevel_background.png'
	);
	let backgroundSprite = new PIXI.Sprite(backgroundImage);
	backgroundSprite.anchor.set(0.0);
	backgroundSprite.height = 642;
	backgroundSprite.width = 3073;
	app.stage.addChild(backgroundSprite);
}

function setDecors(loaders) {}

function setObjects() {
	let treasureChestTexture = PIXI.Texture.from(
		colliders.objectColliders.treasureChest.imgPath
	);
	treasureChestTextureArray.push(treasureChestTexture);
	treasureChest = new PIXI.Sprite(treasureChestTexture);
	treasureChest.anchor.set(colliders.objectColliders.treasureChest.anchor);
	treasureChest.x = colliders.objectColliders.treasureChest.x;
	treasureChest.y = colliders.objectColliders.treasureChest.y;
	treasureChest.width = colliders.objectColliders.treasureChest.width;
	treasureChest.height = colliders.objectColliders.treasureChest.height;
	app.stage.addChild(treasureChest);
	objectCollidersList.push(treasureChest);
}

function setColliders(collidersConf) {
	let floorCollidersObject = collidersConf.floorColliders;
	let wallCollidersObject = collidersConf.wallColliders;
	let collider;
	for (const floorConf in floorCollidersObject) {
		collider = createBasicCollider(floorCollidersObject[floorConf]);
		app.stage.addChild(collider);
		floorCollidersList.push(collider.getBounds());
	}
	for (const wallConf in wallCollidersObject) {
		collider = createBasicCollider(wallCollidersObject[wallConf]);
		app.stage.addChild(collider);
		wallCollidersList.push(collider);
	}
}

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
	window.addEventListener(
		'keydown',
		(e) => {
			if (e.defaultPrevented) {
				return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
			}

			switch (e.key) {
				case 'ArrowDown':
					crouch();
					break;
				case 'ArrowUp':
					jump();
					break;
				case 'ArrowLeft':
					if (vx < 5) {
						vx += 1;
					}
					warrior.scale.x = -2;
					direction = -1;
					if (!detectWallCollision(leftCollisionBox)) {
						move();
					}
					break;
				case 'ArrowRight':
					if (vx < 5) {
						vx += 1;
					}
					warrior.scale.x = 2;
					direction = 1;
					if (!detectWallCollision(rightCollisionBox)) {
						move();
					}
					break;
				case 'é':
					takePotion();
					break;
				case 'a':
					smallAttack();
					break;
				case 'z':
					bigAttack();
					break;
				case 'e':
					detectObjectCollision(warriorNarrowBox)
						? !treasureChestOpened
							? openTreasureChest()
							: closeTreasureChest()
						: doNothing();
					treasureChestOpened = !treasureChestOpened;
				default:
					return;
			}
			e.preventDefault();
		},
		true
	);

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
	}
	if (!isWarriorCentered) {
		warrior.x += vx * direction;
	}
}

function jump() {
	loadJumpTexture();
	if (!isJumping && onFloor) {
		isJumping = true;
		onFloor = false;
		makeJump();
		const timer = setTimeout(() => {
			isJumping = false;
			loadIdleTexture();
			clearTimeout(timer);
		}, 750);
	}
}

function stop() {
	if (!isJumping && onFloor) {
		loadIdleTexture();
	}
	playingSound = false;
	const timer = setInterval(() => {
		if (vx > 0) {
			vx -= 1;
			warrior.x += vx * direction;
		}
		if (vx === 0) {
			clearInterval(timer);
		}
	}, 100);

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

function crouch() {
	loadCrouchTexture();
}

function takePotion() {
	loadTakePotionTexture();
}

// Interactive functions:

function openTreasureChest() {
	if (openingTreasureChest.currentTime !== 0) {
		openingTreasureChest.currentTime = 0;
	}
	openingTreasureChest.play();
	loadOpeningTreasureChestTexture();
	setTimeout(loadOpenedTreasureChestTexture(), 400);
}

function closeTreasureChest() {
	if (openingTreasureChest.currentTime !== 0) {
		openingTreasureChest.currentTime = 0;
	}
	openingTreasureChest.play();
	loadClosingTreasureChestTexture();
	setTimeout(loadClosedTreasureChestTexture(), 400);
}

function doNothing() {}

// Physics functions:

function isColliding(playerBox, collider) {
	return (
		playerBox.x + playerBox.width > collider.x &&
		playerBox.x < collider.x + collider.width &&
		playerBox.y + playerBox.height > collider.y &&
		playerBox.y < collider.y + collider.height
	);
}

function detectWallCollision(playerBox) {
	for (const collider of wallCollidersList) {
		if (isColliding(playerBox, collider)) {
			return true;
		}
	}
	return false;
}

function detectFloorCollision(playerBox) {
	for (const collider of floorCollidersList) {
		if (isColliding(playerBox, collider)) {
			isJumping = false;
			onFloor = true;
			return true;
		}
	}
	return false;
}

function detectObjectCollision(playerBox) {
	for (const collider of objectCollidersList) {
		if (isColliding(playerBox, collider)) {
			return true;
		}
	}
	return false;
}

function applyingGravity() {
	if (vy < 5) {
		vy += 1;
	}
	warrior.y += vy;
}

function makeJump() {
	warrior.y -= 15 - vy;
	warrior.x += vx * direction;
	isAboutToTouchGround = true;
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

function loadCrouchTexture() {
	textureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerCrouchingAnim;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
}

function loadTakePotionTexture() {
	textureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerTakingPotionAnim;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
}

function loadOpeningTreasureChestTexture() {
	treasureChestTextureArray = [];
	let loaderArray = loaders.treasureChestLoader.treasureChestOpeningAnim;
	loaderArray.forEach((img) =>
		treasureChestTextureArray.push(new PIXI.Texture.from(img))
	);
}

function loadOpenedTreasureChestTexture() {
	treasureChestTextureArray = [];
	let loaderArray = loaders.treasureChestLoader.treasureChestOpenedAnim;
	loaderArray.forEach((img) =>
		treasureChestTextureArray.push(new PIXI.Texture.from(img))
	);
}

function loadClosingTreasureChestTexture() {
	treasureChestTextureArray = [];
	let loaderArray = loaders.treasureChestLoader.treasureChestOpeningAnim;
	loaderArray.reverse();
	loaderArray.forEach((img) =>
		treasureChestTextureArray.push(new PIXI.Texture.from(img))
	);
}

function loadClosedTreasureChestTexture() {
	treasureChestTextureArray = [];
	const treasureChestClosedLoader =
		loaders.treasureChestLoader.treasureChestClosed;
	treasureChestTextureArray.push(
		new PIXI.Texture.from(treasureChestClosedLoader)
	);
}

// Text related functions :

function buildText(textConfig) {
	const textBackGroundTexture = new PIXI.Sprite(PIXI.Texture.WHITE);
	textBackGroundTexture.x =
		textConfig.narrationText.narrationText1.overlayConfig.textBox.x;
	textBackGroundTexture.y =
		textConfig.narrationText.narrationText1.overlayConfig.textBox.y;
	textBackGroundTexture.width =
		textConfig.narrationText.narrationText1.overlayConfig.textBox.width;
	textBackGroundTexture.height =
		textConfig.narrationText.narrationText1.overlayConfig.textBox.height;
	textBackGroundTexture.anchor.set(
		textConfig.narrationText.narrationText1.overlayConfig.textBox.anchor
	);
	textBackGroundTexture.tint =
		textConfig.narrationText.narrationText1.overlayConfig.textBox.tint;
	let text = new PIXI.Text(
		textConfig.narrationText.narrationText1.pixiRequirements.text,
		textConfig.narrationText.narrationText1.pixiRequirements.style
	);
	text.x = textConfig.narrationText.narrationText1.overlayConfig.text.x;
	text.y = textConfig.narrationText.narrationText1.overlayConfig.text.y;
	text.anchor.set(
		textConfig.narrationText.narrationText1.overlayConfig.text.anchor
	);
	textBox.addChild(textBackGroundTexture, text);
	app.stage.addChild(textBox);
}

function displayInitialMsg() {
	buildText(textConfig);
	removeTextBox();
}

function removeTextBox() {
	// find better method
	setTimeout(() => {
		textBox.parent.removeChild(textBox);
		textBox.destroy({children: true, texture: true, baseTexture: true});
	}, 5000);
	//	app.stage.removeChild(textBox);
}

// Camera functions :

function moveCamera(app) {
	console.log(warrior.x);
	isWarriorCentered =
		(app.screen.width + vx * direction) / 2 - 5 <= warrior.x &&
		warrior.x <= (app.screen.width + vx * direction) / 2 + 5;
	if (isWarriorCentered && !leftEdgeStageReached && !rightEdgeStageReached) {
		app.stage.x -= vx * direction;
	}
	leftEdgeStageReached = app.stage.x === 0 && isWarriorCentered;
	rightEdgeStageReached =
		app.stage.x === -app.stage.width && isWarriorCentered;
}
