import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios11',
  imports: [],
  templateUrl: './exercicios11.html',
  styleUrl: './exercicios11.css',
})
export class Exercicios11 {produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagemCarrinho = '';

  get total(): number {
    return this.preco * this.quantidade;
  }

  aumentar(): void {
    this.quantidade++;
  }

  diminuir(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho(): void {
    this.mensagemCarrinho = `${this.quantidade}x ${this.produto} adicionado(s) ao carrinho.`;
  }}
