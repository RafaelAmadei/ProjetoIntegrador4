import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios9 } from './exercicios9';

describe('Exercicios9', () => {
  let component: Exercicios9;
  let fixture: ComponentFixture<Exercicios9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicios9],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicios9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
