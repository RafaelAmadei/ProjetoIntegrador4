import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVaziaComponent } from './ex6';

describe('ListaVaziaComponent', () => {
  let component: ListaVaziaComponent;
  let fixture: ComponentFixture<ListaVaziaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaVaziaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaVaziaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
