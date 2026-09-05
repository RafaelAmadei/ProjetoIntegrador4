import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios3 } from './exercicios3';

describe('Exercicios3', () => {
  let component: Exercicios3;
  let fixture: ComponentFixture<Exercicios3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicios3],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicios3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
