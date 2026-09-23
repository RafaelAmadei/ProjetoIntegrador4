import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.html',
  styleUrl: './ex5.css',
  standalone: false
})
export class NomesComponent {
  nomes: string[] = ['Ana', 'Bruno', 'Carla', 'Diego', 'Elisa'];
}