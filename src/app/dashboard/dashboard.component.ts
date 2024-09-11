import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './media-querie.css']
})
export class DashboardComponent implements OnInit {
  totalFaturamento: number = 0;
  totalValorEstoque: number = 0;
  totalRupturaEstoque: number = 0;
  totalGiroEstoque: number = 0;

  constructor(private dashboardDataService: DashboardDataService) {}

  ngOnInit(): void {
    this.dashboardDataService.totalFaturamento$.subscribe(total => this.totalFaturamento = total);
    this.dashboardDataService.totalValorEstoque$.subscribe(total => this.totalValorEstoque = total);
    this.dashboardDataService.totalRupturaEstoque$.subscribe(total => this.totalRupturaEstoque = total);
    this.dashboardDataService.totalGiroEstoque$.subscribe(total => this.totalGiroEstoque = total);
  }
}
