import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DetalhamentoProdutosModule } from './detalhamento-produtos/detalhamento-produtos.module';
import { FormatNumberPipe } from './app/format-number.pipe';
import { LegendComponent } from './app/legend/legend.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { WaveChartComponent } from './app/bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    FormatNumberPipe,
    LegendComponent,
    WaveChartComponent
   
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    DetalhamentoProdutosModule // Importa o módulo que contém o componente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
