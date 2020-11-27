// export {}

// enum PhotoOrientation {
//   Landscape,
//   Portrait,
//   Square,
//   Panorama
// }



// class Picture {
//   #id: number
//   #title: string
//   #orientation: PhotoOrientation

//   constructor(
//     id: number,
//     title: string,
//     orientation: PhotoOrientation
//   ) {
//     this.#id = id
//     this.#title = title
//     this.#orientation = orientation
//   }

//   // Comportamiento
//   toString() {
//     return `[id: ${this.#id}, title: ${this.#title}, orientation: ${this.#orientation}]`
//   }
// }



// class Album {
//   #id: number
//   #title: string
//   #pictures: Picture[]

//   constructor(
//     id: number,
//     title: string
//   ) {
//     this.#id = id
//     this.#title = title
//     this.#pictures = []
//   }
  
//   addPicture(picture: Picture) {
//     this.#pictures.push(picture)
//   }

//   print() {
//     return `${this.#id}, ${this.#title}`
//   }
// }


// const album: Album = new Album(1, 'Personal Picture')
// const picture: Picture = new Picture(1, 'Platzi Session', PhotoOrientation.Panorama)
// album.addPicture(picture)

// console.log('album', album)


// // Accediendo a los miembros públicos 
// // picture.id = 100 // ERROR ya que es privado
// // picture.title = "Another title" // ERROR ya que es privado
// // album.title = 'Personal Activities' // ERROR ya que es privado
