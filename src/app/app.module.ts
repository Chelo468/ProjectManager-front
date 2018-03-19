import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

//Importacion de componentes
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ProyectoNuevoComponent } from './proyecto/proyecto-nuevo.component';
import { ProyectoDetalleComponent } from './proyecto/proyecto-detalle.component';
import { NavbarComponent } from './navbar/navbar.component';


import { Comun } from './comun/comun';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    RegistroComponent,
    ProyectoComponent,
    ProyectoNuevoComponent,
    ProyectoDetalleComponent,    
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders, Comun],
  bootstrap: [AppComponent]
})
export class AppModule { }
