import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  templateUrl: './ex6.html',
  styleUrl: './ex6.css',
  standalone: false
})
export class ListaVaziaComponent {
  private nomesIniciais: string[] = ['Ana', 'Bruno', 'Carla', 'Diego', 'Elisa'];
  nomes: string[] = [...this.nomesIniciais];

  removerUltimo(): void {
    this.nomes.pop();
  }

  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [...this.nomesIniciais];
  }
}