import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  templateUrl: './ex10.html'
})
export class Ex10 {

  preco = 100;
  promocao = true;

  get precoFinal(): number {
    if (this.promocao) {
      return this.preco * 0.9;
    }

    return this.preco;
  }

}