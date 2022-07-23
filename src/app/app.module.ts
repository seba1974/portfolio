import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ModificarImagenesComponent } from './componentes/acercade/modificar-imagenes/modificar-imagenes.component';
import { ModificarPerfilComponent } from './componentes/acercade/modificar-perfil/modificar-perfil.component';

import { HeaderComponent } from './componentes/header/header.component';

import { FooterComponent } from './componentes/footer/footer.component';

import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { InfoExperienciaComponent } from './componentes/experiencia/info-experiencia/info-experiencia.component';
import { AltaExperienciaComponent } from './componentes/experiencia/alta-experiencia/alta-experiencia.component';
import { BajaExperienciaComponent } from './componentes/experiencia/baja-experiencia/baja-experiencia.component';
import { ModificarExperienciaComponent } from './componentes/experiencia/modificar-experiencia/modificar-experiencia.component';

import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ModificarEducacionComponent } from './componentes/educacion/modificar-educacion/modificar-educacion.component';
import { AltaEducacionComponent } from './componentes/educacion/alta-educacion/alta-educacion.component';
import { BajaEducacionComponent } from './componentes/educacion/baja-educacion/baja-educacion.component';

import { CursosComponent } from './componentes/cursos/cursos.component';
import { ModificarCursosComponent } from './componentes/cursos/modificar-cursos/modificar-cursos.component';
import { AltaCursosComponent } from './componentes/cursos/alta-cursos/alta-cursos.component';
import { BajaCursosComponent } from './componentes/cursos/baja-cursos/baja-cursos.component';

import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AltaProyectosComponent } from './componentes/proyectos/alta-proyectos/alta-proyectos.component';
import { BajaProyectosComponent } from './componentes/proyectos/baja-proyectos/baja-proyectos.component';
import { ModificarProyectosComponent } from './componentes/proyectos/modificar-proyectos/modificar-proyectos.component';

import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { BajaIdiomasComponent } from './componentes/idiomas/baja-idiomas/baja-idiomas.component';
import { AltaIdiomasComponent } from './componentes/idiomas/alta-idiomas/alta-idiomas.component';
import { ModificarIdiomasComponent } from './componentes/idiomas/modificar-idiomas/modificar-idiomas.component';

import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RedessocialesComponent } from './componentes/redessociales/redessociales.component';
import { AltaRedessocialesComponent } from './componentes/redessociales/alta-redessociales/alta-redessociales.component';
import { BajaRedessocialesComponent } from './componentes/redessociales/baja-redessociales/baja-redessociales.component';
import { ModificarRedessocialesComponent } from './componentes/redessociales/modificar-redessociales/modificar-redessociales.component';

import { SkillsComponent } from './componentes/skills/skills.component';
import { AltaSkillsComponent } from './componentes/skills/alta-skills/alta-skills.component';
import { ModificarSkillsSoftComponent } from './componentes/skills/modificar-skills-soft/modificar-skills-soft.component';
import { ModificarSkillsHardComponent } from './componentes/skills/modificar-skills-hard/modificar-skills-hard.component';
import { BajaSkillsHardComponent } from './componentes/skills/baja-skills-hard/baja-skills-hard.component';
import { BajaSkillsSoftComponent } from './componentes/skills/baja-skills-soft/baja-skills-soft.component';

import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { AppRoutingModule } from './app-routing.module';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';



@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    EducacionComponent,
    AcercadeComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    ProyectosComponent,
    CursosComponent,
    AltaExperienciaComponent,
    BajaExperienciaComponent,
    ModificarExperienciaComponent,
    ModificarEducacionComponent,
    AltaEducacionComponent,
    BajaEducacionComponent,
    ModificarCursosComponent,
    AltaCursosComponent,
    BajaCursosComponent,
    AltaProyectosComponent,
    BajaProyectosComponent,
    ModificarProyectosComponent,
    AltaSkillsComponent,
    LoginComponent,
    IdiomasComponent,
    BajaIdiomasComponent,
    AltaIdiomasComponent,
    ModificarIdiomasComponent,
    AltaRedessocialesComponent,
    BajaRedessocialesComponent,
    ModificarRedessocialesComponent,
    RedessocialesComponent,
    ModificarSkillsSoftComponent,
    ModificarSkillsHardComponent,
    BajaSkillsHardComponent,
    BajaSkillsSoftComponent,
    UsuariosComponent,
    RegistroComponent,
    MenuComponent,
    ModificarImagenesComponent,
    ModificarPerfilComponent,
    InfoExperienciaComponent,     
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    Ng2GoogleChartsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
