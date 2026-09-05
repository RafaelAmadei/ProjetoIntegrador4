import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios8',
  imports: [],
  templateUrl: './exercicios8.html',
  styleUrl: './exercicios8.css',
})
export class Exercicios8 { produto = 'Mouse Gamer';
  preco = 150;
  quantidade = 2;

  get total(): number {
    return this.preco * this.quantidade;
  }}
