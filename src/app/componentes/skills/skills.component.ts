import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { Skills } from '../../Models/skills';

import { SkillsHardService } from 'src/app/servicios/skills-hard.service';
import { SkillsSoftService } from 'src/app/servicios/skills-soft.service';
import { TokenService } from 'src/app/servicios/token.service';
// declaro variable global google de tipo any
declare var google: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  private resto: number = 0;

  lista_Skills_Hard: any;
  lista_Skills_Soft: any;
  //skillHard: any;
  //skills: Skills | undefined;
  isLogged = false;
  nombreUsuario = '';
  //i: number | undefined;
  habilidad: any;
  porcentaje: any;

  constructor(private datosSkills_Hard: SkillsHardService,
    private datosSkills_Soft: SkillsSoftService,
    private tokenService: TokenService,

  ) { }



  ngOnInit(): void {
    //let skillsHard:any = this.datosSkills_Hard.obtenerSkills_Hard()  // Skills por any
    // google chart
    // google.charts.load('current', {packages: ['corechart']});
    // this.buildChart(skillsHard);

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }

    google.charts.load('current', { packages: ['corechart'] }); // agregado para graficar
    
    this.datosSkills_Hard.obtenerSkills_Hard().subscribe(data => {
      this.lista_Skills_Hard = data;      
    })

    this.datosSkills_Soft.obtenerSkills_Soft().subscribe(data => {
      this.lista_Skills_Soft = data;

    })
  }




  crearGrafico(habilidad: any, porcentaje: any) {
    console.log(habilidad);
    console.log(porcentaje);

      var func = (chart: any) => {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Habilidad');
      data.addColumn('number', 'Porcentaje');
      data.addRows([
        [habilidad, parseInt(porcentaje, 10)],
        ['', (this.resto = 100 - parseInt(porcentaje, 10))],
        ['', 100]
      ]);
      var options = {
        'title': habilidad,
        'width': 400,
        'height': 300,
        'pieHole': 0.75,  //tamaño del agujero central
        'pieStartAngle': 270, //Girar grafico 90°
        'slices': {
          0: { color: '#58D68D' },
          1: { color: '#E5E8E8' },
          2: { color: 'transparent' }
        }
      };
      chart().draw(data, options);
    }

    var chart = () => new google.visualization.PieChart(document.getElementById('chart_div'));
    var callback = () => func(chart);
    google.charts.setOnLoadCallback(callback);
  }


}
