console.log("Hello world")

// Tipo de datos

// Tipo: Number
// Explicito
let phone: number
phone = 1
// phone = 'holas'  // Error

// Inferido
let phoneNumber = 2342343
// phoneNumber = true // error 

let hex: number = 0xf00d
let binary: number = 0b101010
let octal: number = 0o12423


// Tipo: Boolean
// Explicito
let isPro: boolean
isPro = true

// Inferido
let isUserPro = true


// Tipo: String
let username: String = 'ricardocuan'
username = 'riki'

// Tipo: Template String
let userInfo: String = `
  User Info:
  username: ${username}
  firstName: ${username}
  phone: ${phone}
  isPro: ${isPro}
`

