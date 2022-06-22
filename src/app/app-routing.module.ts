import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaExperienciaComponent } from './componentes/experiencia/alta-experiencia/alta-experiencia.component';
import { ModificarExperienciaComponent } from './componentes/experiencia/modificar-experiencia/modificar-experiencia.component';
import { BajaExperienciaComponent } from './componentes/experiencia/baja-experiencia/baja-experiencia.component';

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

import { HeaderComponent } from './componentes/header/header.component';

import { BajaIdiomasComponent } from './componentes/idiomas/baja-idiomas/baja-idiomas.component';
import { ModificarIdiomasComponent } from './componentes/idiomas/modificar-idiomas/modificar-idiomas.component';
import { AltaIdiomasComponent } from './componentes/idiomas/alta-idiomas/alta-idiomas.component';

import { RedessocialesComponent } from './componentes/redessociales/redessociales.component';
import { BajaRedessocialesComponent } from './componentes/redessociales/baja-redessociales/baja-redessociales.component';
import { ModificarRedessocialesComponent } from './componentes/redessociales/modificar-redessociales/modificar-redessociales.component';
import { AltaRedessocialesComponent } from './componentes/redessociales/alta-redessociales/alta-redessociales.component';

import { ModificarImagenesComponent } from './componentes/acercade/modificar-imagenes/modificar-imagenes.component';
import { ModificarPerfilComponent } from './componentes/acercade/modificar-perfil/modificar-perfil.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { InfoExperienciaComponent } from './componentes/experiencia/info-experiencia/info-experiencia.component';





const routes: Routes = [

  { path: '', component: HeaderComponent },
  //{path: '**', redirectTo: '', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  { path: 'experiencia/info', component: InfoExperienciaComponent },
  { path: 'experiencia/crear', component: AltaExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'experiencia/editar/:id', component: ModificarExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'experiencia/borrar/:id', component: BajaExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

  { path: 'educacion/crear', component: AltaEducacionComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'educacion/editar/:id', component: ModificarEducacionComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'educacion/borrar/:id', component: BajaEducacionComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

  { path: 'idiomas/crear', component: AltaIdiomasComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'idiomas/editar/:id', component: ModificarIdiomasComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'idiomas/borrar/:id', component: BajaIdiomasComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

  { path: 'skills/crear', component: AltaSkillsComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'skills_hard/editar/:id', component: ModificarSkillsHardComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'skills_soft/editar/:id', component: ModificarSkillsSoftComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'skills_hard/borrar/:id', component: BajaSkillsHardComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'skills_soft/borrar/:id', component: BajaSkillsSoftComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

  { path: 'proyectos/crear', component: AltaProyectosComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'proyectos/editar/:id', component: ModificarProyectosComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'proyectos/borrar/:id', component: BajaProyectosComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

  { path: 'cursos/crear', component: AltaCursosComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'cursos/editar/:id', component: ModificarCursosComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'cursos/borrar/:id', component: BajaCursosComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

  { path: 'redessociales/listar', component: RedessocialesComponent },
  { path: 'redessociales/crear', component: AltaRedessocialesComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'redessociales/editar/:id', component: ModificarRedessocialesComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'redessociales/borrar/:id', component: BajaRedessocialesComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

  { path: 'usuarios/listar', component: UsuariosComponent },
  { path: 'usuarios/editar/:id', component: ModificarPerfilComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'usuarios/editar_img/:id', component: ModificarImagenesComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
