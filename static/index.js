import loaders from './loaders.js';
import colliders from './colliders.js';
import textConfig from './text.js';
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
 * @description Determines whether player goes forward or backward
 */
let direction = 1;
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
 * @type {Array}
 * @description ArrayList of all colliders
 */
let collidersCheckList = [];
/**
 * @type {Array}
 * @description ArrayList of all colliders
 */
let wallCollidersList = [];
/**
 * @type {Array}
 * @description ArrayList of floor colliders
 */
let floorCollidersList = [];
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
let vx = 0;
/**
 * @type {number}
 * @description Player's speed for y abscissa
 */
let vy = 0;
/**
 * @type {PIXI.Container}
 * @description Container for text display
 */
let textBox = new PIXI.Container();
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
 * @type {NodeJS.Timeout}
 * @description Timer for vx decreasing when player stops
 */
let vxTimer;
/**
 * @type {number}
 * @description Counter for mobile platforms
 */
let movementCount = 0;
/**
 * @type {number}
 * @description Speed for mobile platforms
 */
let movementSpeed = -2.5;
/**
 * @type {boolean}
 * @description Indicates whether sound is playing or not
 */
let playingSound = false;
/**
 * @type {Object}
 * @description Enumeration of all possible player's animation state
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
	height: 550,
	width: 900,
	transparent: true,
	x: 0,
	y: 0,
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

initializeGame();

app.ticker.add((delta) => {
	reloadIfFalling();
	calculateWideBoxes();
	updateCameraCheckers();
	updateMovementCycle();
	updateMobileColliders();
	updateAllCollidersList();
	updateWarriorCollider();
	updatingVx();
	if (isAboutToCollideWithBottom || isAboutToCollideWithTop) {
		vy = isAboutToCollideWithBottom ? 0 : -0.5 * vy;
		isJumping = isAboutToCollideWithBottom ? false : true;
	}
	if (!isAboutToCollideWithBottom) {
		updatingVy();
	}
	moveCamera();
	updateAnimationState();
	loadWarriorAnimation();
	animateElements(delta);
});

// Initialization functions
function initializeGame() {
	setControls();
	setKeyboardControls();
	setBackgroundVolume();
	setAudioEvents();
	addStageToScreen();
	buildStage();
	getInitialEdgeScreen();
}

// Build Stage functions

function buildStage() {
	setBackgroungImg();
	setBackground();
	setDecors();
	setStaticColliders();
	setObjects();
	setMobileColliders();
	setForeground();
	displayInitialMsg();
	addWarriorToStage();
}

function setBackgroungImg() {
	let backgroundImage = PIXI.Texture.from(
		pathToAnimation + 'Levels/firstmaplevel_background.png'
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

function setDecors() {
	let decorsCollidersObject = colliders.decorsColliders;
	let collider;
	for (const decorsConf in decorsCollidersObject) {
		collider = createBasicCollider(decorsCollidersObject[decorsConf]);
		foreground.addChild(collider);
		decorsCollidersList.push(collider.getBounds());
	}
}

function setObjects() {
	let treasureChestTexture = PIXI.Texture.from(
		colliders.objectColliders.treasureChest1.imgPath
	);
	//Treasure chest 1
	treasureChest1TextureArray.push(treasureChestTexture);
	treasureChest1 = new PIXI.Sprite(treasureChestTexture);
	treasureChest1.anchor.set(colliders.objectColliders.treasureChest1.anchor);
	treasureChest1.x = colliders.objectColliders.treasureChest1.x;
	treasureChest1.y = colliders.objectColliders.treasureChest1.y;
	treasureChest1.width = colliders.objectColliders.treasureChest1.width;
	treasureChest1.height = colliders.objectColliders.treasureChest1.height;
	foreground.addChild(treasureChest1);
	objectCollidersList.push(treasureChest1);
	//Treasure chest 2
	treasureChest2TextureArray.push(treasureChestTexture);
	treasureChest2 = new PIXI.Sprite(treasureChestTexture);
	treasureChest2.anchor.set(colliders.objectColliders.treasureChest2.anchor);
	treasureChest2.x = colliders.objectColliders.treasureChest2.x;
	treasureChest2.y = colliders.objectColliders.treasureChest2.y;
	treasureChest2.width = colliders.objectColliders.treasureChest2.width;
	treasureChest2.height = colliders.objectColliders.treasureChest2.height;
	foreground.addChild(treasureChest2);
	objectCollidersList.push(treasureChest2);
	//Treasure chest 3
	treasureChest3TextureArray.push(treasureChestTexture);
	treasureChest3 = new PIXI.Sprite(treasureChestTexture);
	treasureChest3.anchor.set(colliders.objectColliders.treasureChest3.anchor);
	treasureChest3.x = colliders.objectColliders.treasureChest3.x;
	treasureChest3.y = colliders.objectColliders.treasureChest3.y;
	treasureChest3.width = colliders.objectColliders.treasureChest3.width;
	treasureChest3.height = colliders.objectColliders.treasureChest3.height;
	foreground.addChild(treasureChest3);
	objectCollidersList.push(treasureChest3);
}

function addWarriorToStage() {
	let texture = PIXI.Texture.from(
		pathToAnimation + 'Adventurer/Idle/adventurer-idle-00.png'
	);
	warriorTextureArray.push(texture);
	warrior = new PIXI.AnimatedSprite(warriorTextureArray);
	loadIdleTexture();
	warrior.anchor.set(0.5);
	warrior.scale.x = 2;
	warrior.scale.y = 2;
	warrior.x = app.screen.width / 2 - 200;
	warrior.y = app.screen.height / 2 - 150;
	foreground.addChild(warrior);
}

function addStageToScreen() {
	document.getElementById('screen').appendChild(app.view);
}

function getInitialEdgeScreen() {
	updatedLeftEdgeScreen = app.screen.x;
	updatedRightEdgeScreen = app.screen.width;
}

function setStaticColliders() {
	let floorCollidersObject = colliders.floorColliders;
	let wallCollidersObject = colliders.wallColliders;
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

function setMobileColliders() {
	let collider;
	let mobileCollidersObject = colliders.mobileColliders;
	for (const mobileCollider in mobileCollidersObject) {
		collider = createBasicCollider(mobileCollidersObject[mobileCollider]);
		switch (mobileCollidersObject[mobileCollider].movement) {
			case '+1X':
				setLeftToRightMobileSubContainer(collider);
				break;
			case '-1X':
				setRightToLeftMobileSubContainer(collider);
				break;
			case '+1Y':
				setTopToBottomMobileContainer(collider);
				break;
			case '-1Y':
				setBottomToTopMobileSubContainer(collider);
				break;
		}
	}
	foregroundMobileCollidersSubContainer.addChild(
		leftToRightForegroundSubContainer,
		rightToLeftForegroundSubContainer,
		topToBottomForegroundSubContainer,
		bottomToTopForegroundSubContainer
	);
	foreground.addChild(foregroundMobileCollidersSubContainer);
}

function setLeftToRightMobileSubContainer(collider) {
	leftToRightForegroundSubContainer.addChild(collider);
	leftToRightCollidersList.push(collider);
}

function setRightToLeftMobileSubContainer(collider) {
	rightToLeftForegroundSubContainer.addChild(collider);
	rightToLeftCollidersList.push(collider);
}

function setTopToBottomMobileContainer(collider) {
	topToBottomForegroundSubContainer.addChild(collider);
	topToBottomCollidersList.push(collider);
}

function setBottomToTopMobileSubContainer(collider) {
	bottomToTopForegroundSubContainer.addChild(collider);
	bottomToTopCollidersList.push(collider);
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
	if (movementCount % 100 === 0) {
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
	const idMobileCollidersSubList = getMobileColliderUnderWarrior(
		bottomCollisionBox,
		mobileCollidersCheckList
	);
	switch (idMobileCollidersSubList) {
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
		for (const mobileCollider of mobileCollidersContainersList[0]
			.children) {
			leftToRightCollidersList.push(mobileCollider.getBounds());
		}
	}
	if (
		mobileCollidersContainersList[1] !== undefined ||
		mobileCollidersContainersList !== null
	) {
		for (const mobileCollider of mobileCollidersContainersList[1]
			.children) {
			rightToLeftCollidersList.push(mobileCollider.getBounds());
		}
	}
	if (
		mobileCollidersContainersList[2] !== undefined ||
		mobileCollidersContainersList !== null
	) {
		for (const mobileCollider of mobileCollidersContainersList[2]
			.children) {
			topToBottomCollidersList.push(mobileCollider.getBounds());
		}
	}
	if (
		mobileCollidersContainersList[3] !== undefined ||
		mobileCollidersContainersList !== null
	) {
		for (const mobileCollider of mobileCollidersContainersList[3]
			.children) {
			bottomToTopCollidersList.push(mobileCollider.getBounds());
		}
	}
}

function updateAllCollidersList() {
	collidersCheckList = [
		floorCollidersList,
		leftToRightCollidersList,
		rightToLeftCollidersList,
		topToBottomCollidersList,
		bottomToTopCollidersList,
	];
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
					clearInterval(vxTimer);
					jump();
					break;
				case 'ArrowLeft':
					warrior.scale.x = -2;
					direction = -1;
					clearInterval(vxTimer);
					move();
					break;
				case 'ArrowRight':
					warrior.scale.x = 2;
					direction = 1;
					clearInterval(vxTimer);
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
				default:
					return;
			}
			e.preventDefault();
		},
		true
	);

	window.addEventListener('keyup', (e) => {
		/* 		if (e.defaultPrevented) {
			return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
		} */
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

function move() {
	if (detectSpriteCollision(bottomCollisionBox, collidersCheckList)) {
		playSound(walkSound);
		animationState = animationStateEnum.RUNNING;
	}
	vx = 5;
}

function jump() {
	if (!detectSpriteCollision(bottomCollisionBox, collidersCheckList)) {
		return;
	} else {
		playingSound = false;
		playSound(warriorJumpSound);
		animationState = animationStateEnum.JUMPING;
		vy = -18;
		warrior.y += vy;
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
		if (
			vx > 0 &&
			detectSpriteCollision(bottomCollisionBox, collidersCheckList)
		) {
			vx--;
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
	if (openingTreasureChestSound.currentTime !== 0) {
		openingTreasureChestSound.currentTime = 0;
	}
	openingTreasureChestSound.play();
	loadOpeningTreasureChestTexture(i);
	setTimeout(loadOpenedTreasureChestTexture(i), 400);
}

function closeTreasureChest(i) {
	if (openingTreasureChestSound.currentTime !== 0) {
		openingTreasureChestSound.currentTime = 0;
	}
	openingTreasureChestSound.play();
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
			direction === -1)
	) {
		return;
	}
	warrior.x += vx * direction;
}

function updatingVy() {
	applyingGravity();
	warrior.y += vy;
}

function applyingGravity() {
	if (vy < 10) {
		vy++;
	}
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
			return delta / 6;
		case 'player':
			return delta / 5;
		default:
			return 0;
	}
}

function loadSmallAttackTexture() {
	warriorTextureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerAttacking1Anim;
	loaderArray.forEach((img) =>
		warriorTextureArray.push(new PIXI.Texture.from(img))
	);
}

function loadBigAttackTexture() {
	warriorTextureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerAttacking2Anim;
	loaderArray.forEach((img) =>
		warriorTextureArray.push(new PIXI.Texture.from(img))
	);
}

function loadIdleTexture() {
	warriorTextureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerIdlingAnim;
	loaderArray.forEach((img) =>
		warriorTextureArray.push(new PIXI.Texture.from(img))
	);
}

function loadJumpTexture() {
	warriorTextureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerJumpingAnim;
	loaderArray.forEach((img) =>
		warriorTextureArray.push(new PIXI.Texture.from(img))
	);
}

function loadRunTexture() {
	warriorTextureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerRunningAnim;
	loaderArray.forEach((img) =>
		warriorTextureArray.push(new PIXI.Texture.from(img))
	);
}

function loadDieTexture() {
	warriorTextureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerDyingAnim;
	loaderArray.forEach((img) =>
		warriorTextureArray.push(new PIXI.Texture.from(img))
	);
}

function loadCrouchTexture() {
	warriorTextureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerCrouchingAnim;
	loaderArray.forEach((img) =>
		warriorTextureArray.push(new PIXI.Texture.from(img))
	);
}

function loadTakePotionTexture() {
	warriorTextureArray = [];
	let loaderArray = loaders.adventurerLoader.adventurerTakingPotionAnim;
	loaderArray.forEach((img) =>
		warriorTextureArray.push(new PIXI.Texture.from(img))
	);
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

function updateCameraCheckers() {
	isWarriorLeftCentered = warrior.x <= updatedLeftEdgeScreen + 250;
	isWarriorRightCentered = warrior.x >= updatedRightEdgeScreen - 250;
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
		moveBackground();
		moveForeground();
		updateEdgeScreenValue();
		updateForegroundCollidersPosition();
	}
}

function moveBackground() {
	background.x -= vx * direction * 0.5;
}

function moveForeground() {
	foreground.x -= vx * direction;
}

function updateEdgeScreenValue() {
	updatedLeftEdgeScreen += vx * direction;
	updatedRightEdgeScreen += vx * direction;
}

function updateForegroundCollidersPosition() {
	const decorsColliderListLength = decorsCollidersList.length;
	const floorColliderListLength = floorCollidersList.length;
	const wallCollidersListLength = wallCollidersList.length;
	const objectCollidersListLength = objectCollidersList.length;
	decorsCollidersList = [];
	floorCollidersList = [];
	wallCollidersList = [];
	objectCollidersList = [];
	leftToRightCollidersList = [];
	rightToLeftCollidersList = [];
	for (let i = 0; i < decorsColliderListLength; i++) {
		decorsCollidersList.push(foreground.children[i].getBounds());
	}
	for (
		let i = decorsColliderListLength;
		i < decorsColliderListLength + floorColliderListLength;
		i++
	) {
		floorCollidersList.push(foreground.children[i].getBounds());
	}
	for (
		let i = decorsColliderListLength + floorColliderListLength;
		i <
		decorsColliderListLength +
			floorColliderListLength +
			wallCollidersListLength;
		i++
	) {
		wallCollidersList.push(foreground.children[i].getBounds());
	}
	for (
		let i =
			decorsColliderListLength +
			floorColliderListLength +
			wallCollidersListLength;
		i <
		decorsColliderListLength +
			floorColliderListLength +
			wallCollidersListLength +
			objectCollidersListLength;
		i++
	) {
		objectCollidersList.push(foreground.children[i].getBounds());
	}
	updateMobileColliders();
}
