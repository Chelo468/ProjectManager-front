//Modulos de angular para que funcione el router
import { Routes } from '@angular/router';

import { ProyectoDetalleComponent } from './proyecto-detalle.component';

export const PROYECTO_ROUTES: Routes = [
	{path: 'detalle', component: ProyectoDetalleComponent},
	//{path: '**', component: ProyectoComponent}
]
