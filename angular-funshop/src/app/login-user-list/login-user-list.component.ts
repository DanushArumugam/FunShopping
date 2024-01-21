import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../login-user';
import {LoginUserService} from '../login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user-list',
  templateUrl: './login-user-list.component.html',
  styleUrl: './login-user-list.component.css'
})

export class LoginUserListComponent implements OnInit{
  users: LoginUser[];

  constructor(private loginUserService : LoginUserService, private router : Router){}

  ngOnInit():void{

    this.getLoginUser();
    // this.users=[
    //   {
    //   "phoneNumber" : 123456789,
    //   "emailId" : "test1@gmail.com",
    //   "password" : "test1",
    //   "oldPassword" : "test1old"
    // },
    // {
    //   "phoneNumber" : 987654321,
    //   "emailId" : "test2@gmail.com",
    //   "password" : "test2",
    //   "oldPassword" : "test2old"
    // }
    // ];
  }

  private getLoginUser(){
    this.loginUserService.getLoginUserList().subscribe(data=>{
      this.users = data;
    });
  }

  updateloginUser(custId: number){
    this.router.navigate(['updateLoginUser',custId]);
  }

  deleteLoginUser(custId:number){
    this.loginUserService.deleteLoginUser(custId).subscribe(data=>{
      console.log(data);
      this.getLoginUser();
    })
  }

  loginuserDetails(custId:number){
    this.router.navigate(['loginUserDetails',custId]);
  }


}
