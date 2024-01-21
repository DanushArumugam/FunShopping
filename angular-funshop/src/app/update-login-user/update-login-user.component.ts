import { Component,OnInit } from '@angular/core';
import { LoginUser } from '../login-user';
import { LoginUserService } from '../login-user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-login-user',
  templateUrl: './update-login-user.component.html',
  styleUrl: './update-login-user.component.css'
})
export class UpdateLoginUserComponent implements OnInit{

  cust : number;
  constructor(private loginUserService : LoginUserService,
     private route : ActivatedRoute,
     private router : Router){}

  

  loginUser : LoginUser = new LoginUser();

  ngOnInit():void{
    this.cust = this.route.snapshot.params['custId'];
    this.loginUserService.getLoginUserByPhNo(this.cust).subscribe(data => {
      this.loginUser = data;
    },
      error => console.log(error));
  }

  onSubmit(){
    this.loginUserService.updateLoginUser(this.cust,this.loginUser).subscribe(data=>{
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

}
