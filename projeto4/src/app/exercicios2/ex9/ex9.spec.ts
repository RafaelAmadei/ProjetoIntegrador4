import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoComponent } from './ex9';

describe('ClassificacaoComponent', () => {
  let component: ClassificacaoComponent;
  let fixture: ComponentFixture<ClassificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassificacaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassificacaoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
