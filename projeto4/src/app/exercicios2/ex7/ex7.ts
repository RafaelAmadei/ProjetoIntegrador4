import { Component } from '@angular/core';

@Component({
  selector: 'app-ex7',
  templateUrl: './ex7.html',
  styleUrl: './ex7.css',
  standalone: false
})
export class ListaNadaComponent {
  disciplinas: string[] = [
    'Matemática', 'Português', 'História', 'Geografia', 'Ciências', 'Artes'
  ];
}