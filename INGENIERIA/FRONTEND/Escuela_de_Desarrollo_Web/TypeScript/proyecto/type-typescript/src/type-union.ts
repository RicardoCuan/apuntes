export {}
// 10, '10'
// let idUser: number | string
// idUser = 10
// idUser = '10'

// // Buscar username dado un ID

// function getUsernameById(id: number | string) {
//   // Logica de negocio, find the user
//   return 'RicardoCuan'
// }

// getUsernameById(20)
// getUsernameById('20')


// Alias de tipos
type IdUser = number | string
type UserName = string

let idUser: IdUser
idUser = 10
idUser = '10'

// Buscar username dado un ID

function getUsernameById(id: IdUser): UserName {
  // Logica de negocio, find the user
  return 'RicardoCuan'
}

getUsernameById(20)
getUsernameById('20')



// Tipos Literales
// 100x100, 500x500, 1000x10000
type SquareSize = '100x100' | '500x500' | '1000x1000'
// let smallPicture: SquareSize = '200x200'
let smallPicture: SquareSize = '100x100'
let mediumPicture: SquareSize = '500x500'
