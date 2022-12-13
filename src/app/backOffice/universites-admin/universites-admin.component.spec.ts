import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitesAdminComponent } from './universites-admin.component';

describe('UniversitesAdminComponent', () => {
  let component: UniversitesAdminComponent;
  let fixture: ComponentFixture<UniversitesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
