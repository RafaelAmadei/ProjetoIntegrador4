import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios9',
  imports: [],
  templateUrl: './exercicios9.html',
  styleUrl: './exercicios9.css',
})
export class Exercicios9 {nomeProduto = 'Notebook';
  estoque = 5;

  aumentar(): void {
    this.estoque++;
  }

  diminuir(): void {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }}
