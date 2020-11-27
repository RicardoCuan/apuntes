// crear una fotografia
// function createPicture(title, date, size) {
  // title no se puede usar funciones
// }

type SquareSize = '100x100' | '500x500' | '1000x1000'

// Usamos TS, definimos tipos para parametros
// function createPicture(title: string, date: string, size: SquareSize) {
//   // Se crea la Fotografia
//   console.log('create Picture using', title, date, size)
// }

// createPicture('My Birthday', '2020-10-09', '100x100')


// Parametros opcionales
function createPicture(title?: string, date?: string, size?: SquareSize) {
  // Se crea la Fotografia
  console.log('create Picture using', title, date, size)
}

createPicture('My Birthday', '2020-10-09', '100x100')


// flat array function
let createPic = (title: string, date: string, size: SquareSize): object => {
  // return {
    //   title: title,
    //   date: date,
    //   size: size 
    // }
    return { title, date, size }
  }

createPic('My Birthday', '2020-10-09', '100x100')



// Tipo de retorno con TypeScript

function handleError(code: number, message: string): never | string {
  // Procesamiento del codigo, mensaje
  if(message === 'error') {
    throw new Error(`${message}. Code Error: ${code}`)
  } else {
    return 'An error has ocurred'
  }
}

try {
  let result = handleError(200, 'ok')
  console.log(result)
  result = handleError(200, 'ERROR')
  console.log(result)
} catch (error) {
  
}