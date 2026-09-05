import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios10',
  imports: [],
  templateUrl: './exercicios10.html',
  styleUrl: './exercicios10.css',
})
export class Exercicios10 { usuario = '';
  senha = '';
  mensagemBoasVindas = '';

  get camposInvalidos(): boolean {
    return !this.usuario || !this.senha;
  }

  entrar(): void {
    this.mensagemBoasVindas = `Bem-vindo, ${this.usuario}!`;
  }}
