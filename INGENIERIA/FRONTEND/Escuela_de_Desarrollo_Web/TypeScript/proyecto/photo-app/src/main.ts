import { PhotoOrientation } from './photo-orientation'
import { Album } from './album'
import { Picture } from './picture'
import { User } from './user'

const user = new User(1, 'riki', 'ricardo', true)
const album = new Album(10, 'Album de fotos')
const picture = new Picture(1, 'Typescript course', '2020/10', PhotoOrientation.Landscape)



// Creamos relaciones
user.addAlbum(album)
album.addPicture(picture)
console.log('user', user)

user.removeAlbum(album)
console.log('user', user)


