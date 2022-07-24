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

  private porcentaje: number = 60;
  private resto: number = 0;

  lista_Skills_Hard: any;
  lista_Skills_Soft: any;
  skillHard: any;
  skills: Skills | undefined;
  isLogged = false;
  nombreUsuario = '';
  i : number | undefined;

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
    //  console.log(data[2])                                      // solo el objeto cuyo indice es [2]
      google.charts.load('current', { packages: ['corechart'] }); // agregado para graficar
      //this.buildChart(data);                                    // agregado para graficar
    })
    this.datosSkills_Soft.obtenerSkills_Soft().subscribe(data => {
      this.lista_Skills_Soft = data;
    })
  }

  buildChart(skillsHard: Skills[]) {
  //  console.log(skillsHard)                    // Objeto {id: 1, habilidad: 'Programación', porcentaje: '40'}
  //  console.log(Object.entries(skillsHard));    // devuelve todo el objeto id:1 abajo habilidad: Programacion abajo Pocentaje : 40
  //  console.log(Object.keys(skillsHard));    // devuelve todos los nombres de las propiedades tipo cadena
    
    //-----------------------
    console.log(Object.values(skillsHard));    // devuelve un array [1, 'Programación', '40']
                                               // con todos los valores correspondientes a las propiedades tipo cadena
    //--------------------------
    for (this.i = 1; this.i <Object.values(skillsHard).length; this.i++) {
      console.log(Object.values(skillsHard)[this.i]);  // ------Devuelve "Programacion" abajo "40"-------
    //  console.log(`${Object.values(skillsHard)[this.i]}`);  // Devuelve "40 o 25 o 60"
     // console.log(`${Object.values(skillsHard)[this.i].habilidad}`);  // Devuelve undefined
    //  console.log(Object.values(skillsHard)[this.i].porcentaje);  // Devuelve undefined


    } 
    //--------------------------------------hasta acá esta bien!!!!!
    for (const propiedad in skillsHard) {
     // console.log(`${propiedad}: ${skillsHard[propiedad]}`);
      


      var func = (chart: any) => {
        var data = new google.visualization.DataTable();
        // data.addColumn('string', 'Id');
        data.addColumn('string', 'Habilidad');
        data.addColumn('number', 'Porcentaje');
      //  console.log(`${propiedad}: ${skillsHard[propiedad]}`);  // Devuelve "porcentaje: 40"

        data.addRows([
          [`${propiedad}`, parseInt(`${skillsHard[propiedad]}`, 10)],
          ['', this.resto = 100 - parseInt(`${skillsHard[propiedad]}`, 10)],
          ['',  100]
        ]);
      //  console.log(`${propiedad}`)             // Devuelve la propiedad ("Porcentaje o Habilidad")
      //  console.log(`${skillsHard[propiedad]}`) // Devuelve el el valor del porcentaje ("40, 25, 60")
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
