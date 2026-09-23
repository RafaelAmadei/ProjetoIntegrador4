import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.html',
  styleUrl: './ex2.css',
  standalone: false
})
export class UsuarioComponent {
  usuarioLogado = false;

  alternarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }
}