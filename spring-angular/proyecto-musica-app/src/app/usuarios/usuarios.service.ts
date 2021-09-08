import { Injectable } from '@angular/core';
import {USUARIOS} from './usuarios.json';
import {Usuarios} from './usuarios';
import {of, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() {}

    getUsuarios() : Observable<Usuarios[]> {
      return of(USUARIOS);


   }
}
