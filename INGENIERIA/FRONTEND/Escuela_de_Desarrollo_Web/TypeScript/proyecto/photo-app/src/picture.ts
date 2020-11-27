import { Item } from './item'
import { PhotoOrientation } from './photo-orientation'

export class Picture extends Item {

  constructor(
    id: number,
    title: string,
    private date: string,
    private orientation: PhotoOrientation
  ) {
    super(id, title);
  }

  toString(): string {
    return ``
  }
  
}