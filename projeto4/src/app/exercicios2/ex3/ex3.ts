import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.html',
  styleUrl: './ex3.css',
  standalone: false
})
export class IdadeComponent {
  idade = 0;

  aumentar(): void {
    this.idade++;
  }

  diminuir(): void {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}