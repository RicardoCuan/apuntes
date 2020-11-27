"use strict";
// Corchetes []
// Tipo explicito
var users;
users = ['ricardocuan', 'ricardo', 'cuan'];
// user = [1, true, 'asasd'] // Error
// Tipo Inferido
var otherusers = ['ricardocuan', 'ricardo', 'cuan'];
// Array<TIPO>
var pictureTitles;
pictureTitles = ['favorite sunset', 'vacation time', 'landscape'];
// Accediendo a los valores en una Array
console.log('first user', users[0]);
// Accediendo a los valores en un Array
console.log('first user', users[0]);
// Propiedades en Array
console.log('users.length', users.length);
// Uso de funciones en Arrays
users.push('otro user');
users.sort();
console.log('users', users);
