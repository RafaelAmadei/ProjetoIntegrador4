import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios6 } from './exercicios6';

describe('Exercicios6', () => {
  let component: Exercicios6;
  let fixture: ComponentFixture<Exercicios6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicios6],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicios6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
