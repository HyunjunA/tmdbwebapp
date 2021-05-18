import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompzeroComponent } from './compzero.component';

describe('CompzeroComponent', () => {
  let component: CompzeroComponent;
  let fixture: ComponentFixture<CompzeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompzeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompzeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
