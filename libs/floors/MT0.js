function MT0() {}

MT0.prototype.init = function() {
    this.data = {
        'floorId': 'MT0', // 楼层唯一标识符
        'title': "样板层", // 楼层中文名；转换楼层时显示
        'name': 0, // 显示在状态栏中的楼层名称
        "canFlyTo": true, // 该楼能否被飞行器飞到（不能的话在该楼也不允许使用）
        "map": [ // 地图数据，需要是13x13，建议使用地图生成器来生成

        ],
        "firstArrive": [ // 第一次到该楼层触发的事件

        ],
        "events": [ // 该楼的所有可能事件列表

        ],
        "afterOpenDoor": [ // 开完门后可能触发的事件列表

        ],
        "afterBattle": [ // 战斗后可能触发的事件列表

        ],
        "afterGetItem": [ // 获得道具后可能触发的事件列表

        ]
    };
}

main.floors.MT0 = new MT0();
