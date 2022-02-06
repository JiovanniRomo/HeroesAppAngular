import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of, map } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _baseUrl: string = 'http://localhost:3000';
  private _auth: Auth | undefined; 

  get auth(): Auth {
    return {...this._auth!};
  }

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get<Auth>(`${this._baseUrl}/usuarios/1`)
    .pipe(
      tap(resp => this._auth = resp),
      tap(auth => localStorage.setItem('token', auth.id))
    )
  }

  verificarAuth(): Observable<boolean> {
    if(!localStorage.getItem('token')) {
      // El of permite crear un observable
      return of(false);
    }

    return this.http.get<Auth>(`${this._baseUrl}/usuarios/1`)
    .pipe(
      // Map sirve para transformar las cosas
      map( auth =>  {
        console.log(auth);
        this._auth = auth;
        return true
      } )
    )
  }
}
