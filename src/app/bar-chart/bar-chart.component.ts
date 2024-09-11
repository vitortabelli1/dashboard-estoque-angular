import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css', 'media-querie.css'],
  imports: [NgxChartsModule] // Importa o módulo necessário aqui
})
export class BarChartComponent {
  // Dados para o gráfico
  dataVBC = [
    {
      "name": "2020",
      "value": 5000
    },
    {
      "name": "2021",
      "value": 6000
    },
    {
      "name": "2022",
      "value": 7000
    },
    {
      "name": "2023",
      "value": 8000
    }
  ];

  // Configuração do gráfico
  viewVBC: [number, number] = [270, 200]; // Tamanho do gráfico
  animationsVBC = true; // Ativa animações
  legendVBC = false; // Remove a legenda
  xAxisVBC = true; // Exibe o eixo X
  yAxisVBC = true; // Exibe o eixo Y
  showYAxisLabelVBC = false; // Remove o rótulo do eixo Y
  yAxisLabelVBC = ""; // Remove o texto do rótulo do eixo Y

  // Formatação dos rótulos dos dados
  dataLabelFormatterVBC(tooltipText: any) {
    return "$" + tooltipText + " trillion";
  }

  // Esquema de cores
  colorScheme = {
    domain: ['#5AA454'] // Defina a cor do gráfico aqui
  };
}
