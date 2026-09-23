import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomesComponent } from './ex5';

describe('EstoqueComponent', () => {
  let component: NomesComponent;
  let fixture: ComponentFixture<NomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NomesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
