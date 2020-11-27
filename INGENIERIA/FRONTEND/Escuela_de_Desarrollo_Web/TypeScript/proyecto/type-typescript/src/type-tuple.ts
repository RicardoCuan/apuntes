export {}

// [1, 'user']
let user: [number, string]
user = [1, 'Ricardo Cuan']

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean]
userInfo = [2, 'ricardo', true]

// Arreglo de Tuplas
let array1: [number, string][] = []
array1.push([1, 'ricardocuan'])
array1.push([2, 'ricardo'])
array1.push([3, 'asdasd'])

// Uso de funciones de array
// asdasd -> cuan

array1[2][1] = 'cuan'

console.log('array1[2][1]', array1[2][1])