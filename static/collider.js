export default class Collider {
	constructor(
		spriteTextureArray,
		spriteObjectToInitialize,
		spriteConf,
		isSprite = true
	) {
		if (!spriteTextureArray && !isSprite)
			return (spriteObjectToInitialize = new PIXI.Rectangle(
				spriteConf.x,
				spriteConf.y,
				spriteConf.width,
				spriteConf.height
			));
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
}
