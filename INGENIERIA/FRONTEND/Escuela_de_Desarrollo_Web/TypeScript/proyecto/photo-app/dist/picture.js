"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const item_1 = require("./item");
class Picture extends item_1.Item {
    constructor(id, title, date, orientation) {
        super(id, title);
        this.date = date;
        this.orientation = orientation;
    }
    toString() {
        return ``;
    }
}
exports.Picture = Picture;
