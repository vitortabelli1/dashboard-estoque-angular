import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DetalhamentoProdutosModule } from './detalhamento-produtos/detalhamento-produtos.module';
import { FormatNumberPipe } from './app/format-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormatNumberPipe
  ],
  imports: [
    BrowserModule,
    DetalhamentoProdutosModule // Importa o módulo que contém o componente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
