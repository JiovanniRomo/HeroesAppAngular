import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {

    let urlImagen: string = '';
    let publisherCorto: string[] | string = heroe.publisher.split(' ');
    publisherCorto = publisherCorto[0].toLowerCase();
    
    let nombreCorto: string[] | string = heroe.superhero.split(' ');
    nombreCorto = nombreCorto[0].toLowerCase();

    urlImagen = `assets/heroes/${publisherCorto}-${nombreCorto}.jpg`;

    if(heroe.superhero === 'ROBIN/NIGHTWING'){
      urlImagen = `assets/heroes/dc-robin.jpg`;
    } 

    if(heroe.superhero ==='GREEN ARROW') {
      urlImagen = `assets/heroes/dc-arrow.jpg`;
    }

    if(!heroe._id && !heroe.alt_image) {
      return `assets/no-image.png`;
    } else if(heroe.alt_image) {
      return heroe.alt_image;
    }
  
    return (heroe.superhero) ? urlImagen : 'assets/no-image.png';
  }
}
