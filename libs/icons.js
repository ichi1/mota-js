function icons() {

}

icons.prototype.init = function () {
    this.icons = {
        'hero': {
            'down': {'loc': 0, 'stop': 0, 'leftFoot': 1, 'rightFoot': 3},
            'left': {'loc': 1, 'stop': 0, 'leftFoot': 1, 'rightFoot': 3},
            'right': {'loc': 2, 'stop': 0, 'leftFoot': 1, 'rightFoot': 3},
            'up': {'loc': 3, 'stop': 0, 'leftFoot': 1, 'rightFoot': 3}
        },
        'terrains': {
            'ground': 0,
            'yellowWall': 1,
            'whiteWall': 2,
            'blueWall': 3,
            'star': 4,
            'lava': 5,
            'ice': 6,
            'downFloor': 7,
            'upFloor': 8,
            'yellowDoor': 9,
            'blueDoor': 10,
            'redDoor': 11,
            'greenDoor': 12,
            'specialDoor': 13,
            'steelDoor': 14,
            'blueShop-left': 15,
            'blueShop-right': 16,
            'pinkShop-left': 17,
            'pinkShop-right': 18,
            'arrowUp': 19,
            'arrowDown': 20,
            'arrowLeft': 21,
            'arrowRight': 22,
            'light': 23,
            'darkLight': 24
        },
        'animates': {
            'star': 0,
            'lava': 1,
            'waterWall': 2,
            'yellowDoor': 3,
            'blueDoor': 4,
            'redDoor': 5,
            'greenDoor': 6,
            'specialDoor': 7,
            'blueWallDoor': 8,
            'yellowWallDoor': 9,
            'whiteWallDoor': 10,
            'steelDoor': 11,
            'lavaDoor': 12,
            'grayLavaDoor': 13,
            'starDoor': 14,
            'mockBlueWallDoor': 15,
            'mockYellowWallDoor': 16,
            'mockWhiteWallDoor': 17,
            'iceYellowWallDoor': 18,
            'starPortal': 19,
            'exclamation': 20,
            'portal': 21,
            'switch': 22,
            'lavaNet': 23,
            'poisonNet': 24,
            'weakNet': 25,
            'curseNet': 26,
            'downPortal': 27,
            'leftPortal': 28,
            'rightPortal': 29,
            'upPortal': 30,
            'water': 31,
        },
        'npcs': {
            'man': 0,
            'woman': 1,
            'thief': 2,
            'fairy': 3,
            'magician': 4,
            'womanMagician': 5,
            'oldMan': 6,
            'child': 7,
            'wood': 8,
            'pinkShop': 9,
            'blueShop': 10,
            'princess': 11
        },
        'enemys': {
            'greenSlime': 0,
            'redSlime': 1,
            'blackSlime': 2,
            'slimelord': 3,
            'bat': 4,
            'bigBat': 5,
            'redBat': 6,
            'vampire': 7,
            'skeleton': 8,
            'skeletonSoilder': 9,
            'skeletonCaptain': 10,
            'ghostSkeleton': 11,
            'zombie': 12,
            'zombieKnight': 13,
            'rock': 14,
            'slimeMan': 15,
            'bluePriest': 16,
            'redPriest': 17,
            'brownWizard': 18,
            'redWizard': 19,
            'yellowGuard': 20,
            'blueGuard': 21,
            'redGuard': 22,
            'swordsman': 23,
            'soldier': 24,
            'yellowKnight': 25,
            'redKnight': 26,
            'darkKnight': 27,
            'blackKing': 28,
            'yellowKing': 29,
            'greenKing': 30,
            'blueKnight': 31,
            'goldSlime': 32,
            'poisonSkeleton': 33,
            'poisonBat': 34,
            'steelRock': 35,
            'skeletonPriest': 36,
            'skeletonKing': 37,
            'skeletonWizard': 38,
            'redSkeletonCaption': 39,
            'badHero': 40,
            'demon': 41,
            'demonPriest': 42,
            'goldHornSlime': 43,
            'redKing': 44,
            'whiteKing': 45,
            'blackMagician': 46,
            'silverSlime': 47,
            'swordEmperor': 48,
            'whiteHornSlime': 49,
            'badPrincess': 50,
            'badFairy': 51,
            'grayPriest': 52,
            'redSwordsman': 53,
            'whiteGhost': 54,
            'poisonZombie': 55,
            'magicDragon': 56,
            'octopus': 57,
            'darkFairy': 58,
            'greenKnight': 59,
        },
        'items': {
            'yellowKey': 0,
            'blueKey': 1,
            'redKey': 2,
            'greenKey': 3,
            'steelKey': 4,
            'bigKey': 6,
            'redJewel': 16,
            'blueJewel': 17,
            'greenJewel': 18,
            'yellowJewel': 19,
            'redPotion': 20,
            'bluePotion': 21,
            'greenPotion': 22,
            'yellowPotion': 23,
            'sword1': 50,
            'sword2': 51,
            'sword3': 52,
            'sword4': 53,
            'sword5': 54,
            'shield1': 55,
            'shield2': 56,
            'shield3': 57,
            'shield4': 58,
            'shield5': 59,
            'book': 9,
            'fly': 12,
            'pickaxe': 45,
            'icePickaxe': 44,
            'bomb': 43,
            'centerFly': 13,
            'upFly': 15,
            'downFly': 14,
            'coin': 11,
            'snow': 41,
            'cross': 40,
            'superPotion': 29,
            'earthquake': 8,
            'poisonWine': 24,
            'weakWine': 25,
            'curseWine': 27,
            'superWine': 28,
            'knife': 42,
            'moneyPocket': 46,
            'shoes': 47,
            'hammer': 48
        }
    }
}

icons.prototype.getIcons = function () {
    return this.icons;
}

main.instance.icons = new icons();