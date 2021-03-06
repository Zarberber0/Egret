var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Room = (function (_super) {
    __extends(Room, _super);
    function Room() {
        var _this = _super.call(this) || this;
        _this.CreateScene();
        _this.createBags();
        _this.backpackGrops = new eui.Group();
        _this.backpackGrops.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createBackpackTable, _this);
        _this.backpackGrops.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.clearBackpackTable, _this);
        return _this;
    }
    Room.prototype.CreateScene = function () {
        this.background = new egret.Bitmap();
        this.background.touchEnabled = true;
        this.background.texture = RES.getRes("back_mainIn_png");
        this.addChild(this.background);
        this.background.width = Data.getscreenWidth();
        this.background.height = Data.getscreenHeight();
        this.iconTrip = new egret.Bitmap();
        this.iconTrip.texture = RES.getRes("Z11_png");
        this.addChild(this.iconTrip);
        this.iconTrip.x += 15;
        this.iconTrip.y += Data.getscreenHeight() - this.iconTrip.height - 10;
        this.iconTrip.touchEnabled = true;
        this.iconTrip.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchTrip, this);
        this.myfrog = new Frog();
        this.addChild(this.myfrog);
    };
    Room.prototype.TouchTrip = function () {
        if (!this.getChildByName("Trip")) {
            this.addChild(this.roomEUI);
        }
        else {
            this.removeChild(this.roomEUI);
        }
    };
    Room.prototype.createBags = function () {
        this.roomEUI = new RoomEUI();
        this.roomEUI.name = "Trip";
        this.roomEUI.buttonXL.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchTrip, this);
        this.roomEUI.buttonXR.addEventListener(egret.TouchEvent.TOUCH_END, this.TouchTrip, this);
        this.roomEUI.image.addEventListener(egret.TouchEvent.TOUCH_END, this.openBackpack, this);
        this.roomEUI.image2.addEventListener(egret.TouchEvent.TOUCH_END, this.openBackpack, this);
        this.roomEUI.image3.addEventListener(egret.TouchEvent.TOUCH_END, this.openBackpack, this);
        this.roomEUI.image0.addEventListener(egret.TouchEvent.TOUCH_END, this.openBackpack1, this);
        this.roomEUI.image4.addEventListener(egret.TouchEvent.TOUCH_END, this.openBackpack1, this);
        this.roomEUI.image5.addEventListener(egret.TouchEvent.TOUCH_END, this.openBackpack1, this);
        this.roomEUI.image1.addEventListener(egret.TouchEvent.TOUCH_END, this.openBackpack2, this);
        this.roomEUI.image6.addEventListener(egret.TouchEvent.TOUCH_END, this.openBackpack2, this);
        this.roomEUI.image7.addEventListener(egret.TouchEvent.TOUCH_END, this.openBackpack2, this);
        this.backpack_EUI = new Backpack_EUI();
        this.backpack_EUI.name = "Backpack";
        this.backpack_EUI.buttonX.addEventListener(egret.TouchEvent.TOUCH_END, this.openBackpack, this);
    };
    Room.prototype.openBackpack = function (e) {
        if (!this.getChildByName("Backpack")) {
            var str = RES.getRes("PropsTable_txt");
            var strArray = str.split("\n");
            var strArray2 = [];
            for (var i = 0; i < strArray.length; i++) {
                strArray2[i] = strArray[i].split(",");
            }
            var temp = 0;
            for (var i = 1; i < strArray2.length; i++) {
                if (strArray2[i][1] != "Bento") {
                    Data.BackpackTable[strArray2[i][0]] = 0;
                }
            }
            this.addChild(this.backpack_EUI);
            this.addChild(this.backpackGrops);
            this.temp = e.currentTarget;
        }
        else {
            this.removeChild(this.backpack_EUI);
            this.removeChild(this.backpackGrops);
            Data.readShopTable();
            this.temp = null;
        }
    };
    Room.prototype.openBackpack1 = function (e) {
        if (!this.getChildByName("Backpack")) {
            var str = RES.getRes("PropsTable_txt");
            var strArray = str.split("\n");
            var strArray2 = [];
            for (var i = 0; i < strArray.length; i++) {
                strArray2[i] = strArray[i].split(",");
            }
            var temp = 0;
            for (var i = 1; i < strArray2.length; i++) {
                if (strArray2[i][1] != "Prop") {
                    Data.BackpackTable[strArray2[i][0]] = 0;
                }
            }
            this.addChild(this.backpack_EUI);
            this.addChild(this.backpackGrops);
            this.temp = e.currentTarget;
        }
        else {
            this.removeChild(this.backpack_EUI);
            this.removeChild(this.backpackGrops);
            Data.readShopTable();
            this.temp = null;
        }
    };
    Room.prototype.openBackpack2 = function (e) {
        if (!this.getChildByName("Backpack")) {
            var str = RES.getRes("PropsTable_txt");
            var strArray = str.split("\n");
            var strArray2 = [];
            for (var i = 0; i < strArray.length; i++) {
                strArray2[i] = strArray[i].split(",");
            }
            var temp = 0;
            for (var i = 1; i < strArray2.length; i++) {
                if (strArray2[i][1] != "LuckyCharm") {
                    Data.BackpackTable[strArray2[i][0]] = 0;
                }
            }
            this.addChild(this.backpack_EUI);
            this.addChild(this.backpackGrops);
            this.temp = e.currentTarget;
        }
        else {
            this.removeChild(this.backpack_EUI);
            this.removeChild(this.backpackGrops);
            //Data.readShopTable();
            this.temp = null;
        }
    };
    Room.prototype.createBackpackTable = function () {
        var index = 0;
        for (var i in Data.BackpackTable) {
            if (Data.BackpackTable[i] != 0) {
                var backpackTable = new BackpackTable();
                backpackTable.id = i;
                backpackTable.label2.text = Data.BackpackTable[i].toString();
                backpackTable.label0.text = Data.ShopTable[i][3];
                backpackTable.label1.text = Data.ShopTable[i][6];
                backpackTable.image2.source = Data.ShopTable[i][2];
                this.backpackGrops.addChild(backpackTable);
                backpackTable.x = Data.getscreenWidth() / 2 - backpackTable.width / 2;
                backpackTable.y += 400 + index * backpackTable.height;
                backpackTable.touchEnabled = true;
                backpackTable.addEventListener(egret.TouchEvent.TOUCH_END, this.equip, this);
                index++;
            }
        }
    };
    Room.prototype.clearBackpackTable = function () {
        if (this.backpackGrops.numChildren != 0) {
            this.backpackGrops.removeChildren();
        }
    };
    Room.prototype.equip = function (e) {
        this.temp.source = Data.ShopTable[e.currentTarget.id][2];
        if (this.temporaryKey == null) {
            this.temporaryKey = e.currentTarget.id;
        }
        else {
            Data.BackpackTable[this.temporaryKey] += 1;
            this.temporaryKey = e.currentTarget.id;
        }
        Data.BackpackTable[e.currentTarget.id] -= 1;
        Data.savebackpack();
        this.openBackpack(e);
    };
    return Room;
}(egret.Sprite));
__reflect(Room.prototype, "Room");
//# sourceMappingURL=Room.js.map