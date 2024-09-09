import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  private totalFaturamentoSource = new BehaviorSubject<number>(0);
  totalFaturamento$ = this.totalFaturamentoSource.asObservable();

  private totalValorEstoqueSource = new BehaviorSubject<number>(0);
  totalValorEstoque$ = this.totalValorEstoqueSource.asObservable();

  private totalRupturaEstoqueSource = new BehaviorSubject<number>(0);
  totalRupturaEstoque$ = this.totalRupturaEstoqueSource.asObservable();

  private totalGiroEstoqueSource = new BehaviorSubject<number>(0);
  totalGiroEstoque$ = this.totalGiroEstoqueSource.asObservable();

  updateTotals(totals: { faturamento: number, valorEstoque: number, rupturaEstoque: number, giroEstoque: number }): void {
    this.totalFaturamentoSource.next(totals.faturamento);
    this.totalValorEstoqueSource.next(totals.valorEstoque);
    this.totalRupturaEstoqueSource.next(totals.rupturaEstoque);
    this.totalGiroEstoqueSource.next(totals.giroEstoque);
  }
}
