import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MensagemComponent } from './ex1/ex1';
import { UsuarioComponent } from './ex2/ex2';
import { IdadeComponent } from './ex3/ex3';
import { EstoqueComponent } from './ex4/ex4';
import { NomesComponent } from './ex5/ex5';
import { ListaVaziaComponent } from './ex6/ex6';
import { ListaNadaComponent } from './ex7/ex7';
import { ProdutosComponent } from './ex8/ex8';
import { ClassificacaoComponent } from './ex9/ex9';
import { PromocaoComponent } from './ex10/ex10';
import { FiltroComponent } from './ex11/ex11';
import { CadastroComponent } from './ex12/ex12';

@NgModule({
  declarations: [
    MensagemComponent,
    UsuarioComponent,
    IdadeComponent,
    EstoqueComponent,
    NomesComponent,
    ListaVaziaComponent,
    ListaNadaComponent,
    ProdutosComponent,
    ClassificacaoComponent,
    PromocaoComponent,
    FiltroComponent,
    CadastroComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    MensagemComponent,
    UsuarioComponent,
    IdadeComponent,
    EstoqueComponent,
    NomesComponent,
    ListaVaziaComponent,
    ListaNadaComponent,
    ProdutosComponent,
    ClassificacaoComponent,
    PromocaoComponent,
    FiltroComponent,
    CadastroComponent
  ]
})
export class Exercicios2Module { }