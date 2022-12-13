import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadetDepartementComponent } from './upadet-departement.component';

describe('UpadetDepartementComponent', () => {
  let component: UpadetDepartementComponent;
  let fixture: ComponentFixture<UpadetDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadetDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadetDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
