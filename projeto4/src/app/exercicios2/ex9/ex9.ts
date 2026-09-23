import { Component } from '@angular/core';
import { Produto } from '../ex8/ex8';

@Component({
  selector: 'app-ex9',
  templateUrl: './ex9.html',
  styleUrl: './ex9.css',
  standalone: false
})
export class ClassificacaoComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 89.9, quantidade: 10 },
    { id: 2, nome: 'Mouse', preco: 49.9, quantidade: 5 },
    { id: 3, nome: 'Monitor', preco: 799.0, quantidade: 3 },
    { id: 4, nome: 'Headset', preco: 129.5, quantidade: 0 },
    { id: 5, nome: 'Webcam', preco: 159.9, quantidade: 8 }
  ];

  statusEstoque(produto: Produto): string {
    if (produto.quantidade === 0) return 'Sem estoque';
    if (produto.quantidade <= 5) return 'Estoque baixo';
    return 'Estoque disponível';
  }
}