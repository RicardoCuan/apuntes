export {}

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}


// Superclase
abstract class Item {
  protected readonly _id: number
  protected _title: string

  constructor(id:number, title: string) {
    this._id = id
    this._title = title
  }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }
  set title(title: string) {
    this._title = title
  }
}



class Picture extends Item {
  public static photoOrientation = PhotoOrientation
  private _orientation: PhotoOrientation

  constructor(
    id: number,
    title: string,
    orientation: PhotoOrientation
  ) {
    super(id, title)
    this._orientation = orientation
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



class Album extends Item {
  private pictures: Picture[]

  constructor(
    id: number,
    title: string
  ) {
    super(id, title)
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


// const item = new Item(1, 'title')
// console.log('item', item)

// Probar el miembro estático
console.log('PhotoOrientation', Picture.photoOrientation.Landscape)
