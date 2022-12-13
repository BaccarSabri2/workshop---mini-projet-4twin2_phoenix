import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBackooficeComponent } from './navbar-backoofice.component';

describe('NavbarBackooficeComponent', () => {
  let component: NavbarBackooficeComponent;
  let fixture: ComponentFixture<NavbarBackooficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBackooficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBackooficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
