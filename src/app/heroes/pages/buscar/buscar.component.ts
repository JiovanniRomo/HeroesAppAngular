import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  buscando() {
    // this.heroesService.getHeroes().subscribe( heroes => this.heroes = heroes);
    this.heroesService
      .getSugerencias(this.termino.trim())
      .subscribe(({coincidencias}) => (this.heroes = coincidencias)); 
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    //Validar si es un string vacio
    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroeSeleccionado = heroe;
    //Normalmente en este punto haces una nueva peticion HTTP para traer TODA la info
  }
}
