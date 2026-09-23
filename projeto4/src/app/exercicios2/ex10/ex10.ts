import { Component } from '@angular/core';

interface ProdutoPromocao {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex10',
  templateUrl: './ex10.html',
  styleUrl: './ex10.css',
  standalone: false
})
export class PromocaoComponent {
  produtos: ProdutoPromocao[] = [
    { id: 1, nome: 'Teclado', preco: 89.9, quantidade: 10, promocao: true },
    { id: 2, nome: 'Mouse', preco: 49.9, quantidade: 5, promocao: false },
    { id: 3, nome: 'Monitor', preco: 799.0, quantidade: 3, promocao: false },
    { id: 4, nome: 'Headset', preco: 129.5, quantidade: 0, promocao: true },
    { id: 5, nome: 'Webcam', preco: 159.9, quantidade: 8, promocao: false }
  ];

  alternarPromocao(produto: ProdutoPromocao): void {
    produto.promocao = !produto.promocao;
  }
}