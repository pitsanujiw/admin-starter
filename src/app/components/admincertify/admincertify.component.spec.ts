import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincertifyComponent } from './admincertify.component';

describe('AdmincertifyComponent', () => {
  let component: AdmincertifyComponent;
  let fixture: ComponentFixture<AdmincertifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincertifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincertifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
