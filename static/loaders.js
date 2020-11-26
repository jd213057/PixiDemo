/**
 * @type {string}
 * @description Path to images repository
 */
const pathToAnimation = '/static/assets/images/';
/**
 * @type {Object}
 * @description List of texture loaders for animated elements
 */
const loaders = {
	adventurerLoader: {
		adventurerIdlingAnim: [
			pathToAnimation + 'Adventurer/Idle/adventurer-idle-00.png',
			pathToAnimation + 'Adventurer/Idle/adventurer-idle-01.png',
			pathToAnimation + 'Adventurer/Idle/adventurer-idle-02.png',
			pathToAnimation + 'Adventurer/Idle/adventurer-idle-03.png',
		],
		adventurerRunningAnim: [
			pathToAnimation + 'Adventurer/Run/adventurer-run-00.png',
			pathToAnimation + 'Adventurer/Run/adventurer-run-01.png',
			pathToAnimation + 'Adventurer/Run/adventurer-run-02.png',
			pathToAnimation + 'Adventurer/Run/adventurer-run-03.png',
			pathToAnimation + 'Adventurer/Run/adventurer-run-04.png',
			pathToAnimation + 'Adventurer/Run/adventurer-run-05.png',
		],
		adventurerJumpingAnim: [
			pathToAnimation + 'Adventurer/Jump/adventurer-jump-00.png',
			pathToAnimation + 'Adventurer/Jump/adventurer-jump-01.png',
			pathToAnimation + 'Adventurer/Jump/adventurer-jump-02.png',
			pathToAnimation + 'Adventurer/Jump/adventurer-jump-03.png',
		],
		adventurerDyingAnim: [
			pathToAnimation + 'Adventurer/Die/adventurer-die-00.png',
			pathToAnimation + 'Adventurer/Die/adventurer-die-01.png',
			pathToAnimation + 'Adventurer/Die/adventurer-die-02.png',
			pathToAnimation + 'Adventurer/Die/adventurer-die-03.png',
			pathToAnimation + 'Adventurer/Die/adventurer-die-04.png',
			pathToAnimation + 'Adventurer/Die/adventurer-die-05.png',
			pathToAnimation + 'Adventurer/Die/adventurer-die-06.png',
		],
		adventurerAttacking1Anim: [
			pathToAnimation + 'Adventurer/Attack1/adventurer-attack1-00.png',
			pathToAnimation + 'Adventurer/Attack1/adventurer-attack1-01.png',
			pathToAnimation + 'Adventurer/Attack1/adventurer-attack1-02.png',
			pathToAnimation + 'Adventurer/Attack1/adventurer-attack1-03.png',
			pathToAnimation + 'Adventurer/Attack1/adventurer-attack1-04.png',
		],
		adventurerAttacking2Anim: [
			pathToAnimation + 'Adventurer/Attack2/adventurer-attack2-00.png',
			pathToAnimation + 'Adventurer/Attack2/adventurer-attack2-01.png',
			pathToAnimation + 'Adventurer/Attack2/adventurer-attack2-02.png',
			pathToAnimation + 'Adventurer/Attack2/adventurer-attack2-03.png',
			pathToAnimation + 'Adventurer/Attack2/adventurer-attack2-04.png',
			pathToAnimation + 'Adventurer/Attack2/adventurer-attack2-05.png',
		],
		adventurerCrouchingAnim: [
			pathToAnimation + 'Adventurer/Crouch/adventurer-crouch-00.png',
			pathToAnimation + 'Adventurer/Crouch/adventurer-crouch-01.png',
			pathToAnimation + 'Adventurer/Crouch/adventurer-crouch-02.png',
			pathToAnimation + 'Adventurer/Crouch/adventurer-crouch-03.png',
		],
		adventurerTakingPotionAnim: [
			pathToAnimation + 'Adventurer/Items/adventurer-items-00.png',
			pathToAnimation + 'Adventurer/Items/adventurer-items-01.png',
			pathToAnimation + 'Adventurer/Items/adventurer-items-02.png',
		],
	},

	warriorLoader: {
		warriorRunningAnim: [
			pathToAnimation + 'Warrior/Animations/Run/Run__000.png',
			pathToAnimation + 'Warrior/Animations/Run/Run__001.png',
			pathToAnimation + 'Warrior/Animations/Run/Run__002.png',
			pathToAnimation + 'Warrior/Animations/Run/Run__003.png',
			pathToAnimation + 'Warrior/Animations/Run/Run__004.png',
			pathToAnimation + 'Warrior/Animations/Run/Run__005.png',
			pathToAnimation + 'Warrior/Animations/Run/Run__006.png',
			pathToAnimation + 'Warrior/Animations/Run/Run__007.png',
			pathToAnimation + 'Warrior/Animations/Run/Run__008.png',
			pathToAnimation + 'Warrior/Animations/Run/Run__009.png',
			pathToAnimation + 'Warrior/Animations/Run/Run__010.png',
			pathToAnimation + 'Warrior/Animations/Run/Run__011.png',
			pathToAnimation + 'Warrior/Animations/Run/Run__012.png',
		],
		warriorJumpingAnim: [
			pathToAnimation + 'Warrior/Animations/Jump/Jump__000.png',
			pathToAnimation + 'Warrior/Animations/Jump/Jump__001.png',
			pathToAnimation + 'Warrior/Animations/Jump/Jump__002.png',
		],
		warriorIdlingAnim: [
			pathToAnimation + 'Warrior/Animations/Idle/Idle__000.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__001.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__002.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__003.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__004.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__005.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__006.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__007.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__008.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__009.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__010.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__011.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__012.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__013.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__014.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__015.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__016.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__017.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__018.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__019.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__020.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__021.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__022.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__023.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__024.png',
			pathToAnimation + 'Warrior/Animations/Idle/Idle__025.png',
		],
		warriorDyingAnim: [
			pathToAnimation + 'Warrior/Animations/Die/Die__000.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__001.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__002.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__003.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__004.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__005.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__006.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__007.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__008.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__009.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__010.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__011.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__012.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__013.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__014.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__015.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__016.png',
			pathToAnimation + 'Warrior/Animations/Die/Die__017.png',
		],
		warriorAttackingAnim: [
			pathToAnimation + 'Warrior/Animations/Attack/Attack__000.png',
			pathToAnimation + 'Warrior/Animations/Attack/Attack__001.png',
			pathToAnimation + 'Warrior/Animations/Attack/Attack__002.png',
			pathToAnimation + 'Warrior/Animations/Attack/Attack__003.png',
			pathToAnimation + 'Warrior/Animations/Attack/Attack__004.png',
			pathToAnimation + 'Warrior/Animations/Attack/Attack__005.png',
			pathToAnimation + 'Warrior/Animations/Attack/Attack__006.png',
			pathToAnimation + 'Warrior/Animations/Attack/Attack__007.png',
			pathToAnimation + 'Warrior/Animations/Attack/Attack__008.png',
			pathToAnimation + 'Warrior/Animations/Attack/Attack__009.png',
			pathToAnimation + 'Warrior/Animations/Attack/Attack__010.png',
		],
		warriorAttacking2Anim: [
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__000.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__001.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__002.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__003.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__004.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__005.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__006.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__007.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__008.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__009.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__010.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__011.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__012.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__013.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__014.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__015.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__016.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__017.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__018.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__019.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__020.png',
			pathToAnimation + 'Warrior/Animations/Attack 2/Attack2__021.png',
		],
	},
	treasureChestLoader: {
		treasureChestOpeningAnim: [
			pathToAnimation +
				'objects/treasure_chest/opening/treasure_chest_opening_00.png',
			pathToAnimation +
				'objects/treasure_chest/opening/treasure_chest_opening_01.png',
			pathToAnimation +
				'objects/treasure_chest/opening/treasure_chest_opening_02.png',
		],
		treasureChestOpenedAnim: [
			pathToAnimation +
				'objects/treasure_chest/opened/treasure_chest_opened_00.png',
			pathToAnimation +
				'objects/treasure_chest/opened/treasure_chest_opened_01.png',
			pathToAnimation +
				'objects/treasure_chest/opened/treasure_chest_opened_02.png',
		],
		treasureChestClosed:
			pathToAnimation +
			'objects/treasure_chest/opening/treasure_chest_opening_00.png',
	},
};
export default loaders;
