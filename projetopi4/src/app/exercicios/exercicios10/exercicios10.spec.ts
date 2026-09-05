import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios10 } from './exercicios10';

describe('Exercicios10', () => {
  let component: Exercicios10;
  let fixture: ComponentFixture<Exercicios10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicios10],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicios10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
