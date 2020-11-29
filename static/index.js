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
 * @description Indicates whether treasure chest is opened or not
 */
let treasureChestOpened = false;
/**
 * @type {boolean}
 * @description Indicates whether player is Left centered on the screen
 */
let isWarriorLeftCentered = false;
/**
 * @type {boolean}
 * @description Indicates whether player is right centered on the screen
 */
let isWarriorRightCentered = false;
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
 * @description ArrayList of wall colliders
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
 * @description ArrayList of mobile colliders
 */
let mobileCollidersList = [];
/**
 * @type {PIXI.Sprite}
 * @description Treasure Chest sprite
 */
let treasureChest;
/**
 * @type {Array}
 * @description ArrayList of Treasure Chest's textures used for cureent animation
 */
let treasureChestTextureArray = [];
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
 * @type {number}
 * @description Camera's speed for x abscissa
 */
let vc = 5;
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
let mobileForegroundSubContainer = new PIXI.Container();
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
let movementSpeed = -5;
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
 * @description Path to images repository
 */
const pathToAnimation = '/static/assets/images/';

initializeGame();

app.ticker.add((delta) => {
	reloadIfFalling();
	warriorBounds = warrior.getBounds();
	calculateWideBoxes();
	updateCameraCheckers();
	updateWarriorCollider();
	if (
		(!isAboutToCollideWithLeft && direction !== -1) ||
		(!isAboutToCollideWithRight && direction !== 1)
	) {
		updatingVx();
	}
	if (isAboutToCollideWithBottom) {
		vy = 0;
		isJumping = false;
	}
	if (isAboutToCollideWithTop) {
		vy *= -1;
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
}

// Build Stage functions

function addStageToScreen() {
	document.getElementById('screen').appendChild(app.view);
}

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
	app.stage.addChild(warrior);
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
		mobileForegroundSubContainer.addChild(collider);
		mobileCollidersList.push(collider);
	}
	foreground.addChild(mobileForegroundSubContainer);
	setUpMovementCycle();
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

function setUpMovementCycle() {
	setInterval(() => {
		if (movementCount % 50 === 0) {
			movementSpeed *= -1;
		}
		movementCount++;
		mobileForegroundSubContainer.x += movementSpeed;
	}, 100);
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
					if (!detectFloorCollision(leftCollisionBox)) {
						move();
					}
					break;
				case 'ArrowRight':
					warrior.scale.x = 2;
					direction = 1;
					clearInterval(vxTimer);
					if (!detectFloorCollision(rightCollisionBox)) {
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
					detectObjectCollision(warriorBounds)
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
	vx = 5;
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
			vc--;
		}
		if (vx === 0) {
			vc = 0;
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

function reloadIfFalling() {
	if (warrior.y > app.screen.height) {
		window.location.reload();
	}
}

function calculateWideBoxes() {
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
	isAboutToCollideWithBottom = detectFloorCollision(bottomCollisionBox);
	isAboutToCollideWithTop = detectFloorCollision(topCollisionBox);
	isAboutToCollideWithLeft = detectFloorCollision(leftCollisionBox);
	isAboutToCollideWithRight = detectFloorCollision(rightCollisionBox);
}

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
	for (const collider of mobileCollidersList) {
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

function updatingVx() {
	vc = animationState === animationStateEnum.IDLING ? 0 : 5;
	if (
		(isWarriorRightCentered && direction === 1) ||
		(isWarriorLeftCentered &&
			direction === -1 &&
			!leftEdgeStageReached &&
			!rightEdgeStageReached)
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

function updateCameraCheckers() {
	isWarriorLeftCentered = warrior.x <= app.screen.x + 250;
	isWarriorRightCentered = warrior.x >= app.screen.width - 250;
	leftEdgeStageReached = foreground.x >= app.stage.x;
	rightEdgeStageReached = foreground.x === -app.stage.width;
}

function moveCamera() {
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
	background.x -= vc * direction * 0.5;
}

function moveForeground() {
	foreground.x -= vc * direction;
}

function updateForegroundCollidersPosition() {
	const decorsColliderListLength = decorsCollidersList.length;
	const floorColliderListLength = floorCollidersList.length;
	const wallCollidersListLength = wallCollidersList.length;
	const objectCollidersListLength = objectCollidersList.length;
	const mobileCollidersListLength = mobileCollidersList.length;
	decorsCollidersList = [];
	floorCollidersList = [];
	wallCollidersList = [];
	objectCollidersList = [];
	mobileCollidersList = [];
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
	for (const subElementContainer of foreground.children[
		foreground.children.length - 1
	].children) {
		mobileCollidersList.push(subElementContainer.getBounds());
	}
}
