function maps() {}
maps.prototype.init = function() {}

maps.prototype.loadFloor = function (floorId, map, enables) {
    var floor = core.floors[floorId];
    var content = {};
    content['floorId'] = floor.floorId;
    content['name'] = floor.name;
    content['title'] = floor.title;
    content['canFlyTo'] = floor.canFlyTo;
    content['firstArrive'] = floor.firstArrive;
    if (!core.isset(map)) map=floor.map;
    var blocks = [];
    for (var i = 0; i < 13; i++) {
        for (var j = 0; j < 13; j++) {
            var block = this.getBlock(j, i, map[i][j]);
            this.addEvent(block,j,i,floor.events[j+","+i])
            if (core.isset(block.event)) blocks.push(block);
        }
    }
    // 事件处理
    content['blocks'] = blocks;
    return content;
}

maps.prototype.getBlock = function (x, y, id) {
    var enable=null;
    id = ""+id;
    if (id.length>2) {
        if (id.indexOf(":f")==id.length-2) {
            id = id.substring(0, id.length - 2);
            enable = false;
        }
        else if (id.indexOf(":t")==id.length-2) {
            id = id.substring(0, id.length - 2);
            enable = true;
        }
    }
    var tmp = {'x': x, 'y': y, 'id': id};
    if (enable!=null) tmp.enable = enable;

    // 0-9 地形
    if (id == 1) tmp.event = {'cls': 'terrains', 'id': 'yellowWall'}; // 黄墙
    if (id == 2) tmp.event = {'cls': 'terrains', 'id': 'whiteWall'}; // 白墙
    if (id == 3) tmp.event = {'cls': 'terrains', 'id': 'blueWall'}; // 白墙
    if (id == 4) tmp.event = {'cls': 'animates', 'id': 'star', 'noPass': true}; // 星空
    if (id == 5) tmp.event = {'cls': 'animates', 'id': 'lava', 'noPass': true}; // 岩浆
    if (id == 6) tmp.event = {'cls': 'terrains', 'id': 'ice'}; // 岩浆
    if (id == 7) tmp.event = {'cls': 'terrains', 'id': 'blueShop-left'}; // 蓝色商店左
    if (id == 8) tmp.event = {'cls': 'terrains', 'id': 'blueShop-right'}; // 蓝色商店右
    if (id == 9) tmp.event = {'cls': 'terrains', 'id': 'pinkShop-left'}; // 粉色商店左
    if (id == 10) tmp.event = {'cls': 'terrains', 'id': 'pinkShop-right'}; // 粉色商店左
    if (id == 11) tmp.event = {'cls': 'animates', 'id': 'lavaNet', 'noPass': false, 'trigger': 'passNet'}; // 血网
    if (id == 12) tmp.event = {'cls': 'animates', 'id': 'poisonNet', 'noPass': false, 'trigger': 'passNet'}; // 毒网
    if (id == 13) tmp.event = {'cls': 'animates', 'id': 'weakNet', 'noPass': false, 'trigger': 'passNet'}; // 衰网
    if (id == 14) tmp.event = {'cls': 'animates', 'id': 'curseNet', 'noPass': false, 'trigger': 'passNet'}; // 咒网

    // 21-80 物品
    if (id == 21) tmp.event = {'cls': 'items', 'id': 'yellowKey'}; // 黄钥匙
    if (id == 22) tmp.event = {'cls': 'items', 'id': 'blueKey'}; // 蓝钥匙
    if (id == 23) tmp.event = {'cls': 'items', 'id': 'redKey'}; // 红钥匙
    if (id == 24) tmp.event = {'cls': 'items', 'id': 'greenKey'}; // 绿钥匙
    if (id == 25) tmp.event = {'cls': 'items', 'id': 'steelKey'}; // 铁门钥匙
    if (id == 26) tmp.event = {'cls': 'items', 'id': 'bigKey'}; // 大黄门钥匙（钥匙盒）
    if (id == 27) tmp.event = {'cls': 'items', 'id': 'redJewel'}; // 红宝石
    if (id == 28) tmp.event = {'cls': 'items', 'id': 'blueJewel'}; // 蓝宝石
    if (id == 29) tmp.event = {'cls': 'items', 'id': 'greenJewel'}; // 绿宝石
    if (id == 30) tmp.event = {'cls': 'items', 'id': 'yellowJewel'}; // 黄宝石
    if (id == 31) tmp.event = {'cls': 'items', 'id': 'redPotion'}; // 红血瓶
    if (id == 32) tmp.event = {'cls': 'items', 'id': 'bluePotion'}; // 蓝血瓶
    if (id == 33) tmp.event = {'cls': 'items', 'id': 'greenPotion'}; // 绿血瓶
    if (id == 34) tmp.event = {'cls': 'items', 'id': 'yellowPotion'}; // 黄血瓶
    if (id == 35) tmp.event = {'cls': 'items', 'id': 'sword1'}; // 铁剑
    if (id == 36) tmp.event = {'cls': 'items', 'id': 'shield1'}; // 铁盾
    if (id == 37) tmp.event = {'cls': 'items', 'id': 'sword2'}; // 银剑
    if (id == 38) tmp.event = {'cls': 'items', 'id': 'shield2'}; // 银盾
    if (id == 39) tmp.event = {'cls': 'items', 'id': 'sword3'}; // 骑士剑
    if (id == 40) tmp.event = {'cls': 'items', 'id': 'shield3'}; // 骑士盾
    if (id == 41) tmp.event = {'cls': 'items', 'id': 'sword4'}; // 圣剑
    if (id == 42) tmp.event = {'cls': 'items', 'id': 'shield4'}; // 圣盾
    if (id == 43) tmp.event = {'cls': 'items', 'id': 'sword5'}; // 神圣剑
    if (id == 44) tmp.event = {'cls': 'items', 'id': 'shield5'}; // 神圣盾
    if (id == 45) tmp.event = {'cls': 'items', 'id': 'book'}; // 怪物手册
    if (id == 46) tmp.event = {'cls': 'items', 'id': 'fly'}; // 楼层传送器
    if (id == 47) tmp.event = {'cls': 'items', 'id': 'pickaxe'}; // 破墙镐
    if (id == 48) tmp.event = {'cls': 'items', 'id': 'icePickaxe'}; // 破冰镐
    if (id == 49) tmp.event = {'cls': 'items', 'id': 'bomb'}; // 炸弹
    if (id == 50) tmp.event = {'cls': 'items', 'id': 'centerFly'}; // 中心对称
    if (id == 51) tmp.event = {'cls': 'items', 'id': 'upFly'}; // 上楼器
    if (id == 52) tmp.event = {'cls': 'items', 'id': 'downFly'}; // 下楼器
    if (id == 53) tmp.event = {'cls': 'items', 'id': 'coin'}; // 幸运金币
    if (id == 54) tmp.event = {'cls': 'items', 'id': 'snow'}; // 冰冻徽章
    if (id == 55) tmp.event = {'cls': 'items', 'id': 'cross'}; // 十字架
    if (id == 56) tmp.event = {'cls': 'items', 'id': 'superPotion'}; // 圣水
    if (id == 57) tmp.event = {'cls': 'items', 'id': 'earthquake'} // 地震卷轴
    if (id == 58) tmp.event = {'cls': 'items', 'id': 'poisonWine'} // 解毒药水
    if (id == 59) tmp.event = {'cls': 'items', 'id': 'weakWine'} // 解衰药水
    if (id == 60) tmp.event = {'cls': 'items', 'id': 'curseWine'} // 解咒药水
    if (id == 61) tmp.event = {'cls': 'items', 'id': 'superWine'} // 万能药水
    if (id == 62) tmp.event = {'cls': 'items', 'id': 'knife'} // 屠龙匕首
    if (id == 63) tmp.event = {'cls': 'items', 'id': 'moneyPocket'} // 金钱袋
    if (id == 64) tmp.event = {'cls': 'items', 'id': 'shoes'} // 绿鞋
    if (id == 65) tmp.event = {'cls': 'items', 'id': 'hammer'} // 圣锤

    // 81-100 门
    if (id == 81) tmp.event = {'cls': 'terrains', 'id': 'yellowDoor', 'trigger': 'openDoor'}; // 黄门
    if (id == 82) tmp.event = {'cls': 'terrains', 'id': 'blueDoor', 'trigger': 'openDoor'}; // 蓝门
    if (id == 83) tmp.event = {'cls': 'terrains', 'id': 'redDoor', 'trigger': 'openDoor'}; // 红门
    if (id == 84) tmp.event = {'cls': 'terrains', 'id': 'greenDoor', 'trigger': 'openDoor'}; // 绿门
    if (id == 85) tmp.event = {'cls': 'terrains', 'id': 'specialDoor', 'trigger': 'openDoor'}; // 机关门左
    if (id == 86) tmp.event = {'cls': 'terrains', 'id': 'steelDoor', 'trigger': 'openDoor'}; // 铁门
    if (id == 87) tmp.event = {'cls': 'terrains', 'id': 'upFloor', 'noPass': false}; // 上楼梯
    if (id == 88) tmp.event = {'cls': 'terrains', 'id': 'downFloor', 'noPass': false}; // 下楼梯
    if (id == 89) tmp.event = {'cls': 'animates', 'id': 'portal', 'noPass': false}; // 传送门
    if (id == 90) tmp.event = {'cls': 'animates', 'id': 'starPortal', 'noPass': false}; // 星空传送门
    if (id == 91) tmp.event = {'cls': 'animates', 'id': 'upPortal', 'noPass': false}; // 上箭头
    if (id == 92) tmp.event = {'cls': 'animates', 'id': 'leftPortal', 'noPass': false}; // 左箭头
    if (id == 93) tmp.event = {'cls': 'animates', 'id': 'downPortal', 'noPass': false}; // 下箭头
    if (id == 94) tmp.event = {'cls': 'animates', 'id': 'rightPortal', 'noPass': false}; // 右箭头


    // 121-150 NPC
    if (id == 121) tmp.event = {'cls': 'npcs', 'id': 'man'};
    if (id == 122) tmp.event = {'cls': 'npcs', 'id': 'woman'};
    if (id == 123) tmp.event = {'cls': 'npcs', 'id': 'thief'};
    if (id == 124) tmp.event = {'cls': 'npcs', 'id': 'fairy'};
    if (id == 125) tmp.event = {'cls': 'npcs', 'id': 'magician'};
    if (id == 126) tmp.event = {'cls': 'npcs', 'id': 'womanMagician'};
    if (id == 127) tmp.event = {'cls': 'npcs', 'id': 'oldMan'};
    if (id == 128) tmp.event = {'cls': 'npcs', 'id': 'child'};
    if (id == 129) tmp.event = {'cls': 'npcs', 'id': 'wood'};
    if (id == 130) tmp.event = {'cls': 'npcs', 'id': 'pinkShop'};
    if (id == 131) tmp.event = {'cls': 'npcs', 'id': 'blueShop'};
    if (id == 132) tmp.event = {'cls': 'npcs', 'id': 'princess'};


    // 201-300 怪物
    if (id == 201) tmp.event = {'cls': 'enemys', 'id': 'greenSlime'};
    if (id == 202) tmp.event = {'cls': 'enemys', 'id': 'redSlime'};
    if (id == 203) tmp.event = {'cls': 'enemys', 'id': 'blackSlime'};
    if (id == 204) tmp.event = {'cls': 'enemys', 'id': 'slimelord'};
    if (id == 205) tmp.event = {'cls': 'enemys', 'id': 'bat'};
    if (id == 206) tmp.event = {'cls': 'enemys', 'id': 'bigBat'};
    if (id == 207) tmp.event = {'cls': 'enemys', 'id': 'redBat'};
    if (id == 208) tmp.event = {'cls': 'enemys', 'id': 'vampire'};
    if (id == 209) tmp.event = {'cls': 'enemys', 'id': 'skeleton'};
    if (id == 210) tmp.event = {'cls': 'enemys', 'id': 'skeletonSoilder'};
    if (id == 211) tmp.event = {'cls': 'enemys', 'id': 'skeletonCaptain'};
    if (id == 212) tmp.event = {'cls': 'enemys', 'id': 'ghostSkeleton'};
    if (id == 213) tmp.event = {'cls': 'enemys', 'id': 'zombie'};
    if (id == 214) tmp.event = {'cls': 'enemys', 'id': 'zombieKnight'};
    if (id == 215) tmp.event = {'cls': 'enemys', 'id': 'rock'};
    if (id == 216) tmp.event = {'cls': 'enemys', 'id': 'slimeMan'};
    if (id == 217) tmp.event = {'cls': 'enemys', 'id': 'bluePriest'};
    if (id == 218) tmp.event = {'cls': 'enemys', 'id': 'redPriest'};
    if (id == 219) tmp.event = {'cls': 'enemys', 'id': 'brownWizard'};
    if (id == 220) tmp.event = {'cls': 'enemys', 'id': 'redWizard'};
    if (id == 221) tmp.event = {'cls': 'enemys', 'id': 'yellowGuard'};
    if (id == 222) tmp.event = {'cls': 'enemys', 'id': 'blueGuard'};
    if (id == 223) tmp.event = {'cls': 'enemys', 'id': 'redGuard'};
    if (id == 224) tmp.event = {'cls': 'enemys', 'id': 'swordsman'};
    if (id == 225) tmp.event = {'cls': 'enemys', 'id': 'soldier'};
    if (id == 226) tmp.event = {'cls': 'enemys', 'id': 'yellowKnight'};
    if (id == 227) tmp.event = {'cls': 'enemys', 'id': 'redKnight'};
    if (id == 228) tmp.event = {'cls': 'enemys', 'id': 'darkKnight'};
    if (id == 229) tmp.event = {'cls': 'enemys', 'id': 'blackKing'};
    if (id == 230) tmp.event = {'cls': 'enemys', 'id': 'yellowKing'};
    if (id == 231) tmp.event = {'cls': 'enemys', 'id': 'greenKing'};
    if (id == 232) tmp.event = {'cls': 'enemys', 'id': 'blueKnight'};
    if (id == 233) tmp.event = {'cls': 'enemys', 'id': 'goldSlime'};
    if (id == 234) tmp.event = {'cls': 'enemys', 'id': 'poisonSkeleton'};
    if (id == 235) tmp.event = {'cls': 'enemys', 'id': 'poisonBat'};
    if (id == 236) tmp.event = {'cls': 'enemys', 'id': 'steelRock'};
    if (id == 237) tmp.event = {'cls': 'enemys', 'id': 'skeletonPriest'};
    if (id == 238) tmp.event = {'cls': 'enemys', 'id': 'skeletonKing'};
    if (id == 239) tmp.event = {'cls': 'enemys', 'id': 'skeletonWizard'};
    if (id == 240) tmp.event = {'cls': 'enemys', 'id': 'redSkeletonCaption'};
    if (id == 241) tmp.event = {'cls': 'enemys', 'id': 'badHero'};
    if (id == 242) tmp.event = {'cls': 'enemys', 'id': 'demon'};
    if (id == 243) tmp.event = {'cls': 'enemys', 'id': 'demonPriest'};
    if (id == 244) tmp.event = {'cls': 'enemys', 'id': 'goldHornSlime'};
    if (id == 245) tmp.event = {'cls': 'enemys', 'id': 'redKing'};
    if (id == 246) tmp.event = {'cls': 'enemys', 'id': 'whiteKing'};
    if (id == 247) tmp.event = {'cls': 'enemys', 'id': 'blackMagician'};
    if (id == 248) tmp.event = {'cls': 'enemys', 'id': 'silverSlime'};
    if (id == 249) tmp.event = {'cls': 'enemys', 'id': 'swordEmperor'};
    if (id == 250) tmp.event = {'cls': 'enemys', 'id': 'whiteHornSlime'};
    if (id == 251) tmp.event = {'cls': 'enemys', 'id': 'badPrincess'};
    if (id == 252) tmp.event = {'cls': 'enemys', 'id': 'badFairy'};
    if (id == 253) tmp.event = {'cls': 'enemys', 'id': 'grayPriest'};
    if (id == 254) tmp.event = {'cls': 'enemys', 'id': 'redSwordsman'};
    if (id == 255) tmp.event = {'cls': 'enemys', 'id': 'whiteGhost'};
    if (id == 256) tmp.event = {'cls': 'enemys', 'id': 'poisonZombie'};
    if (id == 257) tmp.event = {'cls': 'enemys', 'id': 'magicDragon'};
    if (id == 258) tmp.event = {'cls': 'enemys', 'id': 'octopus'};
    if (id == 259) tmp.event = {'cls': 'enemys', 'id': 'fairy'};
    if (id == 260) tmp.event = {'cls': 'enemys', 'id': 'greenKnight'};

    return tmp;
}

maps.prototype.addEvent = function (block, x, y, event) {
    if (!core.isset(event)) return;
    if (!core.isset(block.event)) { // 本身是空地？
        block.event = {'cls': 'terrains', 'id': 'ground', 'noPass': false};
    }
    // event是字符串或数组？
    if (typeof event == "string") {
        event = {"data": [event]};
    }
    else if (event instanceof Array) {
        event = {"data": event};
    }

    // 覆盖enable
    if (!core.isset(block.event.enable) && core.isset(event.enable)) {
        block.enable=event.enable;
    }
    // 覆盖trigger
    if (!core.isset(block.event.trigger)) {
        if (core.isset(event.trigger)) block.event.trigger=event.trigger;
        else block.event.trigger='action';
    }
    // 覆盖data
    block.event.data = event.data;
}

maps.prototype.initMaps = function (floorIds) {
    var maps = {};
    for (var i=0;i<floorIds.length;i++) {
        var floorId = floorIds[i];
        maps[floorId] = this.loadFloor(floorId);
    }
    return this.fill(maps);
}

maps.prototype.fill = function (maps) {
    if (maps.floorId == undefined) {
        for (var floorId in maps) {
            this.fill(maps[floorId]);
        }
        return maps;
    }
    var blocks = maps['blocks'];
    blocks.forEach(function (t) {
        if (t.event == undefined) return;
        if (t.event.cls == 'enemys' && t.event.trigger==undefined) {
            t.event.trigger = 'battle';
        }
        if (t.event.cls == 'items' && t.event.trigger==undefined) {
            t.event.trigger = 'getItem';
        }
        if (t.event.noPass == undefined) {
            if (t.event.cls=='enemys' || t.event.cls=='terrains' || t.event.cls=='npcs') {
                t.event.noPass = true;
            }
        }
        if (t.event.animate == undefined) {
            if (t.event.cls=='enemys' || t.event.cls=='npcs') {
                t.event.animate = 2;
            }
            if (t.event.cls == 'animates') {
                t.event.animate = 4;
            }
        }
    });
    return maps;
}

maps.prototype.save = function(maps, floorId) {
    if (floorId==undefined || floorId==null) {
        var map = [];
        for (var id in maps) {
            // map[id] = this.save(maps, id);
            map.push(this.save(maps, id));
        }
        return map;
    }
    var thisFloor = maps[floorId];
    var floor = {};
    floor.floorId = thisFloor.floorId;
    floor.name = thisFloor.name;
    floor.title = thisFloor.title;
    floor.canFlyTo = thisFloor.canFlyTo;

    var blocks = [];
    for (var x=0;x<13;x++) {
        blocks[x]=[];
        for (var y=0;y<13;y++) {
            blocks[x].push(0);
        }
    }
    thisFloor.blocks.forEach(function (block) {
        blocks[block.x][block.y] = block.id;
    });
    floor.blocks = blocks;
    return floor;
}

maps.prototype.load = function (data, floorId) {
    if (floorId == undefined) {
        var map = [];
        for (var id in data) {
            map[data[id].floorId] = this.load(data, data[id].floorId);
        }
        return map;
    }
    var x = null;
    for (var id in data) {
        if (data[id].floorId == floorId) {
            x = data[id];
            break;
        }
    }
    if (x==null) return {};

    var content = {};
    content['floorId'] = x.floorId;
    content['name'] = x.name;
    content['title'] = x.title;
    content['canFlyTo'] = x.canFlyTo;
    var blocks = [];
    for (var i = 0; i < 13; i++) {
        for (var j = 0; j < 13; j++) {
            var id = x.blocks[i][j];
            var block = this.getBlock(x.floorId, x.name, i, j, id);
            if (block!=null) blocks.push(block);
        }
    }
    content['blocks'] = blocks;
    return this.updateNoPass(content);
}

main.instance.maps = new maps();