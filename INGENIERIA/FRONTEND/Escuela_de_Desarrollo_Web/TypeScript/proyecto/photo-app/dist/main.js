"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_orientation_1 = require("./photo-orientation");
const album_1 = require("./album");
const picture_1 = require("./picture");
const user_1 = require("./user");
const user = new user_1.User(1, 'riki', 'ricardo', true);
const album = new album_1.Album(10, 'Album de fotos');
const picture = new picture_1.Picture(1, 'Typescript course', '2020/10', photo_orientation_1.PhotoOrientation.Landscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
user.removeAlbum(album);
console.log('user', user);
