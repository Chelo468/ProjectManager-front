//Modulos de angular para que funcione el router
import { Routes } from '@angular/router';


import { ProyectoDetalleComponent } from './proyecto-detalle.component';
import { ProyectoEditarComponent } from './proyecto-editar.component';

export const PROYECTO_ROUTES: Routes = [
	{path: 'editar', component: ProyectoEditarComponent},
	{path: 'detalle', component: ProyectoDetalleComponent},
	//{path: '**', component: ProyectoComponent}
]
