import { Component } from '@angular/core';

@Component({
  selector: 'app-desafiofinal',
  imports: [],
  templateUrl: './desafiofinal.html',
  styleUrl: './desafiofinal.css',
})
export class Desafiofinal {nomeAluno = '';
  quantidadeDisciplinas = 1;
  mensagemMatricula = '';

  get nomeInvalido(): boolean {
    return !this.nomeAluno.trim();
  }

  aumentarDisciplinas(): void {
    this.quantidadeDisciplinas++;
  }

  diminuirDisciplinas(): void {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  realizarMatricula(): void {
    this.mensagemMatricula =
      `Aluno ${this.nomeAluno} matriculado em ${this.quantidadeDisciplinas} disciplina(s).`;}}
