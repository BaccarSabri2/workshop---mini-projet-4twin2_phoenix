import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSujetComponent } from './all-sujet.component';

describe('AllSujetComponent', () => {
  let component: AllSujetComponent;
  let fixture: ComponentFixture<AllSujetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSujetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
