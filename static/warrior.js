class Warrior extends PIXI.Sprite {
    ptv = 100;
    strenght = 100;

    constructor() {
const pathToAnimation = '/static/assets/images/Warrior/Animations';

let textureArray = [];
let texture = PIXI.Texture.from(pathToAnimation + '/Idle/Idle__000.png');
textureArray.push(texture);
let warrior = new PIXI.AnimatedSprite(textureArray);
    }


loadSmallAttackTexture() {
	textureArray = [];
	let loaderArray = loaders.warriorLoader.warriorAttackingImg;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
	warrior.y = 250;
	isMoving = true;
}

loadBigAttackTexture() {
	textureArray = [];
	let loaderArray = loaders.warriorLoader.warriorAttacking2Img;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
	warrior.y = 245;
	isMoving = true;
}

loadIdleTexture() {
	warrior.y = 250;
	textureArray = [];
	let loaderArray = loaders.warriorLoader.warriorIdlingImg;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
	isMoving = true;
}

loadJumpTexture() {
	warrior.y = 250;
	textureArray = [];
	let loaderArray = loaders.warriorLoader.warriorJumpingImg;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
	isMoving = true;
}

loadRunTexture() {
	warrior.y = 250;
	textureArray = [];
	let loaderArray = loaders.warriorLoader.warriorRunningImg;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
	isMoving = true;
}

loadDieTexture() {
	warrior.y = 260;
	textureArray = [];
	let loaderArray = loaders.warriorLoader.warriorDyingImg;
	loaderArray.forEach((img) => textureArray.push(new PIXI.Texture.from(img)));
	isMoving = true;
}

}