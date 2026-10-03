import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ex4 } from './ex4/ex4';
import { Ex5 } from './ex5/ex5';
import { Ex6 } from './ex6/ex6';
import { Ex7 } from './ex7/ex7';
import { Ex8 } from './ex8/ex8';
import { Ex9 } from './ex9/ex9';
import { Ex10 } from './ex10/ex10';
import { Ex11 } from './ex11/ex11';
import { Ex12 } from './ex12/ex12';

@NgModule({
  declarations: [
    Ex4,
    Ex5,
    Ex6,
    Ex7,
    Ex8,
    Ex9,
    Ex10,
    Ex11,
    Ex12
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    Ex4,
    Ex5,
    Ex6,
    Ex7,
    Ex8,
    Ex9,
    Ex10,
    Ex11,
    Ex12
  ]
})
export class Exercicios1Module {}