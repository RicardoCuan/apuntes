export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}



class Picture {
  private _id: number
  private _title: string
  private _orientation: PhotoOrientation

  constructor(
    id: number,
    title: string,
    orientation: PhotoOrientation
  ) {
    this._id = id
    this._title = title
    this._orientation = orientation
  }

  get id() {
    return this._id
  }
  set id(id: number) {
    this._id = id
  }

  get title() {
    return this._title
  }
  set title(title: string) {
    this._title = title
  }

  get orientation() {
    return this._orientation
  }
  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation
  }


  // Comportamiento
  toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
  }
}



class Album {
  private _id: number
  private _title: string
  private pictures: Picture[]

  constructor(
    id: number,
    title: string
  ) {
    this._id = id
    this._title = title
    this.pictures = []
  }

  get id() {
    return this._id
  }
  set id(id: number) {
    this._id = id
  }

  get title() {
    return this._title
  }
  set title(title: string) {
    this._title = title
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
