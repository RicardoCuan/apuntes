"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1, 'user']
var user;
user = [1, 'Ricardo Cuan'];
// Tuplas con varios valores
// id, username, isPro
var userInfo;
userInfo = [2, 'ricardo', true];
// Arreglo de Tuplas
var array1 = [];
array1.push([1, 'ricardocuan']);
array1.push([2, 'ricardo']);
array1.push([3, 'asdasd']);
// Uso de funciones de array
// asdasd -> cuan
array1[2][1] = 'cuan';
console.log('array1[2][1]', array1[2][1]);
