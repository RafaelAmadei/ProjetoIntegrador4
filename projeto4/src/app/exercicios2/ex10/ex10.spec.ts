import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocaoComponent } from './ex10';

describe('PromocaoComponent', () => {
  let component: PromocaoComponent;
  let fixture: ComponentFixture<PromocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromocaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PromocaoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
