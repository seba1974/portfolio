import { Component, OnInit } from '@angular/core';
import { IdiomasService } from 'src/app/servicios/idiomas.service';
import { TokenService } from 'src/app/servicios/token.service';
// declaro variable global google de tipo any
declare var google: any;

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  listaIdiomas: any;
  isLogged = false;
  nombreUsuario = '';

  constructor(private idiomasService: IdiomasService,
    private tokenService: TokenService) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }


    this.idiomasService.obtenerIdiomas().subscribe(data => {
      console.log(data);
      this.listaIdiomas = data; //.tblidiomas nombre de la tabla de la BD o JSON
    });
  }


  crearGrafico(idioma: any, porcentaje_oral: any, porcentaje_escrita:any, porcentaje_lectura:any) {
    console.log(idioma);
    console.log(porcentaje_oral);
    console.log(porcentaje_escrita);
    console.log(porcentaje_lectura);


      var func = (chart: any) => {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Habilidad');
      data.addColumn('number', 'Porcentaje Oral');
      data.addColumn('number', 'Porcentaje Escrito');
      data.addColumn('number', 'Porcentaje Lectura');
      data.addRows([
        ["Oral", parseInt(porcentaje_oral,10)],
        ["Escritura", parseInt(porcentaje_escrita, 10)],
        ["Lectura", parseInt(porcentaje_lectura, 10)]
      ]);
      var options = {
        'title': idioma,
        'width': 400,
        'height': 300,
        
        'slices': {
          0: { color: '#red' },
          1: { color: '#blue' },
          2: { color: 'yellow' }
        }
      };
      chart().draw(data, options);
    }

    var chart = () => new google.visualization.PieChart(document.getElementById('chart_div'));
    var callback = () => func(chart);
    google.charts.setOnLoadCallback(callback);
  }
}
