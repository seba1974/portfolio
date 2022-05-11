import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

import { HttpClientModule } from '@angular/common/http';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { AltaExperienciaComponent } from './componentes/experiencia/alta-experiencia/alta-experiencia.component';
import { BajaExperienciaComponent } from './componentes/experiencia/baja-experiencia/baja-experiencia.component';
import { ModificarExperienciaComponent } from './componentes/experiencia/modificar-experiencia/modificar-experiencia.component';
import { ModificarEducacionComponent } from './componentes/educacion/modificar-educacion/modificar-educacion.component';
import { AltaEducacionComponent } from './componentes/educacion/alta-educacion/alta-educacion.component';
import { BajaEducacionComponent } from './componentes/educacion/baja-educacion/baja-educacion.component';
import { BajaAcercadeComponent } from './componentes/acercade/baja-acercade/baja-acercade.component';
import { AltaAcercadeComponent } from './componentes/acercade/alta-acercade/alta-acercade.component';
import { ModificarAcercadeComponent } from './componentes/acercade/modificar-acercade/modificar-acercade.component';
import { ModificarCursosComponent } from './componentes/cursos/modificar-cursos/modificar-cursos.component';
import { AltaCursosComponent } from './componentes/cursos/alta-cursos/alta-cursos.component';
import { BajaCursosComponent } from './componentes/cursos/baja-cursos/baja-cursos.component';
import { AltaProyectosComponent } from './componentes/proyectos/alta-proyectos/alta-proyectos.component';
import { BajaProyectosComponent } from './componentes/proyectos/baja-proyectos/baja-proyectos.component';
import { ModificarProyectosComponent } from './componentes/proyectos/modificar-proyectos/modificar-proyectos.component';
import { AltaSkillsComponent } from './componentes/skills/alta-skills/alta-skills.component';
import { BajaSkillsComponent } from './componentes/skills/baja-skills/baja-skills.component';
import { ModificarSkillsComponent } from './componentes/skills/modificar-skills/modificar-skills.component';
import { LoginComponent } from './componentes/header/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ModificarHeaderComponent } from './componentes/header/modificar-header/modificar-header.component';
import { AltaHeaderComponent } from './componentes/header/alta-header/alta-header.component';
import { BajaHeaderComponent } from './componentes/header/baja-header/baja-header.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { BajaIdiomasComponent } from './componentes/idiomas/baja-idiomas/baja-idiomas.component';
import { AltaIdiomasComponent } from './componentes/idiomas/alta-idiomas/alta-idiomas.component';
import { ModificarIdiomasComponent } from './componentes/idiomas/modificar-idiomas/modificar-idiomas.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BajaAcercadeComponent,
    AltaAcercadeComponent,
    ModificarAcercadeComponent,
    ModificarCursosComponent,
    AltaCursosComponent,
    BajaCursosComponent,
    AltaProyectosComponent,
    BajaProyectosComponent,
    ModificarProyectosComponent,
    AltaSkillsComponent,
    BajaSkillsComponent,
    ModificarSkillsComponent,
    LoginComponent,
    ModificarHeaderComponent,
    AltaHeaderComponent,
    BajaHeaderComponent,
    IdiomasComponent,
    BajaIdiomasComponent,
    AltaIdiomasComponent,
    ModificarIdiomasComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
