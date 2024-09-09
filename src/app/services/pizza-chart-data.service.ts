// src/app/services/pizza-chart-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaChartDataService {
  private apiUrl = 'assets/mock-api/produtos.mock.json'; // Caminho para o arquivo JSON

  constructor(private http: HttpClient) {}

  getPieChartData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
