const pathToImgFolder = '/static/assets/images/';

const colliders = {
	colliderFloorSprite: {
		imgPath: pathToImgFolder + 'Levels/simple_ground.png',
		anchor: 0.0,
		x: 0,
		y: 288,
		width: 350,
		height: 25,
	},
	leftColliderWallSprite: {
		imgPath: pathToImgFolder + 'Levels/simple_wall.png',
		anchor: 0.0,
		x: 0,
		y: 200,
		width: 20,
		height: 113,
	},
	rightColliderWallSprite: {
		imgPath: pathToImgFolder + 'Levels/simple_wall.png',
		anchor: 0.0,
		x: 350,
		y: 200,
		width: 20,
		height: 113,
	},
};

export default colliders;
