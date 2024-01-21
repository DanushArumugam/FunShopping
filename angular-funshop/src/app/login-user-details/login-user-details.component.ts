import { Component,OnInit } from '@angular/core';
import { LoginUser } from '../login-user';
import { LoginUserService } from '../login-user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-user-details',
  templateUrl: './login-user-details.component.html',
  styleUrl: './login-user-details.component.css'
})
export class LoginUserDetailsComponent implements OnInit{
  cust:number
  loginUser : LoginUser

  constructor(private route:ActivatedRoute, private loginUserService : LoginUserService){}

  ngOnInit(){
    this.cust = this.route.snapshot.params['custId'];
    this.loginUser = new LoginUser();
    this.loginUserService.getLoginUserByPhNo(this.cust).subscribe(data=>{
      console.log(data);
      this.loginUser = data;
    });
  }

}
