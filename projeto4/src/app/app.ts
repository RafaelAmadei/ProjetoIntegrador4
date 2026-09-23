import { Component } from '@angular/core';
import { Exercicios2Module } from './exercicios2/exercicios2-module';

@Component({
  selector: 'app-root',
  imports: [Exercicios2Module], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}