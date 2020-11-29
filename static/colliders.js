/**
 * @type {string}
 */
const pathToImgFolder = '/static/assets/images/';
/**
 * @type {Object}
 * @description List of wall colliders
 */
const wallColliders = {};
/**
 * @type {Object}
 * @description List of floor colliders
 */
const floorColliders = {
	grassCollider1: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 0,
		y: 288,
		width: 32,
		height: 32,
	},
	grassCollider2: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 32,
		y: 288,
		width: 32,
		height: 32,
	},
	grassCollider3: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 64,
		y: 288,
		width: 32,
		height: 32,
	},
	grassCollider4: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 96,
		y: 288,
		width: 32,
		height: 32,
	},
	grassCollider5: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 128,
		y: 288,
		width: 32,
		height: 32,
	},
	grassCollider6: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 160,
		y: 288,
		width: 32,
		height: 32,
	},
	grassCollider7: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 192,
		y: 288,
		width: 32,
		height: 32,
	},
	grassCollider8: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 224,
		y: 288,
		width: 32,
		height: 32,
	},
	grassCollider9: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 256,
		y: 288,
		width: 32,
		height: 32,
	},
	grassCollider10: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 288,
		y: 288,
		width: 32,
		height: 32,
	},
	grassCollider11: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 320,
		y: 288,
		width: 32,
		height: 32,
	},
	grassCollider12: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 352,
		y: 288,
		width: 32,
		height: 32,
	},
	floorCollider2: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 0,
		y: 308,
		width: 64,
		height: 64,
	},
	floorCollider3: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 308,
		width: 64,
		height: 64,
	},
	floorCollider4: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 308,
		width: 64,
		height: 64,
	},
	floorCollider5: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 128,
		y: 308,
		width: 64,
		height: 64,
	},
	floorCollider6: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 192,
		y: 308,
		width: 64,
		height: 64,
	},
	floorCollider7: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 256,
		y: 308,
		width: 64,
		height: 64,
	},
	floorCollider8: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 320,
		y: 308,
		width: 64,
		height: 64,
	},
	floorCollider9: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 0,
		y: 372,
		width: 64,
		height: 64,
	},
	floorCollider10: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 372,
		width: 64,
		height: 64,
	},
	floorCollider11: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 372,
		width: 64,
		height: 64,
	},
	floorCollider12: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 128,
		y: 372,
		width: 64,
		height: 64,
	},
	floorCollider13: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 192,
		y: 372,
		width: 64,
		height: 64,
	},
	floorCollider14: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 256,
		y: 372,
		width: 64,
		height: 64,
	},
	floorCollider15: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 320,
		y: 372,
		width: 64,
		height: 64,
	},
	floorCollider16: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 0,
		y: 436,
		width: 64,
		height: 64,
	},
	floorCollider17: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 436,
		width: 64,
		height: 64,
	},
	floorCollider18: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 436,
		width: 64,
		height: 64,
	},
	floorCollider19: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 128,
		y: 436,
		width: 64,
		height: 64,
	},
	floorCollider20: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 192,
		y: 436,
		width: 64,
		height: 64,
	},
	floorCollider21: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 256,
		y: 436,
		width: 64,
		height: 64,
	},
	floorCollider22: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 320,
		y: 436,
		width: 64,
		height: 64,
	},
	floorCollider23: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 0,
		y: 500,
		width: 64,
		height: 64,
	},
	floorCollider24: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 500,
		width: 64,
		height: 64,
	},
	floorCollider25: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 500,
		width: 64,
		height: 64,
	},
	floorCollider26: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 128,
		y: 500,
		width: 64,
		height: 64,
	},
	floorCollider27: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 192,
		y: 500,
		width: 64,
		height: 64,
	},
	floorCollider28: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 256,
		y: 500,
		width: 64,
		height: 64,
	},
	floorCollider29: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 320,
		y: 500,
		width: 64,
		height: 64,
	},
	floorCollider30: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 490,
		y: 308,
		width: 32,
		height: 32,
	},
	floorCollider31: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 522,
		y: 308,
		width: 32,
		height: 32,
	},
	floorCollider32: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 620,
		y: 378,
		width: 32,
		height: 32,
	},
	floorCollider33: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 652,
		y: 378,
		width: 32,
		height: 32,
	},
	floorCollider34: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 750,
		y: 448,
		width: 32,
		height: 32,
	},
	floorCollider35: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 782,
		y: 448,
		width: 32,
		height: 32,
	},
	grassCollider13: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 880,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider14: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 912,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider15: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 944,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider16: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 976,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider17: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 1008,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider18: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 1040,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider19: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 1072,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider20: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 1104,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider21: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 1136,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider22: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 1168,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider23: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 1200,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider24: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 1232,
		y: 492,
		width: 32,
		height: 32,
	},
	floorCollider36: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 880,
		y: 508,
		width: 64,
		height: 64,
	},
	floorCollider37: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 944,
		y: 508,
		width: 64,
		height: 64,
	},
	floorCollider38: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 1008,
		y: 508,
		width: 64,
		height: 64,
	},
	floorCollider39: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 1072,
		y: 508,
		width: 64,
		height: 64,
	},
	floorCollider40: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 1136,
		y: 508,
		width: 64,
		height: 64,
	},
	floorCollider41: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 1200,
		y: 508,
		width: 64,
		height: 64,
	},
	floorCollider43: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 1168,
		y: 358,
		width: 32,
		height: 32,
	},
	floorCollider44: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 1136,
		y: 208,
		width: 32,
		height: 32,
	},
	floorCollider47: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 1168,
		y: 58,
		width: 32,
		height: 32,
	},
	floorCollider48: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 1200,
		y: 58,
		width: 32,
		height: 32,
	},
	floorCollider49: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 1232,
		y: 58,
		width: 32,
		height: 32,
	},
};
/**
 * @type {Object}
 * @description List of object colliders
 */
const objectColliders = {
	treasureChest: {
		imgPath:
			pathToImgFolder +
			'objects/treasure_chest/opening/treasure_chest_opening_00.png',
		anchor: 0.0,
		x: 1232,
		y: 26,
		width: 32,
		height: 32,
	},
};
/**
 * @type {Object}
 * @description List of scenery colliders
 */
const decorsColliders = {
	blockCollider1: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 0,
		y: 224,
		width: 64,
		height: 64,
	},
	blockCollider2: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 128,
		y: 224,
		width: 64,
		height: 64,
	},
	blockCollider3: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 0,
		y: 161,
		width: 64,
		height: 64,
	},
	blockCollider4: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 128,
		y: 161,
		width: 64,
		height: 64,
	},
	blockCollider5: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 0,
		y: 98,
		width: 64,
		height: 64,
	},
	blockCollider6: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 128,
		y: 98,
		width: 64,
		height: 64,
	},
	blockCollider7: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 98,
		width: 64,
		height: 64,
	},
	topCastleCollider1: {
		imgPath: pathToImgFolder + 'Levels/level_01_top_castle_01_64.png',
		anchor: 0.0,
		x: 0,
		y: 34,
		width: 64,
		height: 64,
	},
	topCastleCollider2: {
		imgPath: pathToImgFolder + 'Levels/level_01_top_castle_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 34,
		width: 64,
		height: 64,
	},
	topCastleCollider3: {
		imgPath: pathToImgFolder + 'Levels/level_01_top_castle_02_64.png',
		anchor: 0.0,
		x: 128,
		y: 34,
		width: 64,
		height: 64,
	},
	doorCollider1: {
		imgPath: pathToImgFolder + 'Levels/level_01_door_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 161,
		width: 64,
		height: 128,
	},
	blockCollider8: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 1136,
		y: 428,
		width: 64,
		height: 64,
		zIndex: 0,
	},
	blockCollider9: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 1136,
		y: 364,
		width: 64,
		height: 64,
	},
	blockCollider10: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 1136,
		y: 300,
		width: 64,
		height: 64,
	},
	blockCollider11: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 1136,
		y: 236,
		width: 64,
		height: 64,
	},
	blockCollider12: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 1136,
		y: 172,
		width: 64,
		height: 64,
	},
	blockCollider13: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 1136,
		y: 108,
		width: 64,
		height: 64,
	},
	topCastleCollider4: {
		imgPath: pathToImgFolder + 'Levels/level_01_top_castle_01_64.png',
		anchor: 0.0,
		x: 1136,
		y: 44,
		width: 64,
		height: 64,
	},
	topCastleCollider5: {
		imgPath: pathToImgFolder + 'Levels/level_01_top_castle_02_64.png',
		anchor: 0.0,
		x: 1200,
		y: 44,
		width: 64,
		height: 64,
	},
	blockCollider14: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 1200,
		y: 428,
		width: 64,
		height: 64,
		zIndex: 0,
	},
	blockCollider15: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 1200,
		y: 364,
		width: 64,
		height: 64,
	},
	blockCollider16: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 1200,
		y: 300,
		width: 64,
		height: 64,
	},
	blockCollider17: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 1200,
		y: 236,
		width: 64,
		height: 64,
	},
	blockCollider18: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 1200,
		y: 172,
		width: 64,
		height: 64,
	},
	blockCollider19: {
		imgPath: pathToImgFolder + 'Levels/level_01_block_01_64.png',
		anchor: 0.0,
		x: 1200,
		y: 108,
		width: 64,
		height: 64,
	},
};

const mobileColliders = {
		floorCollider50: {
			imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
			anchor: 0.0,
			x: 1350,
			y: 320,
			width: 32,
			height: 32,
		},
		floorCollider51: {
			imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
			anchor: 0.0,
			x: 1382,
			y: 320,
			width: 32,
			height: 32,
		},
		floorCollider52: {
			imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
			anchor: 0.0,
			x: 1414,
			y: 320,
			width: 32,
			height: 32,
		},
};

export default {
	wallColliders,
	floorColliders,
	objectColliders,
	decorsColliders,
	mobileColliders,
};
