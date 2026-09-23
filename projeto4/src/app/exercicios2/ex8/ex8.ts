import { Component } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex8',
  templateUrl: './ex8.html',
  styleUrl: './ex8.css',
  standalone: false
})
export class ProdutosComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', preco: 89.9, quantidade: 10 },
    { id: 2, nome: 'Mouse', preco: 49.9, quantidade: 5 },
    { id: 3, nome: 'Monitor', preco: 799.0, quantidade: 3 },
    { id: 4, nome: 'Headset', preco: 129.5, quantidade: 0 },
    { id: 5, nome: 'Webcam', preco: 159.9, quantidade: 8 }
  ];
}