/**
 * @type {Object}
 * @description Settings related to app rendering
 */
const APP_SCREEN_SETTINGS = {
	/**
	 * @type {Number}
	 * @description App screen width
	 */
	APP_SCREEN_WIDTH: 900,
	/**
	 * @type {Number}
	 * @description App screen height
	 */
	APP_SCREEN_HEIGHT: 550,
	/**
	 * @type {Number}
	 * @description App screen x position
	 */
	APP_SCREEN_X: 0,
	/**
	 * @type {Number}
	 * @description App screen y position
	 */
	APP_SCREEN_Y: 0,
	/**
	 * @type {Boolean}
	 * @description App screen transparency
	 */
	TRANSPARENT: true,
	/**
	 * @type {Boolean}
	 * @description App screen antialiasing
	 */
	ANTIALIASING: true,
};
/**
 * @type {Object}
 * @description Settings related to ticker of application
 */
const TICKER_SETTINGS = {
	/**
	 * @type {Number}
	 * @description Delta time in ms targeted between two frames rendered
	 */
	DELTA_TIME_TARGETED: 1,
	/**
	 * @type {Number}
	 * @description App ticker maxFPS value
	 */
	TICKER_MAX_FPS: 1000,
};
/**
 * @type {Object}
 * @description Settings related to camera movement
 */
const CAMERA_SETTINGS = {
	/**
	 * @type {Number}
	 * @description App left screen width area where camera movement is activated
	 */
	LEFT_ACTIVATION_AREA_WIDTH: 350,
	/**
	 * @type {Number}
	 * @description App right screen width area where camera movement is activated
	 */
	RIGHT_ACTIVATION_AREA_WIDTH: 350,
	/**
	 * @type {Number}
	 * @description Speed coefficient for background sprite container when camera is moving
	 */
	BACKGROUND_SPEED_FACTOR: 0.5,
	/**
	 * @type {Number}
	 * @description Speed coefficient for middleground sprite container when camera is moving
	 */
	MIDDLEGROUND_SPEED_FACTOR: 0.75,
};
/**
 * @type {Object}
 * @description Settings related to sound volume for the application
 */
const VOLUME_SETTINGS = {
	/**
	 * @type {Number}
	 * @description Volume for background sound
	 */
	BACKGROUND_SOUND_VOLUME: 0.4,
	/**
	 * @type {Number}
	 * @description Volume for walking sound
	 */
	WALKING_SOUND_VOLUME: 1,
	/**
	 * @type {Number}
	 * @description Volume for jumping sound
	 */
	JUMPING_SOUND_VOLUME: 0.5,
	/**
	 * @type {Number}
	 * @description Volume for attacking sound
	 */
	ATTACKING_SOUND_VOLUME: 0.5,
	/**
	 * @type {Number}
	 * @description Volume for treasureChest opening/closing sound
	 */
	TREASURE_CHEST_SOUND_VOLUME: 0.7,
};
/**
 * @type {Object}
 * @description Settings related to animated sprite rendering
 */
const ANIMATION_SPEED_FACTORS = {
	/**
	 * @type {Number}
	 * @description Speed corrective factor applied for object animation
	 */
	OBJECT_ANIMATION_SPEED_FACTOR: 6,
	/**
	 * @type {Number}
	 * @description Speed corrective factor applied for player animation
	 */
	PLAYER_ANIMATION_SPEED_FACTOR: 4,
};
/**
 * @type {Object}
 * @description Settings related to physics used in game
 */
const PHYSICS_SETTINGS = {
	/**
	 * @type {Number}
	 * @description Player minimum speed
	 */
	PLAYER_MIN_SPEED: 0,
	/**
	 * @type {Number}
	 * @description Player maximum speed when on ground
	 */
	PLAYER_MAX_GROUNDSPEED: 6,
	/**
	 * @type {Number}
	 * @description Player maximum speed when jumping
	 */
	PLAYER_MAX_AIRSPEED: 5,
	/**
	 * @type {Number}
	 * @description Player jump speed
	 */
	PLAYER_JUMP_SPEED: -18,
	/**
	 * @type {Number}
	 * @description Gravity max force applied to player when falling
	 */
	GRAVITY: 15,
	/**
	 * @type {Number}
	 * @description Restitution coef applied when player hits a box from below
	 */
	PLAYER_RESTITUTION_COEF: -0.5,
	/**
	 * @type {Number}
	 * @description Indicates when to fire stop function from app's ticker perspective
	 */
	PLAYER_DECREASING_SPEED_FACTOR: 3,
	/**
	 * @type {Number}
	 * @description Mobile colliders speed
	 */
	MOBILE_COLLIDERS_SPEED: -2.5,
	/**
	 * @type {Number}
	 * @description Delay of speed inversion for mobile colliders
	 */
	MOBILE_COLLIDERS_INVERSION: 100,
};
/**
 * @type {Object}
 * @description Settings related to text area of game level
 */
const TEXT_ZONES = {
	/**
	 * @type {Object}
	 * @description Activation Area 1
	 */
	TEXT_ZONE_1: {
		/**
		 * @type {Number}
		 * @description Min X value of activation area 1
		 */
		MIN_X: 0,
		/**
		 * @type {Number}
		 * @description Max X value of activation area 1
		 */
		MAX_X: 300,
	},
	/**
	 * @type {Object}
	 * @description Activation Area 2
	 */
	TEXT_ZONE_2: {
		/**
		 * @type {Number}
		 * @description Min X value of activation area 2
		 */
		MIN_X: 990,
		/**
		 * @type {Number}
		 * @description Max X value of activation area 2
		 */
		MAX_X: 1150,
	},
	/**
	 * @type {Object}
	 * @description Activation Area 3
	 */
	TEXT_ZONE_3: {
		/**
		 * @type {Number}
		 * @description Min X value of activation area 3
		 */
		MIN_X: 10000,
		/**
		 * @type {Number}
		 * @description Max X value of activation area 3
		 */
		MAX_X: 10000,
	},
};
export default {
	APP_SCREEN_SETTINGS,
	TICKER_SETTINGS,
	CAMERA_SETTINGS,
	VOLUME_SETTINGS,
	ANIMATION_SPEED_FACTORS,
	PHYSICS_SETTINGS,
	TEXT_ZONES,
};
