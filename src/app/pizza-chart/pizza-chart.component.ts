import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PizzaChartDataService } from '../services/pizza-chart-data.service';

@Component({
  selector: 'app-pizza-chart',
  standalone: true,
  templateUrl: './pizza-chart.component.html',
  styleUrls: ['./pizza-chart.component.css'],
  imports: [CommonModule, NgxChartsModule]
})
export class PizzaChartComponent implements OnInit {

  pieChartData: any[] = [];

  colorScheme = {
    domain: ['#B2FF59', '#76FF03', '#64DD17', '#43A047', '#388E3C']
  };

  width: number = 200;
  height: number = 400;

  constructor(private pizzaChartDataService: PizzaChartDataService) { }

  ngOnInit(): void {
    this.pizzaChartDataService.getPieChartData().subscribe({
      next: (data: any[]) => {
        this.pieChartData = data.map(item => ({
          name: item.nome,
          value: item.valorEstoque
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
