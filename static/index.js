/* import * as PIXI from '/static/pixi.js'; */

setControls();

const app = new PIXI.Application({
	height: 550,
	width: 600,
	/* 	backgroundColor: 0x1099bb, */
	transparent: true,
});

document.getElementById('screen').appendChild(app.view);
const pathToAnimation = '/static/assets/images/Warrior/Animations';
// create a new Sprite from an image path
// path starting point from index.html where script js is called
let warriorRunningImg = [
	pathToAnimation + '/Run/Run__000.png',
	pathToAnimation + '/Run/Run__001.png',
	pathToAnimation + '/Run/Run__002.png',
	pathToAnimation + '/Run/Run__003.png',
	pathToAnimation + '/Run/Run__004.png',
	pathToAnimation + '/Run/Run__005.png',
	pathToAnimation + '/Run/Run__006.png',
	pathToAnimation + '/Run/Run__007.png',
	pathToAnimation + '/Run/Run__008.png',
	pathToAnimation + '/Run/Run__009.png',
	pathToAnimation + '/Run/Run__010.png',
	pathToAnimation + '/Run/Run__011.png',
	pathToAnimation + '/Run/Run__012.png',
];
let warriorJumpingImg = [
	pathToAnimation + '/Jump/Jump__000.png',
	pathToAnimation + '/Jump/Jump__001.png',
	pathToAnimation + '/Jump/Jump__002.png',
];
let warriorIdlingImg = [
	pathToAnimation + '/Idle/Idle__000.png',
	pathToAnimation + '/Idle/Idle__001.png',
	pathToAnimation + '/Idle/Idle__002.png',
	pathToAnimation + '/Idle/Idle__003.png',
	pathToAnimation + '/Idle/Idle__004.png',
	pathToAnimation + '/Idle/Idle__005.png',
	pathToAnimation + '/Idle/Idle__006.png',
	pathToAnimation + '/Idle/Idle__007.png',
	pathToAnimation + '/Idle/Idle__008.png',
	pathToAnimation + '/Idle/Idle__009.png',
	pathToAnimation + '/Idle/Idle__010.png',
	pathToAnimation + '/Idle/Idle__011.png',
	pathToAnimation + '/Idle/Idle__012.png',
	pathToAnimation + '/Idle/Idle__013.png',
	pathToAnimation + '/Idle/Idle__014.png',
	pathToAnimation + '/Idle/Idle__015.png',
	pathToAnimation + '/Idle/Idle__016.png',
	pathToAnimation + '/Idle/Idle__017.png',
	pathToAnimation + '/Idle/Idle__018.png',
	pathToAnimation + '/Idle/Idle__019.png',
	pathToAnimation + '/Idle/Idle__020.png',
	pathToAnimation + '/Idle/Idle__021.png',
	pathToAnimation + '/Idle/Idle__022.png',
	pathToAnimation + '/Idle/Idle__023.png',
	pathToAnimation + '/Idle/Idle__024.png',
	pathToAnimation + '/Idle/Idle__025.png',
];
let warriorDyingImg = [
	pathToAnimation + '/Die/Die__000.png',
	pathToAnimation + '/Die/Die__001.png',
	pathToAnimation + '/Die/Die__002.png',
	pathToAnimation + '/Die/Die__003.png',
	pathToAnimation + '/Die/Die__004.png',
	pathToAnimation + '/Die/Die__005.png',
	pathToAnimation + '/Die/Die__006.png',
	pathToAnimation + '/Die/Die__007.png',
	pathToAnimation + '/Die/Die__008.png',
	pathToAnimation + '/Die/Die__009.png',
	pathToAnimation + '/Die/Die__010.png',
	pathToAnimation + '/Die/Die__011.png',
	pathToAnimation + '/Die/Die__012.png',
	pathToAnimation + '/Die/Die__013.png',
	pathToAnimation + '/Die/Die__014.png',
	pathToAnimation + '/Die/Die__015.png',
	pathToAnimation + '/Die/Die__016.png',
	pathToAnimation + '/Die/Die__017.png',
];
let warriorAttackingImg = [
	pathToAnimation + '/Attack/Attack__000.png',
	pathToAnimation + '/Attack/Attack__001.png',
	pathToAnimation + '/Attack/Attack__002.png',
	pathToAnimation + '/Attack/Attack__003.png',
	pathToAnimation + '/Attack/Attack__004.png',
	pathToAnimation + '/Attack/Attack__005.png',
	pathToAnimation + '/Attack/Attack__006.png',
	pathToAnimation + '/Attack/Attack__007.png',
	pathToAnimation + '/Attack/Attack__008.png',
	pathToAnimation + '/Attack/Attack__009.png',
	pathToAnimation + '/Attack/Attack__010.png',
];
let warriorAttacking2Img = [
	pathToAnimation + '/Attack 2/Attack2__000.png',
	pathToAnimation + '/Attack 2/Attack2__001.png',
	pathToAnimation + '/Attack 2/Attack2__002.png',
	pathToAnimation + '/Attack 2/Attack2__003.png',
	pathToAnimation + '/Attack 2/Attack2__004.png',
	pathToAnimation + '/Attack 2/Attack2__005.png',
	pathToAnimation + '/Attack 2/Attack2__006.png',
	pathToAnimation + '/Attack 2/Attack2__007.png',
	pathToAnimation + '/Attack 2/Attack2__008.png',
	pathToAnimation + '/Attack 2/Attack2__009.png',
	pathToAnimation + '/Attack 2/Attack2__010.png',
	pathToAnimation + '/Attack 2/Attack2__011.png',
	pathToAnimation + '/Attack 2/Attack2__012.png',
	pathToAnimation + '/Attack 2/Attack2__013.png',
	pathToAnimation + '/Attack 2/Attack2__014.png',
	pathToAnimation + '/Attack 2/Attack2__015.png',
	pathToAnimation + '/Attack 2/Attack2__016.png',
	pathToAnimation + '/Attack 2/Attack2__017.png',
	pathToAnimation + '/Attack 2/Attack2__018.png',
	pathToAnimation + '/Attack 2/Attack2__019.png',
	pathToAnimation + '/Attack 2/Attack2__020.png',
	pathToAnimation + '/Attack 2/Attack2__021.png',
];
let textureArray = [];
let texture = PIXI.Texture.from(pathToAnimation + '/Run/Run__000.png');

for (let i = 0; i < 12; i++) {
	let texture = PIXI.Texture.from(warriorRunningImg[i]);
	textureArray.push(texture);
}
let warrior = new PIXI.AnimatedSprite(textureArray);
// center the sprite's anchor point
warrior.anchor.set(0.5);

// move the sprite to the center of the screen
warrior.x = app.screen.width / 2;
warrior.y = app.screen.height / 2;

app.stage.addChild(warrior);

let animationCount = 0;
// Listen for animate update
app.ticker.add(() => {
	const animationSpeed = 0.01;
	animationCount = Math.ceil(animationCount + animationSpeed);
	warrior.texture = textureArray[animationCount % 12];
});

function setControls() {
	document.getElementById('Attack').addEventListener('click', () => {
		textureArray = [];
		for (let i = 0; i < 10; i++) {
			let texture = PIXI.Texture.from(warriorAttackingImg[i]);
			textureArray.push(texture);
		}
	});
	document.getElementById('Attack2').addEventListener('click', () => {
		textureArray = [];
		for (let i = 0; i < 21; i++) {
			let texture = PIXI.Texture.from(warriorAttacking2Img[i]);
			textureArray.push(texture);
		}
	});
	document.getElementById('Idle').addEventListener('click', () => {
		textureArray = [];
		for (let i = 0; i < 25; i++) {
			let texture = PIXI.Texture.from(warriorIdlingImg[i]);
			textureArray.push(texture);
		}
	});
	document.getElementById('Jump').addEventListener('click', () => {
		textureArray = [];
		for (let i = 0; i < 2; i++) {
			let texture = PIXI.Texture.from(warriorJumpingImg[i]);
			textureArray.push(texture);
		}
	});
	document.getElementById('Die').addEventListener('click', () => {
		textureArray = [];
		for (let i = 0; i < 17; i++) {
			let texture = PIXI.Texture.from(warriorDyingImg[i]);
			textureArray.push(texture);
		}
	});
	document.getElementById('Run').addEventListener('click', () => {
		textureArray = [];
		for (let i = 0; i <= 12; i++) {
			let texture = PIXI.Texture.from(warriorRunningImg[i]);
			textureArray.push(texture);
		}
	});
}
