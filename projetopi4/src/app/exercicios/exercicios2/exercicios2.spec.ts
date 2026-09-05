import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios2 } from './exercicios2';

describe('Exercicios2', () => {
  let component: Exercicios2;
  let fixture: ComponentFixture<Exercicios2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicios2],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicios2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
