import { Component } from '@angular/core';

@Component({
  selector: 'app-ex12',
  templateUrl: './ex12.html'
})
export class Ex12 {

  nome = '';
  email = '';

  cadastrado = false;

  cadastrar() {
    this.cadastrado = true;
  }

}