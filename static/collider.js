export default class Collider {
	_spriteTextureArray = [];
	_spriteObjectToInitialize;
	_spriteConf;
	_isSprite;

	constructor(
		spriteTextureArray,
		spriteObjectToInitialize,
		spriteConf,
		isSprite = true
	) {
		this._spriteTextureArray = spriteTextureArray;
		this._spriteObjectToInitialize = spriteObjectToInitialize;
		this._spriteConf = spriteConf;
		this._isSprite = isSprite;
		return this.buildCollider();
	}

	get _spriteTextureArray() {
		return this._spriteTextureArray;
	}

	get _spriteObjectToInitialize() {
		return this._spriteObjectToInitialize;
	}

	get _spriteConf() {
		return this._spriteConf;
	}

	get _isSprite() {
		return this._isSprite;
	}

	buildCollider() {
		if (!this._spriteTextureArray && !this._isSprite)
			return (this._spriteObjectToInitialize = new PIXI.Rectangle(
				this._spriteConf.x,
				this._spriteConf.y,
				this._spriteConf.width,
				this._spriteConf.height
			));
		let texture = this._spriteConf.imgPath
			? PIXI.Texture.from(this._spriteConf.imgPath)
			: PIXI.Texture.WHITE;
		if (this._spriteTextureArray) {
			this._spriteTextureArray.push(texture);
		}
		this._spriteObjectToInitialize = new PIXI.Sprite(texture);
		this._spriteObjectToInitialize.anchor.set(this._spriteConf.anchor);
		this._spriteObjectToInitialize.x = this._spriteConf.x;
		this._spriteObjectToInitialize.y = this._spriteConf.y;
		this._spriteObjectToInitialize.width = this._spriteConf.width;
		this._spriteObjectToInitialize.height = this._spriteConf.height;
		if (this._spriteConf.tint)
			this._spriteObjectToInitialize.tint = this._spriteConf.tint;
		return this._spriteObjectToInitialize;
	}

	static isColliding(playerBox, collider) {
		return (
			playerBox.x + playerBox.width > collider.x &&
			playerBox.x < collider.x + collider.width &&
			playerBox.y + playerBox.height > collider.y &&
			playerBox.y < collider.y + collider.height
		);
	}

	static detectCollider(playerBox, collidersCheckList) {
		for (const collidersSubCheckList of collidersCheckList) {
			for (const collider of collidersSubCheckList) {
				if (this.isColliding(playerBox, collider)) {
					return true;
				}
			}
		}
		return false;
	}

	static getObjectAroundCollider(playerBox) {
		for (let i = 0; i < objectCollidersList.length; i++) {
			if (this.isColliding(playerBox, objectCollidersList[i])) {
				return i;
			}
		}
		return null;
	}

	static getMobileColliderAround(playerBox, mobileCollidersCheckList) {
		for (let i = 0; i < mobileCollidersCheckList.length; i++) {
			for (const subMobileColliderList of mobileCollidersCheckList[i]) {
				if (this.isColliding(playerBox, subMobileColliderList)) {
					return i;
				}
			}
		}
	}
}
