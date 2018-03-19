//Modulos de angular para que funcione el router
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

//Importar los componentes a los que haremos route
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ProyectoDetalleComponent } from './proyecto/proyecto-detalle.component';
import { ProyectoNuevoComponent } from './proyecto/proyecto-nuevo.component';
import { PROYECTO_ROUTES } from './proyecto/proyecto.routing'


const appRoutes: Routes = [

    {path: '', component: ProyectoComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: 'home', component: ProyectoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'proyecto/nuevo', component: ProyectoNuevoComponent},
    {path: 'proyecto', component: ProyectoComponent},
    {path: 'proyecto/:id', component: ProyectoDetalleComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'usuario/:idUser', component: UsuarioComponent},
    {path: '**', component: ProyectoComponent},

]

export const appRoutingProviders: any[] = [];


//Modulo de rutas
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);