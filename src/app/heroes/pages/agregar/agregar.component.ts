import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
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

  constructor(private rutaActiva: ActivatedRoute, private HeroesService: HeroesService) { }

  ngOnInit(): void {
    const { id } = this.rutaActiva.snapshot.params;
  }

  guardar() {
    if(this.heroe.superhero.trim().length === 0) {
      return;
    }

    this.HeroesService.agregarHeroe(this.heroe).subscribe(resp => console.log('Respuesta: ', resp))
    this.limpiarHeroe();
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
