import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNadaComponent } from './ex7';

describe('ListaNadaComponent', () => {
  let component: ListaNadaComponent;
  let fixture: ComponentFixture<ListaNadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNadaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaNadaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
