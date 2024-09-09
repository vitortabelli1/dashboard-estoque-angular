import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PizzaChartDataService } from '../services/pizza-chart-data.service'; // Importe o serviço

@Component({
  selector: 'app-pizza-chart',
  standalone: true,
  templateUrl: './pizza-chart.component.html',
  styleUrls: ['./pizza-chart.component.css'],
  imports: [CommonModule, NgxChartsModule]
})
export class PizzaChartComponent implements OnInit {

  pieChartData: any[] = [];

  // Definir esquema de cores
  colorScheme = {
    domain: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF'] // Cores para cada categoria
  };

  width: number = 200;
  height: number = 400;

  constructor(private pizzaChartDataService: PizzaChartDataService) { }

  ngOnInit(): void {
    this.pizzaChartDataService.getPieChartData().subscribe({
      next: (data: any[]) => {
        // Formatar os dados para o gráfico de pizza
        this.pieChartData = data.map(item => ({
          name: item.nome, // Nome para o gráfico
          value: item.valorEstoque // Valor para o gráfico
        }));
      },
      error: (err: any) => {
        console.error('Erro ao carregar dados do gráfico:', err);
      }
    });
  }

  onSelect(event: any): void {
    console.log('Item selecionado:', event);
  }
}
