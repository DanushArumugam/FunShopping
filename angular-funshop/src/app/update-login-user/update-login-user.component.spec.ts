import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoginUserComponent } from './update-login-user.component';

describe('UpdateLoginUserComponent', () => {
  let component: UpdateLoginUserComponent;
  let fixture: ComponentFixture<UpdateLoginUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateLoginUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateLoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
