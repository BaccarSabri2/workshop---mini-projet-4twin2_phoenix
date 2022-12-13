import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBackOfficeComponent } from './footer-back-office.component';

describe('FooterBackOfficeComponent', () => {
  let component: FooterBackOfficeComponent;
  let fixture: ComponentFixture<FooterBackOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBackOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBackOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
