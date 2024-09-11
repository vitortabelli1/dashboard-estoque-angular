import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css', './media-querie.css'],
  standalone: true,
  imports: [MatIconModule, MatListModule],  // Importa os módulos diretamente
})
export class SidebarComponent {}
