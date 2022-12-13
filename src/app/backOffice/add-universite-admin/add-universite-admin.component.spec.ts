import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniversiteAdminComponent } from './add-universite-admin.component';

describe('AddUniversiteAdminComponent', () => {
  let component: AddUniversiteAdminComponent;
  let fixture: ComponentFixture<AddUniversiteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUniversiteAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUniversiteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
