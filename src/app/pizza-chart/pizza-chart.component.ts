import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule, Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pizza-chart',
  standalone: true,
  templateUrl: './pizza-chart.component.html',
  styleUrls: ['./pizza-chart.component.css'],
  imports: [CommonModule, NgxChartsModule]
})
export class PizzaChartComponent implements OnInit {

  @Input() pieChartData: any[] = [
    { name: '300', value: 300 }, // Substituímos o nome pelo valor
    { name: '150', value: 150 }
  ];

  // Definir esquema de cores
  colorScheme = {
    domain: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'] // Cores para cada categoria
  };

  width: number = 400;
  height: number = 400;

  constructor() { }

  ngOnInit(): void {
    // Configurações iniciais ou manipulações de dados podem ser feitas aqui
  }

  onSelect(event: any): void {
    console.log('Item selecionado:', event);
  }
}
