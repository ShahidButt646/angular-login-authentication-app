import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfSignupComponent } from './mdf-signup.component';

describe('MdfSignupComponent', () => {
  let component: MdfSignupComponent;
  let fixture: ComponentFixture<MdfSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdfSignupComponent]
    });
    fixture = TestBed.createComponent(MdfSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
