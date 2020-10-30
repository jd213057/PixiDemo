/**
 * @type {string}
 */
const pathToImgFolder = '/static/assets/images/';
/**
 * @type {Object}
 */
const wallColliders = {
	wallCollider1: {
		imgPath: pathToImgFolder + 'Levels/simple_wall.png',
		anchor: 0.0,
		x: 0,
		y: 200,
		width: 20,
		height: 113,
	},
	wallCollider2: {
		imgPath: pathToImgFolder + 'Levels/simple_wall.png',
		anchor: 0.0,
		x: 350,
		y: 200,
		width: 20,
		height: 113,
	},
	wallCollider3: {
		imgPath: pathToImgFolder + 'Levels/simple_wall.png',
		anchor: 0.0,
		x: 680,
		y: 200,
		width: 20,
		height: 113,
	},
};
/**
 * @type {Object}
 */
const floorColliders = {
	floorCollider1: {
		imgPath: pathToImgFolder + 'Levels/simple_ground.png',
		anchor: 0.0,
		x: 0,
		y: 288,
		width: 350,
		height: 25,
	},
	floorCollider2: {
		imgPath: pathToImgFolder + 'Levels/simple_ground.png',
		anchor: 0.0,
		x: 350,
		y: 175,
		width: 350,
		height: 25,
	},
	floorCollider3: {
		imgPath: pathToImgFolder + 'Levels/simple_ground.png',
		anchor: 0.0,
		x: 250,
		y: 458,
		width: 625,
		height: 25,
	},
	floorCollider4: {
		imgPath: pathToImgFolder + 'Levels/simple_ground.png',
		anchor: 0.0,
		x: 500,
		y: 288,
		width: 200,
		height: 25,
	},
};

export default {wallColliders, floorColliders};
