import loaders from './loaders.js';
import colliders from './colliders.js';
import textConfig from './text.js';
import PIXI from './pixi-legacy.js';

/**
 * @type {HTMLAudioElement}
 */
const attackSound = new Audio(
	'static/assets/audio/sounds/street-fighter-sound-hadouken.mp3'
);
/**
 * @type {HTMLAudioElement}
 */
const walkSound = new Audio('static/assets/audio/sounds/step_lth4.mp3');
/**
 * @type {HTMLAudioElement}
 */
const warriorJumpSound = new Audio(
	'static/assets/audio/sounds/warriorJumpSound.mp3'
);
/**
 * @type {HTMLAudioElement}
 */
const openingTreasureChestSound = new Audio(
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
let isAboutToCollide = false;
/**
 * @type {boolean}
 */
let treasureChestOpened = false;
/**
 * @type {boolean}
 */
let isWarriorRightCentered = false;
/**
 * @type {boolean}
 */
let isWarriorLeftCentered = false;
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
/**
 * @type {PIXI.Container}
 */
let textBox = new PIXI.Container();
/**
 * @type {PIXI.Container}
 */
let foreground = new PIXI.Container();
/**
 * @type {PIXI.Container}
 */
let middleground = new PIXI.Container();
/**
 * @type {PIXI.Container}
 */
let background = new PIXI.Container();
/**
 * @type {NodeJS.Timeout}
 */
let vxTimer;
/**
 * @type {boolean}
 */
let playingSound = false;
/**
 * @type {Object}
 */
const animationStateEnum = {
	ATTACKING_ONE: 'attackingOne',
	ATTACKING_TWO: 'attackingTwo',
	JUMPING: 'jumping',
	IDLING: 'idling',
	RUNNING: 'running',
	CROUCHING: 'crouching',
	TAKING_POTION: 'takingPotion',
};
/**
 * @type {Object}
 */
let animationState = animationStateEnum.IDLING;

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
		isJumping = false;
	}
	console.log(!isJumping && isAboutToCollide);
	if (
		!isJumping &&
		isAboutToCollide &&
		animationState === animationStateEnum.JUMPING
	) {
		animationState = animationStateEnum.IDLING;
		isJumping = true;
	}
	loadWarriorAnimation();
	animateElements(delta);
});

// Build Map functions

function buildMap() {
	setBackgroungImg();
	setBackground();
	setColliders(colliders);
	setDecors(loaders);
	setObjects();
	setForeground();
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
	background.addChild(backgroundSprite);
}

function setBackground() {
	app.stage.addChild(background);
}
function setForeground() {
	app.stage.addChild(foreground);
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
	foreground.addChild(treasureChest);
	objectCollidersList.push(treasureChest);
}

function setColliders(collidersConf) {
	let floorCollidersObject = collidersConf.floorColliders;
	let wallCollidersObject = collidersConf.wallColliders;
	let collider;
	for (const floorConf in floorCollidersObject) {
		collider = createBasicCollider(floorCollidersObject[floorConf]);
		foreground.addChild(collider);
		floorCollidersList.push(collider.getBounds());
	}
	for (const wallConf in wallCollidersObject) {
		collider = createBasicCollider(wallCollidersObject[wallConf]);
		foreground.addChild(collider);
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
					vx = 5;
					warrior.scale.x = -2;
					direction = -1;
					clearInterval(vxTimer);
					if (!detectWallCollision(leftCollisionBox)) {
						move();
					}
					break;
				case 'ArrowRight':
					vx = 5;
					warrior.scale.x = 2;
					direction = 1;
					clearInterval(vxTimer);
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
		if (e.defaultPrevented) {
			return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
		}
		switch (e.key) {
			case 'a':
			case 'z':
				stopAttackingAnim();
				break;
			case 'ArrowUp':
				return;
			case 'ArrowRight':
			case 'ArrowLeft':
			default:
				stop();
		}
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
	if (detectFloorCollision(bottomCollisionBox)) {
		playSound(walkSound);
		animationState = animationStateEnum.RUNNING;
	}
	if (
		(isWarriorRightCentered && direction === 1) ||
		(isWarriorLeftCentered &&
			direction === -1 &&
			detectFloorCollision(bottomCollisionBox))
	) {
		return;
	}
	warrior.x += vx * direction;
}

function jump() {
	if (!detectFloorCollision(bottomCollisionBox)) {
		return;
	} else {
		playingSound = false;
		playSound(warriorJumpSound);
		animationState = animationStateEnum.JUMPING;
		vy = -18;
		warrior.y += vy;
		warrior.x += vx * direction;
		isJumping = true;
	}
}

function smallAttack() {
	playSound(attackSound);
	animationState = animationStateEnum.ATTACKING_ONE;
}

function bigAttack() {
	playSound(attackSound);
	animationState = animationStateEnum.ATTACKING_TWO;
}

function crouch() {
	animationState = animationStateEnum.CROUCHING;
}

function takePotion() {
	loadTakePotionTexture();
}

function stop() {
	playingSound = false;
	vxTimer = setInterval(() => {
		if (vx > 0 && detectFloorCollision(bottomCollisionBox)) {
			vx--;
			warrior.x += vx * direction;
		}
		if (vx === 0) {
			animationState = animationStateEnum.IDLING;
			clearInterval(vxTimer);
		}
	}, 100);
	stopSound();
}
function stopAttackingAnim() {
	const timer = setTimeout(() => {
		animationState = animationStateEnum.IDLING;
		clearTimeout(timer);
	}, 500);
}

// Interactive functions:

function openTreasureChest() {
	if (openingTreasureChestSound.currentTime !== 0) {
		openingTreasureChestSound.currentTime = 0;
	}
	openingTreasureChestSound.play();
	loadOpeningTreasureChestTexture();
	setTimeout(loadOpenedTreasureChestTexture(), 400);
}

function closeTreasureChest() {
	if (openingTreasureChestSound.currentTime !== 0) {
		openingTreasureChestSound.currentTime = 0;
	}
	openingTreasureChestSound.play();
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
	if (vy < 10) {
		vy++;
	}
	warrior.y += vy;
	warrior.x += vx * direction;
}

//Audio functions:

function setBackgroundVolume() {
	const backgroundAudio = document.getElementById('audio');
	backgroundAudio.volume = 0.5;
}

function playSound(sound) {
	if (!playingSound) {
		sound.currentTime = 0;
		sound.volume = 1;
		sound.play();
		playingSound = true;
	}
}

function stopSound() {
	attackSound.pause();
	walkSound.pause();
	warriorJumpSound.pause();
}

function setAudioEvents() {
	attackSound.addEventListener('play', () => {
		attackSound.volume = 0.5;
	});
	attackSound.addEventListener('ended', () => {
		playingSound = false;
	});
	walkSound.addEventListener('ended', () => {
		playingSound = false;
	});
	warriorJumpSound.addEventListener('play', () => {
		warriorJumpSound.volume = 0.5;
	});
	warriorJumpSound.addEventListener('ended', () => {
		playingSound = false;
	});
}

// TextureLoader functions :

function loadWarriorAnimation() {
	switch (animationState) {
		case animationStateEnum.JUMPING:
			loadJumpTexture();
			break;
		case animationStateEnum.RUNNING:
			loadRunTexture();
			break;
		case animationStateEnum.CROUCHING:
			loadCrouchTexture();
			break;
		case animationStateEnum.ATTACKING_ONE:
			loadSmallAttackTexture();
			break;
		case animationStateEnum.ATTACKING_TWO:
			loadBigAttackTexture();
			break;
		case animationState.TAKING_POTION:
			loadTakePotionTexture();
			break;
		case animationStateEnum.IDLING:
		default:
			loadIdleTexture();
			break;
	}
}

function animateElements(delta) {
	animateWarrior(delta);
	animateTreasureChest(delta);
}

function animateWarrior(delta) {
	adventurerAnimationCount =
		Math.round(
			adventurerAnimationCount + getAnimationSpeed('player', delta)
		) % textureArray.length;
	warrior.texture = textureArray[adventurerAnimationCount];
}

function animateTreasureChest(delta) {
	treasureChestAnimationCount =
		Math.round(
			treasureChestAnimationCount + getAnimationSpeed('object', delta)
		) % treasureChestTextureArray.length;
	treasureChest.texture =
		treasureChestTextureArray[treasureChestAnimationCount];
}

function getAnimationSpeed(animatedSpriteType, delta) {
	switch (animatedSpriteType) {
		case 'object':
			return delta / 6;
		case 'player':
			return delta / 5;
		default:
			return 0;
	}
}

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
	isWarriorLeftCentered = warrior.x <= app.screen.x + 350;
	isWarriorRightCentered = warrior.x >= app.screen.width - 350;
	leftEdgeStageReached = foreground.x >= app.stage.x;
	rightEdgeStageReached = foreground.x === -app.stage.width;
	if (
		(isWarriorRightCentered && direction === 1) ||
		(isWarriorLeftCentered &&
			direction === -1 &&
			!leftEdgeStageReached &&
			!rightEdgeStageReached)
	) {
		moveBackground();
		moveForeground();
		updateForegroundCollidersPosition();
	}
}

function moveBackground() {
	background.x -= vx * direction * 0.5;
}

function moveForeground() {
	foreground.x -= vx * direction;
}

function updateForegroundCollidersPosition() {
	const floorColliderListLength = floorCollidersList.length;
	const wallCollidersListLength = wallCollidersList.length;
	const objectCollidersListLength = objectCollidersList.length;
	floorCollidersList = [];
	wallCollidersList = [];
	objectCollidersList = [];
	for (let i = 0; i < floorColliderListLength; i++) {
		floorCollidersList.push(foreground.children[i].getBounds());
	}
	for (
		let i = floorColliderListLength;
		i < floorColliderListLength + wallCollidersListLength;
		i++
	) {
		wallCollidersList.push(foreground.children[i].getBounds());
	}
	for (
		let i = floorColliderListLength + wallCollidersListLength;
		i <
		floorColliderListLength +
			wallCollidersListLength +
			objectCollidersListLength;
		i++
	) {
		objectCollidersList.push(foreground.children[i].getBounds());
	}
}
