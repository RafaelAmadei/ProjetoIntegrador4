import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  templateUrl: './ex8.html'
})
export class Ex8 {

  produtos = [
    {
      nome: 'Notebook',
      preco: 3500
    },
    {
      nome: 'Mouse',
      preco: 80
    },
    {
      nome: 'Teclado',
      preco: 150
    },
    {
      nome: 'Monitor',
      preco: 900
    }
  ];

}