import { Component,OnInit } from '@angular/core';
import { LoginUser } from '../login-user';
import { LoginUserService } from '../login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-login-user',
  templateUrl: './create-login-user.component.html',
  styleUrl: './create-login-user.component.css'
})
export class CreateLoginUserComponent implements OnInit{

  loginUser : LoginUser = new LoginUser();

  constructor(private loginUserService : LoginUserService, private router : Router){}

  ngOnInit():void{}

  saveLoginUser(){
    this.loginUserService.createLoginUser(this.loginUser).subscribe(data=>{
      console.log(data);
      this.gotoLoginUserList();
    },
      error => console.log(error));
  }
  //navigate to LoginUserList page
  gotoLoginUserList(){
    //userLoginView is specified in app-routing.module
    this.router.navigate(['/userLoginView']);
  }

  onSubmit(){
    console.log(this.loginUser);
    this.saveLoginUser();
  }

}
