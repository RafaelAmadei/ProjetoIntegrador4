import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios4 } from './exercicios4';

describe('Exercicios4', () => {
  let component: Exercicios4;
  let fixture: ComponentFixture<Exercicios4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicios4],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicios4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
