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
			textBox: {
				anchor: 0.0,
				x: 30,
				width: 260,
				y: 30,
				height: 120,
				tint: '#000000',
			},
		},
		pixiRequirements: {
			text:
				'What a strange place! Where has gone everyone? Maybe I should go right and see...',
			style: {
				fontFamily: 'Wariorus',
				fontSize: 14,
				fill: ['#FF1010'],
				align: 'left',
				wordWrap: true,
				wordWrapWidth: 230,
				lineHeight: 18 
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
const objectiveText = {};
/**
 * @type {Object}
 * @description List of tutorial texts
 */
const helpText = {};

export default {narrationText, dialogText, objectiveText, helpText};
