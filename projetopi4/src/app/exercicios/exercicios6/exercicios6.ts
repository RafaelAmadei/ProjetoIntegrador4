import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios6',
  imports: [],
  templateUrl: './exercicios6.html',
  styleUrl: './exercicios6.css',
})
export class Exercicios6 {quantidade = 0;

  incrementar(): void {
    this.quantidade++;
  }

  decrementar(): void {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }}
