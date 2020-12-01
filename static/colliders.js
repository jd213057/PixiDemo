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
	groundCollider1: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 0,
		y: 308,
		width: 64,
		height: 64,
	},
	groundCollider2: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 308,
		width: 64,
		height: 64,
	},
	groundCollider3: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 308,
		width: 64,
		height: 64,
	},
	groundCollider4: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 128,
		y: 308,
		width: 64,
		height: 64,
	},
	groundCollider5: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 192,
		y: 308,
		width: 64,
		height: 64,
	},
	groundCollider6: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 256,
		y: 308,
		width: 64,
		height: 64,
	},
	groundCollider7: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 320,
		y: 308,
		width: 64,
		height: 64,
	},
	groundCollider8: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 0,
		y: 372,
		width: 64,
		height: 64,
	},
	groundCollider9: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 372,
		width: 64,
		height: 64,
	},
	groundCollider10: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 372,
		width: 64,
		height: 64,
	},
	groundCollider11: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 128,
		y: 372,
		width: 64,
		height: 64,
	},
	groundCollider12: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 192,
		y: 372,
		width: 64,
		height: 64,
	},
	groundCollider13: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 256,
		y: 372,
		width: 64,
		height: 64,
	},
	groundCollider14: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 320,
		y: 372,
		width: 64,
		height: 64,
	},
	groundCollider15: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 0,
		y: 436,
		width: 64,
		height: 64,
	},
	groundCollider16: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 436,
		width: 64,
		height: 64,
	},
	groundCollider17: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 436,
		width: 64,
		height: 64,
	},
	groundCollider18: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 128,
		y: 436,
		width: 64,
		height: 64,
	},
	groundCollider19: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 192,
		y: 436,
		width: 64,
		height: 64,
	},
	groundCollider20: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 256,
		y: 436,
		width: 64,
		height: 64,
	},
	groundCollider21: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 320,
		y: 436,
		width: 64,
		height: 64,
	},
	groundCollider22: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 0,
		y: 500,
		width: 64,
		height: 64,
	},
	groundCollider23: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 500,
		width: 64,
		height: 64,
	},
	groundCollider24: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 64,
		y: 500,
		width: 64,
		height: 64,
	},
	groundCollider25: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 128,
		y: 500,
		width: 64,
		height: 64,
	},
	groundCollider26: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 192,
		y: 500,
		width: 64,
		height: 64,
	},
	groundCollider27: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 256,
		y: 500,
		width: 64,
		height: 64,
	},
	groundCollider28: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 320,
		y: 500,
		width: 64,
		height: 64,
	},
	boxCollider1: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 490,
		y: 308,
		width: 32,
		height: 32,
	},
	boxCollider2: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 522,
		y: 308,
		width: 32,
		height: 32,
	},
	boxCollider3: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 620,
		y: 378,
		width: 32,
		height: 32,
	},
	boxCollider4: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 652,
		y: 378,
		width: 32,
		height: 32,
	},
	boxCollider5: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 750,
		y: 448,
		width: 32,
		height: 32,
	},
	boxCollider6: {
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
	groundCollider29: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 880,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider30: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 944,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider31: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 1008,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider32: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 1072,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider33: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 1136,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider34: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 1200,
		y: 508,
		width: 64,
		height: 64,
	},
	boxCollider7: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 1168,
		y: 358,
		width: 32,
		height: 32,
	},
	boxCollider8: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 1136,
		y: 208,
		width: 32,
		height: 32,
	},
	boxCollider9: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 1168,
		y: 58,
		width: 32,
		height: 32,
	},
	boxCollider10: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 1200,
		y: 58,
		width: 32,
		height: 32,
	},
	boxCollider11: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 1232,
		y: 58,
		width: 32,
		height: 32,
	},
	grassCollider25: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2200,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider26: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2232,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider27: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2264,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider28: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2296,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider29: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2328,
		y: 492,
		width: 32,
		height: 32,
	},
	grassCollider30: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2360,
		y: 492,
		width: 32,
		height: 32,
	},
	groundCollider35: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2200,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider36: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2264,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider37: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2328,
		y: 508,
		width: 64,
		height: 64,
	},
	grassCollider31: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2392,
		y: 364,
		width: 32,
		height: 32,
	},
	grassCollider32: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2424,
		y: 364,
		width: 32,
		height: 32,
	},
	groundCollider38: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2392,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider39: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2392,
		y: 444,
		width: 64,
		height: 64,
	},
	groundCollider40: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2392,
		y: 380,
		width: 64,
		height: 64,
	},
	grassCollider33: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2456,
		y: 236,
		width: 32,
		height: 32,
	},
	grassCollider34: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2488,
		y: 236,
		width: 32,
		height: 32,
	},
	groundCollider41: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2456,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider42: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2456,
		y: 444,
		width: 64,
		height: 64,
	},
	groundCollider43: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2456,
		y: 380,
		width: 64,
		height: 64,
	},
	groundCollider44: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2456,
		y: 316,
		width: 64,
		height: 64,
	},
	groundCollider45: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2456,
		y: 252,
		width: 64,
		height: 64,
	},
	grassCollider35: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2520,
		y: 236,
		width: 32,
		height: 32,
	},
	boxCollider12: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 2520,
		y: 110,
		width: 32,
		height: 32,
	},
	grassCollider36: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2552,
		y: 236,
		width: 32,
		height: 32,
	},
	groundCollider46: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2520,
		y: 252,
		width: 64,
		height: 64,
	},
	groundCollider47: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2520,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider48: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2520,
		y: 444,
		width: 64,
		height: 64,
	},

	grassCollider38: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2584,
		y: 236,
		width: 32,
		height: 32,
	},
	grassCollider39: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2616,
		y: 236,
		width: 32,
		height: 32,
	},
	groundCollider49: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2584,
		y: 252,
		width: 64,
		height: 64,
	},
	groundCollider50: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2584,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider51: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2584,
		y: 444,
		width: 64,
		height: 64,
	},
	grassCollider40: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2648,
		y: 236,
		width: 32,
		height: 32,
	},
	grassCollider41: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2680,
		y: 236,
		width: 32,
		height: 32,
	},
	boxCollider13: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 2680,
		y: 110,
		width: 32,
		height: 32,
	},
	groundCollider52: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2648,
		y: 252,
		width: 64,
		height: 64,
	},
	groundCollider53: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2648,
		y: 508,
		width: 64,
		height: 64,
	},
	grassCollider42: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2712,
		y: 236,
		width: 32,
		height: 32,
	},
	grassCollider43: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2744,
		y: 236,
		width: 32,
		height: 32,
	},
	groundCollider54: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2712,
		y: 252,
		width: 64,
		height: 64,
	},
	groundCollider55: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2712,
		y: 508,
		width: 64,
		height: 64,
	},
	grassCollider44: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2776,
		y: 236,
		width: 32,
		height: 32,
	},
	grassCollider45: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2808,
		y: 236,
		width: 32,
		height: 32,
	},
	groundCollider56: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2776,
		y: 252,
		width: 64,
		height: 64,
	},
	groundCollider57: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2776,
		y: 316,
		width: 64,
		height: 64,
	},
	groundCollider58: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2776,
		y: 348,
		width: 64,
		height: 64,
	},
	groundCollider59: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2776,
		y: 508,
		width: 64,
		height: 64,
	},
	grassCollider46: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2840,
		y: 300,
		width: 32,
		height: 32,
	},
	grassCollider47: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 2872,
		y: 300,
		width: 32,
		height: 32,
	},
	groundCollider60: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2840,
		y: 316,
		width: 64,
		height: 64,
	},
	groundCollider61: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2840,
		y: 348,
		width: 64,
		height: 64,
	},
	boxCollider14: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 2824,
		y: 110,
		width: 32,
		height: 32,
	},
	boxCollider15: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 2904,
		y: 380,
		width: 32,
		height: 32,
	},
	boxCollider16: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 2968,
		y: 110,
		width: 32,
		height: 32,
	},
	groundCollider62: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2840,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider63: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2904,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider64: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 2968,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider65: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3032,
		y: 508,
		width: 64,
		height: 64,
	},
	groundCollider66: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3096,
		y: 508,
		width: 64,
		height: 64,
	},
	grassCollider48: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 3160,
		y: 108,
		width: 32,
		height: 32,
	},
	grassCollider49: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 3192,
		y: 108,
		width: 32,
		height: 32,
	},
	groundCollider67: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3160,
		y: 124,
		width: 64,
		height: 64,
	},
	groundCollider68: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3160,
		y: 188,
		width: 64,
		height: 64,
	},
	groundCollider69: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3160,
		y: 252,
		width: 64,
		height: 64,
	},
	groundCollider70: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3160,
		y: 316,
		width: 64,
		height: 64,
	},
	groundCollider71: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3160,
		y: 380,
		width: 64,
		height: 64,
	},
	groundCollider72: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3160,
		y: 444,
		width: 64,
		height: 64,
	},
	groundCollider73: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3160,
		y: 508,
		width: 64,
		height: 64,
	},
	grassCollider50: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 3224,
		y: 108,
		width: 32,
		height: 32,
	},
	grassCollider51: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 3256,
		y: 108,
		width: 32,
		height: 32,
	},
	groundCollider74: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3224,
		y: 124,
		width: 64,
		height: 64,
	},
	groundCollider75: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3224,
		y: 188,
		width: 64,
		height: 64,
	},
	groundCollider76: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3224,
		y: 252,
		width: 64,
		height: 64,
	},
	groundCollider77: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3224,
		y: 316,
		width: 64,
		height: 64,
	},
	groundCollider78: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3224,
		y: 380,
		width: 64,
		height: 64,
	},
	groundCollider79: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3224,
		y: 444,
		width: 64,
		height: 64,
	},
	groundCollider80: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3224,
		y: 508,
		width: 64,
		height: 64,
	},
	grassCollider52: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 3288,
		y: 108,
		width: 32,
		height: 32,
	},
	grassCollider53: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 3320,
		y: 108,
		width: 32,
		height: 32,
	},
	groundCollider81: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3288,
		y: 124,
		width: 64,
		height: 64,
	},
	groundCollider82: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3288,
		y: 188,
		width: 64,
		height: 64,
	},
	groundCollider83: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3288,
		y: 252,
		width: 64,
		height: 64,
	},
	groundCollider84: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3288,
		y: 316,
		width: 64,
		height: 64,
	},
	groundCollider85: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3288,
		y: 380,
		width: 64,
		height: 64,
	},
	groundCollider86: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3288,
		y: 444,
		width: 64,
		height: 64,
	},
	groundCollider87: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3288,
		y: 508,
		width: 64,
		height: 64,
	},
	boxCollider17: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_01_32.png',
		anchor: 0.0,
		x: 3496,
		y: 110,
		width: 32,
		height: 32,
	},
	grassCollider54: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 3672,
		y: 108,
		width: 32,
		height: 32,
	},
	grassCollider55: {
		imgPath: pathToImgFolder + 'Levels/level_01_grass_01_32.png',
		anchor: 0.0,
		x: 3704,
		y: 108,
		width: 32,
		height: 32,
	},
	groundCollider88: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3672,
		y: 124,
		width: 64,
		height: 64,
	},
	groundCollider89: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3672,
		y: 188,
		width: 64,
		height: 64,
	},
	groundCollider90: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3672,
		y: 252,
		width: 64,
		height: 64,
	},
	groundCollider91: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3672,
		y: 316,
		width: 64,
		height: 64,
	},
	groundCollider92: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3672,
		y: 380,
		width: 64,
		height: 64,
	},
	groundCollider93: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3672,
		y: 444,
		width: 64,
		height: 64,
	},
	groundCollider94: {
		imgPath: pathToImgFolder + 'Levels/level_01_ground_01_64.png',
		anchor: 0.0,
		x: 3672,
		y: 508,
		width: 64,
		height: 64,
	},
};
/**
 * @type {Object}
 * @description List of object colliders
 */
const objectColliders = {
	treasureChest1: {
		imgPath:
			pathToImgFolder +
			'objects/treasure_chest/opening/treasure_chest_opening_00.png',
		anchor: 0.0,
		x: 1232,
		y: 26,
		width: 32,
		height: 32,
	},
	treasureChest2: {
		imgPath:
			pathToImgFolder +
			'objects/treasure_chest/opening/treasure_chest_opening_00.png',
		anchor: 0.0,
		x: 2520,
		y: 412,
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
	mineCollider1: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2520,
		y: 380,
		width: 64,
		height: 64,
	},
	mineCollider2: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2520,
		y: 316,
		width: 64,
		height: 64,
	},
	mineCollider3: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2584,
		y: 380,
		width: 64,
		height: 64,
	},
	mineCollider4: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2584,
		y: 316,
		width: 64,
		height: 64,
	},
	mineCollider5: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2648,
		y: 380,
		width: 64,
		height: 64,
	},
	mineCollider6: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2648,
		y: 316,
		width: 64,
		height: 64,
	},
	mineCollider7: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2648,
		y: 444,
		width: 64,
		height: 64,
	},
	mineCollider8: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2712,
		y: 380,
		width: 64,
		height: 64,
	},
	mineCollider9: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2712,
		y: 316,
		width: 64,
		height: 64,
	},
	mineCollider10: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2712,
		y: 444,
		width: 64,
		height: 64,
	},
	mineCollider11: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2776,
		y: 444,
		width: 64,
		height: 64,
	},
	mineCollider12: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2776,
		y: 380,
		width: 64,
		height: 64,
	},
	mineCollider13: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2840,
		y: 444,
		width: 64,
		height: 64,
	},
	mineCollider14: {
		imgPath: pathToImgFolder + 'Levels/level_01_mine_indoor_01_64.png',
		anchor: 0.0,
		x: 2840,
		y: 380,
		width: 64,
		height: 64,
	},
};

const mobileColliders = {
	mobileCollider1: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
		anchor: 0.0,
		x: 1420,
		y: 320,
		width: 32,
		height: 32,
		movement: '-1X',
	},
	mobileCollider2: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
		anchor: 0.0,
		x: 1452,
		y: 320,
		width: 32,
		height: 32,
		movement: '-1X',
	},
	mobileCollider3: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
		anchor: 0.0,
		x: 1484,
		y: 320,
		width: 32,
		height: 32,
		movement: '-1X',
	},
	mobileCollider4: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
		anchor: 0.0,
		x: 1720,
		y: 320,
		width: 32,
		height: 32,
		movement: '-1X',
	},
	mobileCollider5: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
		anchor: 0.0,
		x: 1752,
		y: 320,
		width: 32,
		height: 32,
		movement: '-1X',
	},
	mobileCollider6: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
		anchor: 0.0,
		x: 1784,
		y: 320,
		width: 32,
		height: 32,
		movement: '-1X',
	},
	mobileCollider7: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
		anchor: 0.0,
		x: 3832,
		y: 444,
		width: 32,
		height: 32,
		movement: '-1X',
	},
	mobileCollider8: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
		anchor: 0.0,
		x: 3864,
		y: 444,
		width: 32,
		height: 32,
		movement: '-1X',
	},
	mobileCollider9: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
		anchor: 0.0,
		x: 3896,
		y: 444,
		width: 32,
		height: 32,
		movement: '-1X',
	},
	mobileCollider10: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
		anchor: 0.0,
		x: 4184,
		y: 110,
		width: 32,
		height: 32,
		movement: '-1Y',
	},
	mobileCollider11: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
		anchor: 0.0,
		x: 4216,
		y: 110,
		width: 32,
		height: 32,
		movement: '-1Y',
	},
	mobileCollider12: {
		imgPath: pathToImgFolder + 'Levels/level_01_box_02_32.png',
		anchor: 0.0,
		x: 4248,
		y: 110,
		width: 32,
		height: 32,
		movement: '-1Y',
	},
};

export default {
	wallColliders,
	floorColliders,
	objectColliders,
	decorsColliders,
	mobileColliders,
};
