import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios8 } from './exercicios8';

describe('Exercicios8', () => {
  let component: Exercicios8;
  let fixture: ComponentFixture<Exercicios8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicios8],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicios8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
