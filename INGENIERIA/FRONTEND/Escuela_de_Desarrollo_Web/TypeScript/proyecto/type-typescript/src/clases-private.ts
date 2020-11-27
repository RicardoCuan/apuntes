export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}



class Picture {
  private id: number
  private title: string
  private orientation: PhotoOrientation

  constructor(
    id: number,
    title: string,
    orientation: PhotoOrientation
  ) {
    this.id = id
    this.title = title
    this.orientation = orientation
  }

  // Comportamiento
  toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
  }
}



class Album {
  private id: number
  private title: string
  private pictures: Picture[]

  constructor(
    id: number,
    title: string
  ) {
    this.id = id
    this.title = title
    this.pictures = []
  }
  
  addPicture(picture: Picture) {
    this.pictures.push(picture)
  }
}


const album: Album = new Album(1, 'Personal Picture')
const picture: Picture = new Picture(1, 'Platzi Session', PhotoOrientation.Panorama)
album.addPicture(picture)

console.log('album', album)


// Accediendo a los miembros públicos 
// picture.id = 100 // ERROR ya que es privado
// picture.title = "Another title" // ERROR ya que es privado
// album.title = 'Personal Activities' // ERROR ya que es privado
