import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios7 } from './exercicios7';

describe('Exercicios7', () => {
  let component: Exercicios7;
  let fixture: ComponentFixture<Exercicios7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicios7],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicios7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
