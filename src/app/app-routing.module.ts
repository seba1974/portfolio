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
import { ModificarSkillsHardComponent } from './componentes/skills/modificar-skills-hard/modificar-skills-hard.component';
import { ModificarSkillsSoftComponent } from './componentes/skills/modificar-skills-soft/modificar-skills-soft.component';
import { BajaSkillsHardComponent } from './componentes/skills/baja-skills-hard/baja-skills-hard.component';
import { BajaSkillsSoftComponent } from './componentes/skills/baja-skills-soft/baja-skills-soft.component';

import { AltaEducacionComponent } from './componentes/educacion/alta-educacion/alta-educacion.component';
import { ModificarEducacionComponent } from './componentes/educacion/modificar-educacion/modificar-educacion.component';
import { BajaEducacionComponent } from './componentes/educacion/baja-educacion/baja-educacion.component';

import { AltaCursosComponent } from './componentes/cursos/alta-cursos/alta-cursos.component';
import { ModificarCursosComponent } from './componentes/cursos/modificar-cursos/modificar-cursos.component';
import { BajaCursosComponent } from './componentes/cursos/baja-cursos/baja-cursos.component';

//import { AltaAcercadeComponent } from './componentes/acercade/alta-acercade/alta-acercade.component';
//import { ModificarAcercadeComponent } from './componentes/acercade/modificar-acercade/modificar-acercade.component';
//import { BajaAcercadeComponent } from './componentes/acercade/baja-acercade/baja-acercade.component';

import { HeaderComponent } from './componentes/header/header.component';

import { BajaIdiomasComponent } from './componentes/idiomas/baja-idiomas/baja-idiomas.component';
import { ModificarIdiomasComponent } from './componentes/idiomas/modificar-idiomas/modificar-idiomas.component';
import { AltaIdiomasComponent } from './componentes/idiomas/alta-idiomas/alta-idiomas.component';

import { RedessocialesComponent } from './componentes/redessociales/redessociales.component';
import { BajaRedessocialesComponent } from './componentes/redessociales/baja-redessociales/baja-redessociales.component';
import { ModificarRedessocialesComponent } from './componentes/redessociales/modificar-redessociales/modificar-redessociales.component';
import { AltaRedessocialesComponent } from './componentes/redessociales/alta-redessociales/alta-redessociales.component';

import { ModificarUsuarioComponent } from './componentes/usuarios/modificar-usuario/modificar-usuario.component';
import { AltaUsuarioComponent } from './componentes/usuarios/alta-usuario/alta-usuario.component';
import { LoginComponent } from './componentes/header/login/login.component';
import { AltaLoginComponent } from './componentes/header/login/alta-login/alta-login.component';
import { BajaUsuarioComponent } from './componentes/usuarios/baja-usuario/baja-usuario.component';

import { UsuariosComponent } from './componentes/usuarios/usuarios.component';


const routes : Routes = [

  {path: '', component:HeaderComponent},
  //{path: '**', redirectTo: '', pathMatch: 'full'},
  {path: 'experiencia/crear', component:AltaExperienciaComponent},
  {path: 'experiencia/editar/:id', component:ModificarExperienciaComponent},
  {path: 'experiencia/borrar/:id', component:BajaExperienciaComponent},

  {path: 'educacion/crear', component:AltaEducacionComponent},
  {path: 'educacion/editar/:id', component:ModificarEducacionComponent},
  {path: 'educacion/borrar/:id', component:BajaEducacionComponent},

  {path: 'idiomas/crear', component:AltaIdiomasComponent},
  {path: 'idiomas/editar/:id', component:ModificarIdiomasComponent},
  {path: 'idiomas/borrar/:id', component:BajaIdiomasComponent},

  {path: 'skills/crear', component:AltaSkillsComponent},
  {path: 'skills_hard/editar/:id', component:ModificarSkillsHardComponent},
  {path: 'skills_soft/editar/:id', component:ModificarSkillsSoftComponent},
  {path: 'skills_hard/borrar/:id', component:BajaSkillsHardComponent},
  {path: 'skills_soft/borrar/:id', component:BajaSkillsSoftComponent},

  {path: 'proyectos/crear', component:AltaProyectosComponent},
  {path: 'proyectos/editar/:id', component:ModificarProyectosComponent},
  {path: 'proyectos/borrar/:id', component:BajaProyectosComponent},

  {path: 'cursos/crear', component:AltaCursosComponent},
  {path: 'cursos/editar/:id', component:ModificarCursosComponent},
  {path: 'cursos/borrar/:id', component:BajaCursosComponent},

  //{path: 'acercade/crear', component:AltaAcercadeComponent},
  //{path: 'acercade/editar/:id', component:ModificarAcercadeComponent},
  //{path: 'acercade/borrar/:id', component:BajaAcercadeComponent},

  {path: 'redessociales/listar', component:RedessocialesComponent},
  {path: 'redessociales/crear', component:AltaRedessocialesComponent},
  {path: 'redessociales/editar/:id', component:ModificarRedessocialesComponent},
  {path: 'redessociales/borrar/:id', component:BajaRedessocialesComponent},

  {path: 'header/crear', component:AltaHeaderComponent},
  {path: 'header/editar/:id', component:ModificarHeaderComponent},
  {path: 'header/borrar/:id', component:BajaHeaderComponent},

  {path: 'usuarios/listar', component:UsuariosComponent},
  {path: 'usuarios/crear', component:AltaUsuarioComponent},
  {path: 'usuarios/editar/:id', component:ModificarUsuarioComponent},
  {path: 'usuarios/borrar/:id', component:BajaUsuarioComponent},

  {path: 'login', component:LoginComponent},
  {path: 'registrarse', component:AltaLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
