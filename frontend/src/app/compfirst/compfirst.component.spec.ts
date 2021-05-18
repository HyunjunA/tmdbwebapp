import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompfirstComponent } from './compfirst.component';

describe('CompfirstComponent', () => {
  let component: CompfirstComponent;
  let fixture: ComponentFixture<CompfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompfirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
