export {}
// <tipo> // Angle Bracket

let username: any
username = 'RicardoCuan'

// tenemos una cadena, TS confia en mi
let message: string = (<string>username).length > 5 ?
  `Welcome ${username}` : 
  `Username is too short`

console.log('message', message)

let usernameWithId: any = 'ricardocuan'

// Como obtener el username?

username = (<string>username).substring(0, 7)
console.log('Username Only', username)



// Sintaxis as
message = (username as string).length > 5 ?
  `Welcome ${username}` : 
  `Username is too short`

console.log('message', message)


