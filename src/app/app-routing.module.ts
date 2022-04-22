import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaExperienciaComponent } from './componentes/experiencia/alta-experiencia/alta-experiencia.component';
import { ModificarExperienciaComponent } from './componentes/experiencia/modificar-experiencia/modificar-experiencia.component';
import { BajaExperienciaComponent } from './componentes/experiencia/baja-experiencia/baja-experiencia.component';
import { HeaderComponent } from './componentes/header/header.component';


const routes : Routes = [

  {path: '', component:HeaderComponent},
  {path: 'experiencia/crear', component:AltaExperienciaComponent},
  {path: 'experiencia/editar', component:ModificarExperienciaComponent},
  {path: 'experiencia/borrar', component:BajaExperienciaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
