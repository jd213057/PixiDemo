/**
 * @type {string}
 * @description File path to images's folder
 */
const pathToImgFolder = '/static/assets/images/';
/**
 * @type {string}
 * @description File path to next text icon from images's folder
 */
const pathToNextTextIcon = 'TextBox/buttonX.png';
/**
 * @type {Object}
 * @description List of narrative texts
 */
const narrationText = {
	narrationText1: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 235,
				width: 40,
				y: 75,
				height: 40,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 90,
				tint: '#000000',
			},
			activationArea: {
				x1: 0,
				x2: 300,
			},
		},
		pixiRequirements: {
			text: "Warrior: What a good day! Let's go for a morning walk.",
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
	narrationText2: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 235,
				width: 40,
				y: 75,
				height: 40,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 90,
				tint: '#000000',
			},
			activationArea: {
				x1: 0,
				x2: 300,
			},
		},
		pixiRequirements: {
			text: 'Use the right arrow to go towards right of the screen.',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
	narrationText3: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 235,
				width: 40,
				y: 90,
				height: 40,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 105,
				tint: '#000000',
			},
			activationArea: {
				x1: 990,
				x2: 1150,
			},
		},
		pixiRequirements: {
			text:
				'Warrior: Hey you! You seem to be worried about something... Maybe I can help!',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
	narrationText4: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 235,
				width: 40,
				y: 125,
				height: 40,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 140,
				tint: '#000000',
			},
			activationArea: {
				x1: 990,
				x2: 1150,
			},
		},
		pixiRequirements: {
			text:
				'Guy: Oh my Lord! I come from the other side of the valley. My Princess, princess Lemona sent me for help...',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
	narrationText5: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 235,
				width: 40,
				y: 65,
				height: 40,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 80,
				tint: '#000000',
			},
			activationArea: {
				x1: 990,
				x2: 1150,
			},
		},
		pixiRequirements: {
			text: 'Warrior: What is wrong ?',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
	narrationText6: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 235,
				width: 40,
				y: 155,
				height: 40,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 170,
				tint: '#000000',
			},
			activationArea: {
				x1: 990,
				x2: 1150,
			},
		},
		pixiRequirements: {
			text:
				'Guy: Princess Lemona recently received some threats from a famous and powerful wizard named Corona. She thinks she might be in danger.',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
	narrationText7: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 235,
				width: 40,
				y: 85,
				height: 40,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 105,
				tint: '#000000',
			},
			activationArea: {
				x1: 990,
				x2: 1150,
			},
		},
		pixiRequirements: {
			text:
				'Warrior: Well I see! I will go see her and make sure she is allright then.',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
	narrationText8: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 235,
				width: 40,
				y: 210,
				height: 40,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 225,
				tint: '#000000',
			},
			activationArea: {
				x1: 990,
				x2: 1150,
			},
		},
		pixiRequirements: {
			text:
				'Guy: Thank you my Lord! As I said, princess Lemona is on the other side of the valley. The journey may be long and you may encounter many enemies and traps. Please be careful my Lord!',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
	narrationText9: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 235,
				width: 40,
				y: 155,
				height: 40,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 170,
				tint: '#000000',
			},
			activationArea: {
				x1: 990,
				x2: 1150,
			},
		},
		pixiRequirements: {
			text:
				"Guy: One last thing! During your trip you will find some treasure chests. Don't hesitate to open them, their content may help you!",
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
	narrationText10: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 30,
				width: 25,
				y: 25,
				height: 25,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 90,
				tint: '#000000',
			},
			activationArea: {
				x1: null,
				x2: null,
			},
		},
		pixiRequirements: {
			text:
				'Guy: Oh my Lord! Princess Lemona is not in here anymore... I found this letter on the floor. It says that she was kidnapped by this wizard.',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
	narrationText11: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 30,
				width: 25,
				y: 25,
				height: 25,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 90,
				tint: '#000000',
			},
			activationArea: {
				x1: null,
				x2: null,
			},
		},
		pixiRequirements: {
			text:
				'Warrior: What a tragedy! Listen...Hummm....What is your name?',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
	narrationText12: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 30,
				width: 25,
				y: 25,
				height: 25,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 90,
				tint: '#000000',
			},
			activationArea: {
				x1: null,
				x2: null,
			},
		},
		pixiRequirements: {
			text: 'Guy: My name...Grogu, my Lord.',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
	narrationText13: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			nextButtonImg: {
				imgPath: pathToImgFolder + pathToNextTextIcon,
				anchor: 0.0,
				x: 30,
				width: 25,
				y: 25,
				height: 25,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 90,
				tint: '#000000',
			},
			activationArea: {
				x1: null,
				x2: null,
			},
		},
		pixiRequirements: {
			text:
				'Warrior: Well Grogu, I will rescue princess Lemona from this Corona! That is my word and duty. May this valley be peaceful again...',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
};
/**
 * @type {Object}
 * @description List of dialog texts
 */
const dialogText = {};
/**
 * @type {Object}
 * @description List of mission texts
 */
const objectiveText = {
	objectiveText1: {
		overlayConfig: {
			text: {
				anchor: 0.0,
				x: 50,
				y: 50,
			},
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 90,
				tint: '#000000',
			},
			activationArea: {
				x1: null,
				x2: null,
			},
		},
		pixiRequirements: {
			text: 'Treasure chest opened! You have won this item.',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18,
			},
		},
	},
};
/**
 * @type {Object}
 * @description List of tutorial texts
 */
const helpText = {};

export default {narrationText, dialogText, objectiveText, helpText};
