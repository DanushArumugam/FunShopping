import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoginUserComponent } from './create-login-user.component';

describe('CreateLoginUserComponent', () => {
  let component: CreateLoginUserComponent;
  let fixture: ComponentFixture<CreateLoginUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateLoginUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
