import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  standalone:true,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  barChartData = [
    { name: 'Produto A', value: 5000 },
    { name: 'Produto B', value: 3000 },
    { name: 'Produto C', value: 4000 },
    { name: 'Produto D', value: 6000 }
  ];

  barChartView: [number, number] = [700, 400]; // Largura e altura do gráfico
  barChartShowXAxis = true;
  barChartShowYAxis = true;
  barChartGradient = false;
  barChartShowLegend = true;

  // Adicione as propriedades para os rótulos dos eixos
  barChartXAxisLabel = 'Categoria';
  barChartYAxisLabel = 'Valor';

  barChartColorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}
