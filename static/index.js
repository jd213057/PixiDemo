import loaders from './loaders.js';
import spritesConfig from './sprites.js';
import textConfig from './text.js';
import GAME_SETTINGS from './settings.js';
import PIXI from './pixi-legacy.js';
/**
 * @type {HTMLAudioElement}
 * @description Path of sound file played when attacking
 */
const attackSound = new Audio(
	'static/assets/audio/sounds/street-fighter-sound-hadouken.mp3'
);
/**
 * @type {HTMLAudioElement}
 * @description Path of sound file played when walking
 */
const walkSound = new Audio('static/assets/audio/sounds/step_lth4.mp3');
/**
 * @type {HTMLAudioElement}
 * @description Path of sound file when played jumping
 */
const warriorJumpSound = new Audio(
	'static/assets/audio/sounds/warriorJumpSound.mp3'
);
/**
 * @type {HTMLAudioElement}
 * @description Path of sound file when opening treasure chest
 */
const openingTreasureChestSound = new Audio(
	'static/assets/audio/sounds/treasure-chest-opening.mp3'
);
/**
 * @type {number}
 * @description Index of Adventurer's array texture synchronized with delta
 */
let adventurerAnimationCount = 0;
/**
 * @type {number}
 * @description Index of Treasure Chest's array texture synchronized with delta
 */
let treasureChestAnimationCount = 0;
/**
 * @type {number}
 * @description Index of textList array
 */
let indexOfTextList = 0;
/**
 * @type {number}
 * @description Determines whether player goes forward or backward
 */
let direction = 1;
/**
 * @type {boolean}
 * @description Indicates whether text content is been displayed or not
 */
let displayingText = false;
/**
 * @type {boolean}
 * @description Indicates whether warning text content is been displayed or not
 */
let displayingWarningText = false;
/**
 * @type {boolean}
 * @description Indicates whether text content for first area of level has been displayed
 */
let hasBeenDisplayedZone1;
/**
 * @type {boolean}
 * @description Indicates whether text content for second area of level has been displayed
 */
let hasBeenDisplayedZone2;
/**
 * @type {boolean}
 * @description Indicates whether text content for third area of level has been displayed
 */
let hasBeenDisplayedZone3;
/**
 * @type {boolean}
 * @description Indicates whether player is jumping or not
 */
let isJumping = false;
/**
 * @type {boolean}
 * @description Bottom part of player's sprite used for floor collisions
 */
let isAboutToCollideWithBottom = false;
/**
 * @type {boolean}
 * @description Top part of player's sprite used for floor collisions
 */
let isAboutToCollideWithTop = false;
/**
 * @type {boolean}
 * @description Left part of player's sprite used for wall collisions
 */
let isAboutToCollideWithLeft = false;
/**
 * @type {boolean}
 * @description Right part of player's sprite used for wall collisions
 */
let isAboutToCollideWithRight = false;
/**
 * @type {boolean}
 * @description Indicates whether first treasure chest is opened or not
 */
let treasureChestOpened1 = false;
/**
 * @type {boolean}
 * @description Indicates whether second treasure chest is opened or not
 */
let treasureChestOpened2 = false;
/**
 * @type {boolean}
 * @description Indicates whether third treasure chest is opened or not
 */
let treasureChestOpened3 = false;
/**
 * @type {boolean}
 * @description Indicates whether player is left centered on the screen
 */
let isWarriorLeftCentered = false;
/**
 * @type {boolean}
 * @description Indicates whether player is right centered on the screen
 */
let isWarriorRightCentered = false;
/**
 * @type {boolean}
 * @description Indicates if left edge of screen is reached by player or not
 */
let leftEdgeScreenReached = false;
/**
 * @type {boolean}
 * @description Indicates if left edge of screen is reached by player or not
 */
let rightEdgeScreenReached = false;
/**
 * @type {boolean}
 * @description Indicates if left part of stage is reached or not
 */
let leftEdgeStageReached = false;
/**
 * @type {boolean}
 * @description Indicates if right part of stage is reached or not
 */
let rightEdgeStageReached = false;
/**
 * @type {boolean}
 * @description Indicates whether player is stopping or not
 */
let stopping = false;
/**
 * @type {Array}
 * @description ArrayList of all colliders
 */
let collidersCheckList = [];
/**
 * @type {Array}
 * @description ArrayList of floor colliders
 */
let obstacleCollidersList = [];
/**
 * @type {Array}
 * @description ArrayList of object colliders
 */
let objectCollidersList = [];
/**
 * @type {Array}
 * @description ArrayList of scenery colliders
 */
let decorsCollidersList = [];
/**
 * @type {Array}
 * @description ArrayList of mobile colliders moving from left to right
 */
let leftToRightCollidersList = [];
/**
 * @type {Array}
 * @description ArrayList of mobile colliders moving from right to left
 */
let rightToLeftCollidersList = [];
/**
 * @type {Array}
 * @description ArrayList of mobile colliders moving from bottom to top
 */
let bottomToTopCollidersList = [];
/**
 * @type {Array}
 * @description ArrayList of mobile colliders moving from top to bottom
 */
let topToBottomCollidersList = [];
/**
 * @type {PIXI.Sprite}
 * @description Treasure Chest sprite
 */
let treasureChest1 = false;
/**
 * @type {Array}
 * @description ArrayList of Treasure Chest's textures used for current animation
 */
let treasureChest1TextureArray = [];
/**
 * @type {PIXI.Sprite}
 * @description Treasure Chest sprite
 */
let treasureChest2 = false;
/**
 * @type {Array}
 * @description ArrayList of Treasure Chest's textures used for current animation
 */
let treasureChest2TextureArray = [];
/**
 * @type {PIXI.Sprite}
 * @description Treasure Chest sprite
 */
let treasureChest3 = false;
/**
 * @type {Array}
 * @description ArrayList of Treasure Chest's textures used for current animation
 */
let treasureChest3TextureArray = [];
/**
 * @type {Array}
 * @description ArrayList of text content used for the game
 */
let textListToShow = [];
/**
 * @type {PIXI.Rectangle}
 * @description Player bounds
 */
let warriorBounds = new PIXI.Rectangle();
/**
 * @type {PIXI.Rectangle}
 * @description Player's bottom part bounds
 */
let bottomCollisionBox = new PIXI.Rectangle();
/**
 * @type {PIXI.Rectangle}
 * @description Player's top part bounds
 */
let topCollisionBox = new PIXI.Rectangle();
/**
 * @type {PIXI.Rectangle}
 * @description Player's left part bounds
 */
let leftCollisionBox = new PIXI.Rectangle();
/**
 * @type {PIXI.Rectangle}
 * @description Player's right part bounds
 */
let rightCollisionBox = new PIXI.Rectangle();
/**
 * @type {PIXI.Rectangle}
 * @description Updated left screen limit player cannot pass
 */
let updatedLeftEdgeScreen;
/**
 * @type {PIXI.Rectangle}
 * @description Updated right screen limit player cannot pass
 */
let updatedRightEdgeScreen;
/**
 * @type {number}
 * @description Player's speed for x abscissa
 */
let vx = GAME_SETTINGS.PHYSICS_SETTINGS.PLAYER_MIN_SPEED;
/**
 * @type {number}
 * @description Player's speed for y abscissa
 */
let vy = GAME_SETTINGS.PHYSICS_SETTINGS.PLAYER_MIN_SPEED;
/**
 * @type {PIXI.Texture}
 * @description Background texture for textBox
 */
let textBackGroundTexture = new PIXI.Sprite(PIXI.Texture.WHITE);
/**
 * @type {PIXI.Texture}
 * @description Background texture for warningTextBox
 */
let warningTextBackGroundTexture = new PIXI.Sprite(PIXI.Texture.WHITE);
/**
 * @type {PIXI.Text}
 * @description Container for text display
 */
let text = new PIXI.Text();
/**
 * @type {PIXI.Text}
 * @description Container for warning text display
 */
let warningText = new PIXI.Text();
/**
 * @type {PIXI.Sprite}
 * @description Next text button icon for warningTextBox
 */
let warningNextTextButtonImg = new PIXI.Sprite();
/**
 * @type {PIXI.Container}
 * @description Container for text display
 */
let textBox = new PIXI.Container();
/**
 * @type {PIXI.Container}
 * @description Container for warning text display
 */
let warningTextBox = new PIXI.Container();
/**
 * @type {PIXI.Container}
 * @description Container for all foreground stage elements
 */
let foreground = new PIXI.Container();
/**
 * @type {PIXI.Container}
 * @description Container for all middleground stage elements
 */
let middleground = new PIXI.Container();
/**
 * @type {PIXI.Container}
 * @description Container for all backgorund stage elements
 */
let background = new PIXI.Container();
/**
 * @type {PIXI.Container}
 * @description Child container of Foreground, contains all moving colliders
 */
let foregroundStaticCollidersSubContainer = new PIXI.Container();
/**
 * @type {PIXI.Container}
 * @description Child container of Foreground, contains all moving colliders
 */
let foregroundMobileCollidersSubContainer = new PIXI.Container();
/**
 * @type {PIXI.Container}
 * @description Child container of foregroundMobileCollidersSubContainer, contains all moving colliders from left to right
 */
let leftToRightForegroundSubContainer = new PIXI.Container();
/**
 * @type {PIXI.Container}
 * @description Child container of foregroundMobileCollidersSubContainer, contains all moving colliders from right to left
 */
let rightToLeftForegroundSubContainer = new PIXI.Container();
/**
 * @type {PIXI.Container}
 * @description Child container of foregroundMobileCollidersSubContainer, contains all moving colliders from top to bottom
 */
let topToBottomForegroundSubContainer = new PIXI.Container();
/**
 * @type {PIXI.Container}
 * @description Child container of foregroundMobileCollidersSubContainer, contains all moving colliders from bottom to top
 */
let bottomToTopForegroundSubContainer = new PIXI.Container();
/**
 * @type {number}
 * @description Counter for mobile platforms
 */
let movementCount = 0;
/**
 * @type {number}
 * @description Speed for mobile platforms
 */
let movementSpeed = GAME_SETTINGS.PHYSICS_SETTINGS.MOBILE_COLLIDERS_SPEED;
/**
 * @type {boolean}
 * @description Indicates whether sound is playing or not
 */
let playingSound = false;
/**
 * @type {Object}
 * @description Enumeration of all text display zone
 */
const textDisplayZoneEnum = {
	ZONE_ONE: 'zoneOne',
	ZONE_TWO: 'zoneTwo',
	ZONE_THREE: 'zoneThree',
	NO_ZONE: 'noZone',
};
/**
 * @type {Object}
 * @description Indicates whether warrior is in a text display zone or not
 */
let textDisplayZone = textDisplayZoneEnum.NO_ZONE;
/**
 * @type {Object}
 * @description Enumeration of all possible player's animation state
 */
const animationStateEnum = {
	ATTACKING_ONE: 'attackingOne',
	ATTACKING_TWO: 'attackingTwo',
	CROUCHING: 'crouching',
	DYING: 'dying',
	IDLING: 'idling',
	JUMPING: 'jumping',
	RUNNING: 'running',
	TAKING_POTION: 'takingPotion',
};
/**
 * @type {Object}
 * @description Player's animation state
 */
let animationState = animationStateEnum.IDLING;
/**
 * @type {PIXI.AnimatedSprite}
 * @description Player's sprite
 */
let warrior;
/**
 * @type {PIXI.Application}
 * @description Pixi application embedded in index.html's screen
 */
var app = new PIXI.Application({
	width: GAME_SETTINGS.APP_SCREEN_SETTINGS.APP_SCREEN_WIDTH,
	height: GAME_SETTINGS.APP_SCREEN_SETTINGS.APP_SCREEN_HEIGHT,
	transparent: GAME_SETTINGS.APP_SCREEN_SETTINGS.TRANSPARENT,
	antialias: GAME_SETTINGS.APP_SCREEN_SETTINGS.ANTIALIASING,
	x: GAME_SETTINGS.APP_SCREEN_SETTINGS.APP_SCREEN_X,
	y: GAME_SETTINGS.APP_SCREEN_SETTINGS.APP_SCREEN_Y,
});
/**
 * @type {Array}
 * @description ArrayList of player's textures used for cureent animation
 */
let warriorTextureArray = [];
/**
 * @type {string}
 * @description Path to image repository
 */
const pathToAnimation = '/static/assets/images/';
/**
 * @type {number}
 * @description Indicates when to stop warrior
 */
let stopCounter = 0;
/**
 * @type {number}
 * @description Time in ms since last frame was rendered
 */
let elapsedTime = 0;
/**
 * @type {number}
 * @description Delay in ms targeted between last frame and current frame displayed
 */
const fpsDelta = GAME_SETTINGS.TICKER_SETTINGS.DELTA_TIME_TARGETED;

// Initialization IIFE function

(function initializeGame() {
	removeDefaultTicker();
	setKeyboardControls();
	setBackgroundVolume();
	setAudioEvents();
	addStageToScreen();
	buildStage();
	getInitialEdgeScreen();
	setTicker();
})();

//Core functions called to initialize or update game rendering

function removeDefaultTicker() {
	app.ticker.remove(app.render, app);
}

function tick(delta) {
	elapsedTime += delta;
	if (elapsedTime >= fpsDelta) {
		update(elapsedTime);
		elapsedTime = 0;
	}
}

function update(delta) {
	reloadIfFalling();
	calculateWideBoxes();
	updateCameraCheckers();
	updateMovementCycle();
	updateMobileColliders();
	updateAllCollidersList();
	updateWarriorCollider();
	updatingVx();
	updatingVy();
	moveCamera();
	updateAnimationState();
	loadWarriorAnimation();
	animateElements(delta);
	manageTextContent(warrior.x);
	render();
}

function render() {
	app.render();
}

// Build Stage functions

function buildStage() {
	setBackgroundContainer();
	setMiddleGroundContainer();
	setForegroundContainer();
}

function addContainerToStage(container) {
	app.stage.addChild(container);
}

function setBackgroundContainer() {
	let backgroundImage = PIXI.Texture.from(
		pathToAnimation + 'Levels/firstmaplevel_background.png'
	);
	let backgroundSprite1 = new PIXI.Sprite(backgroundImage);
	backgroundSprite1.anchor.set(0.0);
	backgroundSprite1.x = 0;
	backgroundSprite1.y = 0;
	backgroundSprite1.height = 642;
	backgroundSprite1.width = 3073;
	background.addChild(backgroundSprite1);
	let backgroundSprite2 = new PIXI.Sprite(backgroundImage);
	backgroundSprite2.anchor.set(0.0);
	backgroundSprite2.x = 3072;
	backgroundSprite2.y = 0;
	backgroundSprite2.height = 642;
	backgroundSprite2.width = 3073;
	background.addChild(backgroundSprite2);
	addContainerToStage(background);
}

function setMiddleGroundContainer() {
	let middlegroundImage = PIXI.Texture.from(
		pathToAnimation + 'Levels/middleground_level_01.png'
	);
	let middlegroundSprite1 = new PIXI.Sprite(middlegroundImage);
	middlegroundSprite1.anchor.set(0.0);
	middlegroundSprite1.x = 0;
	middlegroundSprite1.y = 0;
	middlegroundSprite1.height = 642;
	middlegroundSprite1.width = 3073;
	middleground.addChild(middlegroundSprite1);
	let middlegroundSprite2 = new PIXI.Sprite(middlegroundImage);
	middlegroundSprite2.anchor.set(0.0);
	middlegroundSprite2.x = 3072;
	middlegroundSprite2.y = 0;
	middlegroundSprite2.height = 642;
	middlegroundSprite2.width = 3073;
	middleground.addChild(middlegroundSprite2);
	addContainerToStage(middleground);
}

function setForegroundContainer() {
	(function setDecors() {
		let decorsCollidersObject = spritesConfig.decorsColliders;
		let collider;
		for (const decorsConf in decorsCollidersObject) {
			collider = createBasicCollider(decorsCollidersObject[decorsConf]);
			foreground.addChild(collider);
			decorsCollidersList.push(collider.getBounds());
		}
	})();
	(function setStaticColliders() {
		Object.entries(spritesConfig.obstacleColliders).forEach((e) => {
			let collider = createBasicCollider(e[1]);
			foreground.addChild(collider);
			obstacleCollidersList.push(collider.getBounds());
		});
	})();
	(function setObjects() {
		treasureChest1 = createBasicSprite(
			treasureChest1TextureArray,
			treasureChest1,
			spritesConfig.objectColliders.treasureChest1
		);
		treasureChest2 = createBasicSprite(
			treasureChest2TextureArray,
			treasureChest2,
			spritesConfig.objectColliders.treasureChest2
		);
		treasureChest3 = createBasicSprite(
			treasureChest3TextureArray,
			treasureChest3,
			spritesConfig.objectColliders.treasureChest3
		);
		foreground.addChild(treasureChest1, treasureChest2, treasureChest3);
		objectCollidersList.push(
			treasureChest1,
			treasureChest2,
			treasureChest3
		);
	})();
	(function setMobileColliders() {
		Object.entries(spritesConfig.mobileColliders).forEach((e) => {
			let collider = createBasicCollider(e[1]);
			switch (e[1].movement) {
				case '+1X':
					setMobileSubContainer(
						leftToRightForegroundSubContainer,
						leftToRightCollidersList,
						collider
					);
					break;
				case '-1X':
					setMobileSubContainer(
						rightToLeftForegroundSubContainer,
						rightToLeftCollidersList,
						collider
					);
					break;
				case '+1Y':
					setMobileSubContainer(
						topToBottomForegroundSubContainer,
						topToBottomCollidersList,
						collider
					);
					break;
				case '-1Y':
					setMobileSubContainer(
						bottomToTopForegroundSubContainer,
						bottomToTopCollidersList,
						collider
					);
					break;
				default:
					return;
			}
		});
		foregroundMobileCollidersSubContainer.addChild(
			leftToRightForegroundSubContainer,
			rightToLeftForegroundSubContainer,
			topToBottomForegroundSubContainer,
			bottomToTopForegroundSubContainer
		);
		foreground.addChild(foregroundMobileCollidersSubContainer);
	})();
	(function addWarriorToStage() {
		warrior = createBasicSprite(
			warriorTextureArray,
			warrior,
			spritesConfig.warriorColliders.warriorCollider1
		);
		animationState = animationStateEnum.IDLING;
		foreground.addChild(warrior);
	})();
	addContainerToStage(foreground);
}

function setMobileSubContainer(subContainer, subColliderList, collider) {
	subContainer.addChild(collider);
	subColliderList.push(collider);
}

function addStageToScreen() {
	document.getElementById('screen').appendChild(app.view);
}

function getInitialEdgeScreen() {
	updatedLeftEdgeScreen = app.screen.x;
	updatedRightEdgeScreen = app.screen.width;
}

function setTicker() {
	app.ticker.maxFPS = GAME_SETTINGS.TICKER_SETTINGS.TICKER_MAX_FPS;
	app.ticker.add(tick);
}

function createBasicSprite(
	spriteTextureArray,
	spriteObjectToInitialize,
	spriteConf
) {
	let texture = spriteConf.imgPath
		? PIXI.Texture.from(spriteConf.imgPath)
		: PIXI.Texture.WHITE;
	if (spriteTextureArray) {
		spriteTextureArray.push(texture);
	}
	spriteObjectToInitialize = new PIXI.Sprite(texture);
	spriteObjectToInitialize.anchor.set(spriteConf.anchor);
	spriteObjectToInitialize.x = spriteConf.x;
	spriteObjectToInitialize.y = spriteConf.y;
	spriteObjectToInitialize.width = spriteConf.width;
	spriteObjectToInitialize.height = spriteConf.height;
	if (spriteConf.tint) spriteObjectToInitialize.tint = spriteConf.tint;
	return spriteObjectToInitialize;
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

function updateMovementCycle() {
	const mobileCollidersCheckList = [
		leftToRightCollidersList,
		rightToLeftCollidersList,
		topToBottomCollidersList,
		bottomToTopCollidersList,
	];
	movementCount++;
	if (
		movementCount %
			GAME_SETTINGS.PHYSICS_SETTINGS.MOBILE_COLLIDERS_INVERSION ===
		0
	) {
		movementSpeed *= -1;
	}
	leftToRightForegroundSubContainer.x += movementSpeed;
	rightToLeftForegroundSubContainer.x -= movementSpeed;
	topToBottomForegroundSubContainer.y += movementSpeed;
	bottomToTopForegroundSubContainer.y -= movementSpeed;
	if (detectSpriteCollision(bottomCollisionBox, mobileCollidersCheckList)) {
		updateWarriorPositionOnMobileCollider(mobileCollidersCheckList);
	}
}

function updateWarriorPositionOnMobileCollider(mobileCollidersCheckList) {
	switch (
		getMobileColliderUnderWarrior(
			bottomCollisionBox,
			mobileCollidersCheckList
		)
	) {
		case 0:
			warrior.x += movementSpeed;
			break;
		case 1:
			warrior.x -= movementSpeed;
			break;
		case 2:
			warrior.y += movementSpeed;
			break;
		case 3:
			warrior.y -= movementSpeed;
			break;
	}
}

function updateMobileColliders() {
	// index = length - 2 car dernier élément ajouté à foreground correspond à warrior
	const mobileCollidersContainersList = Array.from(
		foreground.children[foreground.children.length - 2].children
	);
	leftToRightCollidersList = [];
	rightToLeftCollidersList = [];
	topToBottomCollidersList = [];
	bottomToTopCollidersList = [];
	if (
		mobileCollidersContainersList[0] !== undefined ||
		mobileCollidersContainersList !== null
	) {
		mobileCollidersContainersList[0].children.forEach((e) =>
			leftToRightCollidersList.push(e.getBounds())
		);
	}
	if (
		mobileCollidersContainersList[1] !== undefined ||
		mobileCollidersContainersList !== null
	) {
		mobileCollidersContainersList[1].children.forEach((e) =>
			rightToLeftCollidersList.push(e.getBounds())
		);
	}
	if (
		mobileCollidersContainersList[2] !== undefined ||
		mobileCollidersContainersList !== null
	) {
		mobileCollidersContainersList[2].children.forEach((e) =>
			topToBottomCollidersList.push(e.getBounds())
		);
	}
	if (
		mobileCollidersContainersList[3] !== undefined ||
		mobileCollidersContainersList !== null
	) {
		mobileCollidersContainersList[3].children.forEach((e) =>
			bottomToTopCollidersList.push(e.getBounds())
		);
	}
}

function updateAllCollidersList() {
	collidersCheckList = [
		obstacleCollidersList,
		leftToRightCollidersList,
		rightToLeftCollidersList,
		topToBottomCollidersList,
		bottomToTopCollidersList,
	];
}

// Controls functions :

function setKeyboardControls() {
	window.addEventListener('keydown', (e) => {
		switch (e.key) {
			case 'ArrowDown':
				crouch();
				break;
			case 'ArrowUp':
				stopping = false;
				jump();
				break;
			case 'ArrowLeft':
				warrior.scale.x = -2;
				direction = -1;
				stopping = false;
				move();
				break;
			case 'ArrowRight':
				warrior.scale.x = 2;
				direction = 1;
				stopping = false;
				move();
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
				activateObjectAround();
				break;
			case 'x':
				if (displayingText && !displayingWarningText) {
					nextContent();
				}
				break;
			default:
				return;
		}
		if (e.key !== 'x' && displayingText && !displayingWarningText) {
			displayWarningMsg();
		}
	});

	window.addEventListener('keyup', (e) => {
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
				stopping = true;
		}
	});
}

// Move functions :

function move() {
	if (displayingText) return;
	if (detectSpriteCollision(bottomCollisionBox, collidersCheckList)) {
		playSound(
			walkSound,
			GAME_SETTINGS.VOLUME_SETTINGS.WALKING_SOUND_VOLUME
		);
		animationState = animationStateEnum.RUNNING;
	}
	vx = GAME_SETTINGS.PHYSICS_SETTINGS.PLAYER_MAX_SPEED;
}

function jump() {
	if (!detectSpriteCollision(bottomCollisionBox, collidersCheckList)) {
		return;
	} else {
		playingSound = false;
		playSound(
			warriorJumpSound,
			GAME_SETTINGS.VOLUME_SETTINGS.JUMPING_SOUND_VOLUME
		);
		animationState = animationStateEnum.JUMPING;
		vy = GAME_SETTINGS.PHYSICS_SETTINGS.PLAYER_JUMP_SPEED;
		warrior.y += vy;
		isJumping = true;
	}
}

function smallAttack() {
	playSound(
		attackSound,
		GAME_SETTINGS.VOLUME_SETTINGS.ATTACKING_SOUND_VOLUME
	);
	animationState = animationStateEnum.ATTACKING_ONE;
}

function bigAttack() {
	playSound(
		attackSound,
		GAME_SETTINGS.VOLUME_SETTINGS.ATTACKING_SOUND_VOLUME
	);
	animationState = animationStateEnum.ATTACKING_TWO;
}

function crouch() {
	animationState = animationStateEnum.CROUCHING;
}

function takePotion() {
	animationState = animationStateEnum.TAKING_POTION;
}

function stop() {
	playingSound = false;
	if (
		vx > GAME_SETTINGS.PHYSICS_SETTINGS.PLAYER_MIN_SPEED &&
		detectSpriteCollision(bottomCollisionBox, collidersCheckList)
	) {
		vx--;
	}
	if (vx === GAME_SETTINGS.PHYSICS_SETTINGS.PLAYER_MIN_SPEED) {
		animationState = animationStateEnum.IDLING;
		stopping = false;
	}
	stopSound();
}

function stopAttackingAnim() {
	const timer = setTimeout(() => {
		animationState = animationStateEnum.IDLING;
		clearTimeout(timer);
	}, 500);
}

// Interactive functions:

function activateObjectAround() {
	const objectIndex = getObjectAround(warriorBounds);
	switch (objectIndex) {
		case 0:
			if (!treasureChestOpened1) {
				openTreasureChest(objectIndex);
			} else {
				closeTreasureChest(objectIndex);
			}
			treasureChestOpened1 = !treasureChestOpened1;
			break;
		case 1:
			if (!treasureChestOpened2) {
				openTreasureChest(objectIndex);
			} else {
				closeTreasureChest(objectIndex);
			}
			treasureChestOpened2 = !treasureChestOpened2;
			break;
		case 2:
			if (!treasureChestOpened3) {
				openTreasureChest(objectIndex);
			} else {
				closeTreasureChest(objectIndex);
			}
			treasureChestOpened3 = !treasureChestOpened3;
			break;

		default:
			return;
	}
}

function openTreasureChest(i) {
	displayDynamicMsg();
	playSound(
		openingTreasureChestSound,
		GAME_SETTINGS.VOLUME_SETTINGS.TREASURE_CHEST_SOUND_VOLUME
	);
	loadOpeningTreasureChestTexture(i);
	setTimeout(loadOpenedTreasureChestTexture(i), 400);
}

function closeTreasureChest(i) {
	playSound(
		openingTreasureChestSound,
		GAME_SETTINGS.VOLUME_SETTINGS.TREASURE_CHEST_SOUND_VOLUME
	);
	loadClosingTreasureChestTexture(i);
	setTimeout(loadClosedTreasureChestTexture(i), 400);
}

// Physics functions:

function reloadIfFalling() {
	if (warrior.y > app.screen.height) {
		window.location.reload();
	}
}

function calculateWideBoxes() {
	warriorBounds = warrior.getBounds();
	bottomCollisionBox.x = warriorBounds.x + (1 / 3) * warriorBounds.width;
	bottomCollisionBox.width = (1 / 3) * warriorBounds.width;
	bottomCollisionBox.y = warriorBounds.y + (4 / 5) * warriorBounds.height;
	bottomCollisionBox.height = (1 / 5) * warriorBounds.height + 1;
	topCollisionBox.x = warriorBounds.x + (1 / 3) * warriorBounds.width;
	topCollisionBox.width = (1 / 3) * warriorBounds.width;
	topCollisionBox.y = warriorBounds.y;
	topCollisionBox.height = (1 / 5) * warriorBounds.height + 1;
	leftCollisionBox.x = warriorBounds.x + 10;
	leftCollisionBox.width = warriorBounds.width / 3 - 10;
	leftCollisionBox.y = warriorBounds.y - 1;
	leftCollisionBox.height = (4 / 5) * warriorBounds.height;
	rightCollisionBox.x = warriorBounds.x + (2 * warriorBounds.width) / 3;
	rightCollisionBox.width = warriorBounds.width / 3 - 10;
	rightCollisionBox.y = warriorBounds.y - 1;
	rightCollisionBox.height = (4 / 5) * warriorBounds.height;
}

function updateWarriorCollider() {
	leftEdgeScreenReached = warrior.x <= updatedLeftEdgeScreen;
	rightEdgeScreenReached =
		warrior.x + warrior.width >= updatedRightEdgeScreen;
	isAboutToCollideWithBottom = detectSpriteCollision(
		bottomCollisionBox,
		collidersCheckList
	);
	isAboutToCollideWithTop = detectSpriteCollision(
		topCollisionBox,
		collidersCheckList
	);
	isAboutToCollideWithLeft = detectSpriteCollision(
		leftCollisionBox,
		collidersCheckList
	);
	isAboutToCollideWithRight = detectSpriteCollision(
		rightCollisionBox,
		collidersCheckList
	);
}

function isColliding(playerBox, collider) {
	return (
		playerBox.x + playerBox.width > collider.x &&
		playerBox.x < collider.x + collider.width &&
		playerBox.y + playerBox.height > collider.y &&
		playerBox.y < collider.y + collider.height
	);
}

function detectSpriteCollision(playerBox, collidersCheckList) {
	for (const collidersSubCheckList of collidersCheckList) {
		for (const collider of collidersSubCheckList) {
			if (isColliding(playerBox, collider)) {
				return true;
			}
		}
	}
	return false;
}

function getObjectAround(playerBox) {
	for (let i = 0; i < objectCollidersList.length; i++) {
		if (isColliding(playerBox, objectCollidersList[i])) {
			return i;
		}
	}
	return null;
}

function getMobileColliderUnderWarrior(playerBox, mobileCollidersCheckList) {
	for (let i = 0; i < mobileCollidersCheckList.length; i++) {
		for (const subMobileColliderList of mobileCollidersCheckList[i]) {
			if (isColliding(playerBox, subMobileColliderList)) {
				return i;
			}
		}
	}
}

function updatingVx() {
	if (
		((isAboutToCollideWithRight || rightEdgeScreenReached) &&
			direction === 1) ||
		((isAboutToCollideWithLeft || leftEdgeScreenReached) &&
			direction === -1) ||
		displayingText
	) {
		return;
	}
	if (
		stopping &&
		stopCounter %
			GAME_SETTINGS.PHYSICS_SETTINGS.PLAYER_DECREASING_SPEED_FACTOR ===
			0
	)
		stop();
	warrior.x += vx * direction;
	stopCounter++;
}

function updatingVy() {
	if (isAboutToCollideWithBottom || isAboutToCollideWithTop) {
		vy = isAboutToCollideWithBottom
			? GAME_SETTINGS.PHYSICS_SETTINGS.PLAYER_MIN_SPEED
			: vy <= GAME_SETTINGS.PHYSICS_SETTINGS.PLAYER_MIN_SPEED
			? GAME_SETTINGS.PHYSICS_SETTINGS.PLAYER_RESTITUTION_COEF * vy
			: vy;
		isJumping = isAboutToCollideWithBottom ? false : true;
	}
	if (!isAboutToCollideWithBottom) {
		applyingGravity();
		warrior.y += vy;
	}
}

function applyingGravity() {
	if (vy < GAME_SETTINGS.PHYSICS_SETTINGS.GRAVITY) {
		vy++;
	}
}

//Audio functions:

function setBackgroundVolume() {
	const backgroundAudio = document.getElementById('audio');
	backgroundAudio.volume =
		GAME_SETTINGS.VOLUME_SETTINGS.BACKGROUND_SOUND_VOLUME;
}

function playSound(sound, volume) {
	if (!playingSound) {
		if (sound.currentTime !== 0) {
			sound.currentTime = 0;
		}
		if (sound.currentTime !== 0 && sound.volume !== volume) {
			sound.volume = volume;
		}
		sound.play();
		playingSound = true;
	}
}

function stopSound() {
	attackSound.pause();
	walkSound.pause();
	if (isJumping === false) warriorJumpSound.pause();
}

function setAudioEvents() {
	attackSound.addEventListener('ended', () => (playingSound = false));
	walkSound.addEventListener('ended', () => (playingSound = false));
	warriorJumpSound.addEventListener('ended', () => (playingSound = false));
}

// TextureLoader functions :

function updateAnimationState() {
	if (
		!isJumping &&
		isAboutToCollideWithBottom &&
		animationState === animationStateEnum.JUMPING
	) {
		animationState =
			vx > 0 ? animationStateEnum.RUNNING : animationStateEnum.IDLING;
	}
}

function loadWarriorAnimation() {
	if (!!Array.from(animationStateEnum).includes(animationState)) {
		return;
	}
	warriorTextureArray = [];
	let loaderArray = [];
	switch (animationState) {
		case animationStateEnum.JUMPING:
			loaderArray = loaders.adventurerLoader.adventurerJumpingAnim;
			break;
		case animationStateEnum.RUNNING:
			loaderArray = loaders.adventurerLoader.adventurerRunningAnim;
			break;
		case animationStateEnum.CROUCHING:
			loaderArray = loaders.adventurerLoader.adventurerCrouchingAnim;
			break;
		case animationStateEnum.ATTACKING_ONE:
			loaderArray = loaders.adventurerLoader.adventurerAttacking1Anim;
			break;
		case animationStateEnum.ATTACKING_TWO:
			loaderArray = loaders.adventurerLoader.adventurerAttacking2Anim;
			break;
		case animationState.TAKING_POTION:
			loaderArray = loaders.adventurerLoader.adventurerTakingPotionAnim;
			break;
		case animationState.DYING:
			loaderArray = loaders.adventurerLoader.adventurerDyingAnim;
			break;
		case animationStateEnum.IDLING:
		default:
			loaderArray = loaders.adventurerLoader.adventurerIdlingAnim;
			break;
	}
	loaderArray.forEach((img) =>
		warriorTextureArray.push(new PIXI.Texture.from(img))
	);
}

function animateElements(delta) {
	animateWarrior(delta);
	animateTreasureChest(delta);
}

function animateWarrior(delta) {
	adventurerAnimationCount =
		Math.round(
			adventurerAnimationCount + getAnimationSpeed('player', delta)
		) % warriorTextureArray.length;
	warrior.texture = warriorTextureArray[adventurerAnimationCount];
}

function animateTreasureChest(delta) {
	treasureChestAnimationCount =
		Math.round(
			treasureChestAnimationCount + getAnimationSpeed('object', delta)
		) % treasureChest1TextureArray.length;
	treasureChest1.texture =
		treasureChest1TextureArray[treasureChestAnimationCount];
	treasureChest2.texture =
		treasureChest2TextureArray[treasureChestAnimationCount];
	treasureChest3.texture =
		treasureChest3TextureArray[treasureChestAnimationCount];
}

function getAnimationSpeed(animatedSpriteType, delta) {
	switch (animatedSpriteType) {
		case 'object':
			return (
				delta /
				GAME_SETTINGS.ANIMATION_SPEED_FACTORS
					.OBJECT_ANIMATION_SPEED_FACTOR
			);
		case 'player':
		default:
			return (
				delta /
				GAME_SETTINGS.ANIMATION_SPEED_FACTORS
					.PLAYER_ANIMATION_SPEED_FACTOR
			);
	}
}

function loadOpeningTreasureChestTexture(i) {
	let loaderArray = loaders.treasureChestLoader.treasureChestOpeningAnim;
	switch (i) {
		case 0:
			treasureChest1TextureArray = [];
			loaderArray.forEach((img) =>
				treasureChest1TextureArray.push(new PIXI.Texture.from(img))
			);
			break;
		case 1:
			treasureChest2TextureArray = [];
			loaderArray.forEach((img) =>
				treasureChest2TextureArray.push(new PIXI.Texture.from(img))
			);
			break;
		case 2:
			treasureChest3TextureArray = [];
			loaderArray.forEach((img) =>
				treasureChest3TextureArray.push(new PIXI.Texture.from(img))
			);
			break;
		default:
			return;
	}
}

function loadOpenedTreasureChestTexture(i) {
	let loaderArray = loaders.treasureChestLoader.treasureChestOpenedAnim;
	switch (i) {
		case 0:
			treasureChest1TextureArray = [];
			loaderArray.forEach((img) =>
				treasureChest1TextureArray.push(new PIXI.Texture.from(img))
			);
			break;
		case 1:
			treasureChest2TextureArray = [];
			loaderArray.forEach((img) =>
				treasureChest2TextureArray.push(new PIXI.Texture.from(img))
			);
			break;
		case 2:
			treasureChest3TextureArray = [];
			loaderArray.forEach((img) =>
				treasureChest3TextureArray.push(new PIXI.Texture.from(img))
			);
			break;
		default:
			return;
	}
}

function loadClosingTreasureChestTexture(i) {
	let loaderArray = loaders.treasureChestLoader.treasureChestOpeningAnim;
	loaderArray.reverse();
	switch (i) {
		case 0:
			treasureChest1TextureArray = [];
			loaderArray.forEach((img) =>
				treasureChest1TextureArray.push(new PIXI.Texture.from(img))
			);
			break;
		case 1:
			treasureChest2TextureArray = [];
			loaderArray.forEach((img) =>
				treasureChest2TextureArray.push(new PIXI.Texture.from(img))
			);
			break;
		case 2:
			treasureChest3TextureArray = [];
			loaderArray.forEach((img) =>
				treasureChest3TextureArray.push(new PIXI.Texture.from(img))
			);
			break;
	}
}

function loadClosedTreasureChestTexture(i) {
	const treasureChestClosedLoader =
		loaders.treasureChestLoader.treasureChestClosed;
	switch (i) {
		case 0:
			treasureChest1TextureArray = [];
			treasureChest1TextureArray.push(
				new PIXI.Texture.from(treasureChestClosedLoader)
			);
			break;
		case 1:
			treasureChest2TextureArray = [];
			treasureChest2TextureArray.push(
				new PIXI.Texture.from(treasureChestClosedLoader)
			);
			break;
		case 2:
			treasureChest3TextureArray = [];
			treasureChest3TextureArray.push(
				new PIXI.Texture.from(treasureChestClosedLoader)
			);
			break;
		default:
			return;
	}
}

// Text related functions :

function manageTextContent(xCoordinate) {
	updateTextList(xCoordinate);
	updateTextDisplayZoneValue();
	displayTextInTextList();
}

function isWarriorInTextAera(xCoordinate, index) {
	const isWarriorInTextAreaBoolean =
		xCoordinate >
			textConfig.staticText[index].overlayConfig.activationArea.x1 &&
		xCoordinate <
			textConfig.staticText[index].overlayConfig.activationArea.x2;
	return isWarriorInTextAreaBoolean;
}

function updateTextList(xCoordinate) {
	Object.entries(textConfig.staticText).forEach((e) => {
		if (
			textListToShow.includes(
				e[1] && isWarriorInTextAera(xCoordinate, e[0])
			)
		)
			return;
		else if (
			isWarriorInTextAera(xCoordinate, e[0]) &&
			!textListToShow.includes(e[1])
		)
			textListToShow.push(e[1]);
		else if (
			!isWarriorInTextAera(xCoordinate, e[0]) &&
			textListToShow.includes(e[1])
		)
			textListToShow.splice(e[0], 1);
		if (textListToShow.length === 0) indexOfTextList = 0;
	});
}

function hasBeenDisplayedInTextZone() {
	if (
		(hasBeenDisplayedZone1 &&
			textDisplayZone === textDisplayZoneEnum.ZONE_ONE) ||
		(hasBeenDisplayedZone2 &&
			textDisplayZone === textDisplayZoneEnum.ZONE_TWO) ||
		(hasBeenDisplayedZone3 &&
			textDisplayZone === textDisplayZoneEnum.ZONE_THREE)
	)
		return true;
	else return false;
}

function displayTextInTextList() {
	if (
		indexOfTextList !== textListToShow.length - 1 &&
		textListToShow.length !== 0 &&
		!displayingText &&
		!hasBeenDisplayedInTextZone() &&
		!isJumping
	) {
		buildTextBox(textListToShow[indexOfTextList]);
		displayingText = true;
	}
}

function nextContent() {
	playSound(
		openingTreasureChestSound,
		GAME_SETTINGS.VOLUME_SETTINGS.TREASURE_CHEST_SOUND_VOLUME
	);
	if (indexOfTextList < textListToShow.length - 1) {
		removeTextElement(text);
		indexOfTextList++;
		buildTextBox(textListToShow[indexOfTextList]);
	} else {
		removeTextElement(textBox);
		displayingText = false;
		switch (textDisplayZone) {
			case textDisplayZoneEnum.ZONE_ONE:
				hasBeenDisplayedZone1 = true;
				break;
			case textDisplayZoneEnum.ZONE_TWO:
				hasBeenDisplayedZone2 = true;
				break;
			case textDisplayZoneEnum.ZONE_THREE:
				hasBeenDisplayedZone3 = true;
				break;
			case textDisplayZoneEnum.NO_ZONE:
			default:
				return;
		}
	}
}

function updateTextDisplayZoneValue() {
	if (
		warrior.x > GAME_SETTINGS.TEXT_ZONES.TEXT_ZONE_1.MIN_X &&
		warrior.x < GAME_SETTINGS.TEXT_ZONES.TEXT_ZONE_1.MAX_X
	)
		textDisplayZone = textDisplayZoneEnum.ZONE_ONE;
	else if (
		warrior.x > GAME_SETTINGS.TEXT_ZONES.TEXT_ZONE_2.MIN_X &&
		warrior.x < GAME_SETTINGS.TEXT_ZONES.TEXT_ZONE_2.MAX_X
	)
		textDisplayZone = textDisplayZoneEnum.ZONE_TWO;
	else if (
		warrior.x > GAME_SETTINGS.TEXT_ZONES.TEXT_ZONE_3.MIN_X &&
		warrior.x < GAME_SETTINGS.TEXT_ZONES.TEXT_ZONE_3.MAX_X
	)
		textDisplayZone = textDisplayZoneEnum.ZONE_THREE;
	else textDisplayZone = textDisplayZoneEnum.NO_ZONE;
}

function buildTextBox(textConfig) {
	if (textConfig) {
		textBox = new PIXI.Container();
		textBackGroundTexture = buildTextBackgroundTexture(
			textBackGroundTexture,
			textConfig
		);
		text = buildText(text, textConfig);
		textBox.addChild(textBackGroundTexture, text);
		app.stage.addChild(textBox);
	}
}

function buildWarningTextBox(textConfig) {
	if (textConfig) {
		warningTextBox = new PIXI.Container();
		warningTextBackGroundTexture = buildTextBackgroundTexture(
			warningTextBackGroundTexture,
			textConfig
		);
		warningText = buildText(warningText, textConfig);
		if (textConfig.overlayConfig.nextButtonImg) {
			buildWarningNextTextButtonImg(textConfig);
		}
		warningNextTextButtonImg._destroyed
			? warningTextBox.addChild(warningTextBackGroundTexture, warningText)
			: warningTextBox.addChild(
					warningTextBackGroundTexture,
					warningText,
					warningNextTextButtonImg
			  );
		app.stage.addChild(warningTextBox);
	}
}

function buildTextBackgroundTexture(backgroundTexture, textConfig) {
	if (backgroundTexture._destroyed !== true) {
		backgroundTexture.destroy({
			children: true,
			texture: true,
			baseTexture: true,
		});
	}
	return (backgroundTexture = createBasicSprite(
		null,
		backgroundTexture,
		textConfig.overlayConfig.textBox
	));
}

function buildText(textObject, textConfig) {
	textObject = new PIXI.Text(
		textConfig.pixiRequirements.text,
		textConfig.pixiRequirements.style
	);
	textObject.x = textConfig.overlayConfig.text.x;
	textObject.y = textConfig.overlayConfig.text.y;
	textObject.anchor.set(textConfig.overlayConfig.text.anchor);
	return textObject;
}

function buildWarningNextTextButtonImg(textConfig) {
	if (warningNextTextButtonImg._destroyed !== true) {
		warningNextTextButtonImg.destroy({
			children: false,
			texture: true,
			baseTexture: true,
		});
	}
	warningNextTextButtonImg = createBasicSprite(
		null,
		warningNextTextButtonImg,
		textConfig.overlayConfig.nextButtonImg
	);
}

function displayDynamicMsg() {
	buildTextBox(textConfig.dynamicText.dynamicText1);
	const timer = setTimeout(() => {
		removeTextElement(textBox);
		clearTimeout(timer);
	}, 5000);
}

function displayWarningMsg() {
	displayingWarningText = true;
	buildWarningTextBox(textConfig.dynamicText.dynamicText2);
	const timer = setTimeout(() => {
		removeTextElement(warningTextBox);
		displayingWarningText = false;
		clearTimeout(timer);
	}, 2500);
}

function removeTextElement(textElement) {
	if (textElement._destroyed !== true) {
		textElement.destroy({
			children: false,
			texture: true,
			baseTexture: true,
		});
	}
}

// Camera functions :

function updateCameraCheckers() {
	isWarriorLeftCentered =
		warrior.x <=
		updatedLeftEdgeScreen +
			GAME_SETTINGS.CAMERA_SETTINGS.LEFT_ACTIVATION_AREA_WIDTH;
	isWarriorRightCentered =
		warrior.x >=
		updatedRightEdgeScreen -
			GAME_SETTINGS.CAMERA_SETTINGS.RIGHT_ACTIVATION_AREA_WIDTH;
	leftEdgeStageReached = foreground.x >= app.stage.x;
	rightEdgeStageReached = foreground.x === -app.stage.width;
}

function moveCamera() {
	if (
		(leftEdgeStageReached && direction === -1) ||
		(rightEdgeStageReached && direction === 1)
	) {
		return;
	}
	if (
		(isWarriorRightCentered && direction === 1) ||
		(isWarriorLeftCentered && direction === -1)
	) {
		moveGroundContainer(
			background,
			GAME_SETTINGS.CAMERA_SETTINGS.BACKGROUND_SPEED_FACTOR
		);
		moveGroundContainer(
			middleground,
			GAME_SETTINGS.CAMERA_SETTINGS.MIDDLEGROUND_SPEED_FACTOR
		);
		moveGroundContainer(foreground, null);
		updateEdgeScreenValue();
		updateForegroundCollidersPosition();
	}
}

function moveGroundContainer(groundContainer, speedFactor) {
	groundContainer.x -= vx * direction * (speedFactor ? speedFactor : 1);
}

function updateEdgeScreenValue() {
	updatedLeftEdgeScreen += vx * direction;
	updatedRightEdgeScreen += vx * direction;
}

function updateForegroundCollidersPosition() {
	const decorsColliderListLength = decorsCollidersList.length;
	const obstacleColliderListLength = obstacleCollidersList.length;
	const objectCollidersListLength = objectCollidersList.length;
	decorsCollidersList = [];
	obstacleCollidersList = [];
	objectCollidersList = [];
	leftToRightCollidersList = [];
	rightToLeftCollidersList = [];
	for (let i = 0; i < decorsColliderListLength; i++) {
		decorsCollidersList.push(foreground.children[i].getBounds());
	}
	for (
		let i = decorsColliderListLength;
		i < decorsColliderListLength + obstacleColliderListLength;
		i++
	) {
		obstacleCollidersList.push(foreground.children[i].getBounds());
	}
	for (
		let i = decorsColliderListLength + obstacleColliderListLength;
		i <
		decorsColliderListLength +
			obstacleColliderListLength +
			objectCollidersListLength;
		i++
	) {
		objectCollidersList.push(foreground.children[i].getBounds());
	}
	updateMobileColliders();
}
