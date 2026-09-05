import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios5',
  imports: [],
  templateUrl: './exercicios5.html',
  styleUrl: './exercicios5.css',
})
export class Exercicios5 {curtidas = 0;

  curtir(): void {
    this.curtidas++;
  }}
