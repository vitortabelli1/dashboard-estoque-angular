import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { DashboardDataService } from '../services/dashboard-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhamento-produtos',
  templateUrl: './detalhamento-produtos.component.html',
  styleUrls: ['./detalhamento-produtos.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DetalhamentoProdutosComponent implements OnInit {
  produtos: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private dashboardDataService: DashboardDataService
  ) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe({
      next: (data: any[]) => {
        this.produtos = data;
        this.calculateTotals();
      },
      error: (err: any) => {
        console.error('Erro ao carregar produtos:', err);
      }
    });
  }

  calculateTotals(): void {
    const totalFaturamento = this.produtos.reduce((sum, produto) => sum + (produto.qtdEstoque * produto.valorEstoque), 0);
    const totalValorEstoque = this.produtos.reduce((sum, produto) => sum + produto.valorEstoque, 0);
    const totalRupturaEstoque = this.produtos.filter(p => p.qtdEstoque === 0).length; // Ajuste conforme necessário
    const totalGiroEstoque = this.produtos.reduce((sum, produto) => sum + produto.qtdEstoque, 0);

    this.dashboardDataService.updateTotals({
      faturamento: totalFaturamento,
      valorEstoque: totalValorEstoque,
      rupturaEstoque: totalRupturaEstoque,
      giroEstoque: totalGiroEstoque
    });
  }
}
