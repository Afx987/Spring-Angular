import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UsuariosService} from './usuarios/usuarios.service';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {RouterModule , Routes} from '@angular/router';


const routes : Routes =  [
  {path : '' , redirectTo : '/home', pathMatch : 'full' },
  {path : 'usuarios' , component : UsuariosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
