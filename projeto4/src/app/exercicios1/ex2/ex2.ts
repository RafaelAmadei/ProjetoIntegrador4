import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-ex2',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './ex2.html'
})
export class Ex2 {
  produto = 'Teclado';
  preco = 150;
  quantidade = 3;
}