import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  standalone: true,
  imports: [],
  templateUrl: './ex1.html'
})
export class Ex1 {
  nome = 'Carlos';
  idade = 25;
  curso = 'Sistemas de Informação';
}