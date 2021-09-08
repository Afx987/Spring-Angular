import { Component, OnInit } from '@angular/core';
import {Usuarios} from './usuarios';
import {UsuariosService} from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuarios[];
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {

    this.usuarioService.getUsuarios().subscribe(
    (usuarios) => this.usuarios = usuarios
    );
  }

}
