import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    const url = 'http://localhost:3000/heroes';
    return this.http.get<Heroe[]>(url);
  }
}
