import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdadeComponent } from './ex3';

describe('Ex3', () => {
  let component: IdadeComponent;
  let fixture: ComponentFixture<IdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdadeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IdadeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
