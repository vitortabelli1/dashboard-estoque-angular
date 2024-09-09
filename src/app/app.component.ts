import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PizzaChartComponent } from './pizza-chart/pizza-chart.component';
import { DetalhamentoProdutosComponent } from './detalhamento-produtos/detalhamento-produtos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marcar o AppComponent como standalone
  imports: [
    SidebarComponent,
    DashboardComponent,
    PizzaChartComponent,
    DetalhamentoProdutosComponent
  ]
})
export class AppComponent {
  title = '';
}
