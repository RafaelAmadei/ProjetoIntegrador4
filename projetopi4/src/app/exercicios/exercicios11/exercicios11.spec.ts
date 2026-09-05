import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios11 } from './exercicios11';

describe('Exercicios11', () => {
  let component: Exercicios11;
  let fixture: ComponentFixture<Exercicios11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicios11],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicios11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
