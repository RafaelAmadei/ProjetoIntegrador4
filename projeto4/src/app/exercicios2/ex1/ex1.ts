import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.html',
  styleUrl: './ex1.css',
  standalone: false
})
export class MensagemComponent {
  mensagemVisivel = false;

  alternarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}