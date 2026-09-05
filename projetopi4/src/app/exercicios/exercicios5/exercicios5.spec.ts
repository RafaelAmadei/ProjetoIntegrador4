import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios5 } from './exercicios5';

describe('Exercicios5', () => {
  let component: Exercicios5;
  let fixture: ComponentFixture<Exercicios5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicios5],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicios5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
