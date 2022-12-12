import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetDetailComponent } from './sujet-detail.component';

describe('SujetDetailComponent', () => {
  let component: SujetDetailComponent;
  let fixture: ComponentFixture<SujetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SujetDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SujetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
