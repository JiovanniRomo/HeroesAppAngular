import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alt_image: '',
    characters: '',
    alter_ego: '',
    first_appearance: '',
  }

  constructor(private rutaActiva: ActivatedRoute, private HeroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    if( !this.router.url.includes('editar') ) {
      return;
    }
    this.rutaActiva.params
    .pipe(
      switchMap( ({id}) => this.HeroesService.getHeroe(id)) 
    )
    .subscribe( heroe => this.heroe = heroe);
  }

  guardar() {
    if(this.heroe.superhero.trim().length === 0) {
      return;
    }

    if(this.heroe._id) {
      // Actualizar 
      this.HeroesService.actualizarHeroe(this.heroe).subscribe(heroe => console.log('Actualizando: ', heroe));
    } else {
      // Crear un registro
      this.HeroesService.agregarHeroe(this.heroe).subscribe(heroe => this.router.navigate(['/heroes', heroe._id]))
    }
    // this.limpiarHeroe();
  }

  limpiarHeroe() {
    this.heroe = {
      superhero: '',
      publisher: Publisher.DCComics,
      alt_image: '',
      characters: '',
      alter_ego: '',
      first_appearance: '',
    }
  }
}
