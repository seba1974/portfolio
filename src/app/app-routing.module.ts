import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaExperienciaComponent } from './componentes/experiencia/alta-experiencia/alta-experiencia.component';
import { ModificarExperienciaComponent } from './componentes/experiencia/modificar-experiencia/modificar-experiencia.component';
import { BajaExperienciaComponent } from './componentes/experiencia/baja-experiencia/baja-experiencia.component';

import { AltaHeaderComponent } from './componentes/header/alta-header/alta-header.component';
import { ModificarHeaderComponent } from './componentes/header/modificar-header/modificar-header.component';
import { BajaHeaderComponent } from './componentes/header/baja-header/baja-header.component';

import { AltaProyectosComponent } from './componentes/proyectos/alta-proyectos/alta-proyectos.component';
import { ModificarProyectosComponent } from './componentes/proyectos/modificar-proyectos/modificar-proyectos.component';
import { BajaProyectosComponent } from './componentes/proyectos/baja-proyectos/baja-proyectos.component';

import { AltaSkillsComponent } from './componentes/skills/alta-skills/alta-skills.component';
import { ModificarSkillsComponent } from './componentes/skills/modificar-skills/modificar-skills.component';
import { BajaSkillsComponent } from './componentes/skills/baja-skills/baja-skills.component';

import { AltaEducacionComponent } from './componentes/educacion/alta-educacion/alta-educacion.component';
import { ModificarEducacionComponent } from './componentes/educacion/modificar-educacion/modificar-educacion.component';
import { BajaEducacionComponent } from './componentes/educacion/baja-educacion/baja-educacion.component';

import { AltaCursosComponent } from './componentes/cursos/alta-cursos/alta-cursos.component';
import { ModificarCursosComponent } from './componentes/cursos/modificar-cursos/modificar-cursos.component';
import { BajaCursosComponent } from './componentes/cursos/baja-cursos/baja-cursos.component';

import { AltaAcercadeComponent } from './componentes/acercade/alta-acercade/alta-acercade.component';
import { ModificarAcercadeComponent } from './componentes/acercade/modificar-acercade/modificar-acercade.component';
import { BajaAcercadeComponent } from './componentes/acercade/baja-acercade/baja-acercade.component';

import { HeaderComponent } from './componentes/header/header.component';


const routes : Routes = [

  {path: '', component:HeaderComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
  {path: 'experiencia/crear', component:AltaExperienciaComponent},
  {path: 'experiencia/editar', component:ModificarExperienciaComponent},
  {path: 'experiencia/borrar', component:BajaExperienciaComponent},

  {path: 'educacion/crear', component:AltaEducacionComponent},
{path: 'educacion/editar', component:ModificarEducacionComponent},
{path: 'educacion/borrar', component:BajaEducacionComponent},

{path: 'skills/crear', component:AltaSkillsComponent},
{path: 'skills/editar', component:ModificarSkillsComponent},
{path: 'skills/borrar', component:BajaSkillsComponent},

{path: 'proyectos/crear', component:AltaProyectosComponent},
{path: 'proyectos/editar', component:ModificarProyectosComponent},
{path: 'proyectos/borrar', component:BajaProyectosComponent},

{path: 'cursos/crear', component:AltaCursosComponent},
{path: 'cursos/editar', component:ModificarCursosComponent},
{path: 'cursos/borrar', component:BajaCursosComponent},

{path: 'acercade/crear', component:AltaAcercadeComponent},
{path: 'acercade/editar', component:ModificarAcercadeComponent},
{path: 'acercade/borrar', component:BajaAcercadeComponent},

{path: 'header/crear', component:AltaHeaderComponent},
{path: 'header/editar', component:ModificarHeaderComponent},
{path: 'header/borrar', component:BajaHeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
