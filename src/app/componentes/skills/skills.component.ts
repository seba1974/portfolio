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

  private porcentaje: number = 75;
  private resto: number = 0;

  lista_Skills_Hard: any;
  lista_Skills_Soft: any;
  skillHard: any;
  skills: Skills | undefined;
  isLogged = false;
  nombreUsuario = '';


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

    this.datosSkills_Hard.obtenerSkills_Hard().subscribe(data => {
      this.lista_Skills_Hard = data;
      console.log(data)                                         // agregado para graficar (todo el array id 1, 2, 3.)
      google.charts.load('current', { packages: ['corechart'] }); // agregado para graficar
      //this.buildChart(data);                                    // agregado para graficar
    })
    this.datosSkills_Soft.obtenerSkills_Soft().subscribe(data => {
      this.lista_Skills_Soft = data;
    })
  }

  buildChart(skillsHard: Skills[]) {
    console.log(skillsHard)                    // Objeto {id: 1, habilidad: 'Programación', porcentaje: '40'}

    for (const propiedad in skillsHard) {
      console.log(`${propiedad}: ${skillsHard[propiedad]}`);



      var func = (chart: any) => {
        var data = new google.visualization.DataTable();
        // data.addColumn('string', 'Id');
        data.addColumn('string', 'Habilidad');
        data.addColumn('string', 'Porcentaje');
        console.log(`${propiedad}: ${skillsHard[propiedad]}`);

        data.addRows([
          [`${propiedad}`, `${skillsHard[propiedad]}`]
        ]);
        console.log(`${propiedad}`)
        console.log(`${skillsHard[propiedad]}`)
        //});
        var options = {
          'title': 'Hard Skills',
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
    }
    var chart = () => new google.visualization.PieChart(document.getElementById('chart_div'));
    var callback = () => func(chart);
    google.charts.setOnLoadCallback(callback);


  }

  /* drawChart(){
     // Create the data table.
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Habilidad');
     data.addColumn('number', 'Porcentaje');
     
     data.addRows([
       ['blockchain', 25],
       ['', 75],
       ['',  100]
     ]);
 
     // Set chart options
     var options = {'title':'Hard Skills',
                    'width':400,
                    'height':300,
                    'pieHole': 0.75,  //tamaño del agujero central
                    'pieStartAngle' : 270, //Girar grafico 90°
                    'slices' : {
                                 0: { color: '#58D68D' },
                                 1: { color: '#E5E8E8' },
                                 2: { color: 'transparent'}
                               }
                   };
 
     // Instantiate and draw our chart, passing in some options.
     var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
     chart.draw(data, options);
 
   }*/
}
