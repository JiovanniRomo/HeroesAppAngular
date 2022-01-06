import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    const { id } = this.rutaActiva.snapshot.params;
    console.log(id)
  }

}
