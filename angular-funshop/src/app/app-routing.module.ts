import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginUserListComponent} from './login-user-list/login-user-list.component';
import {CreateLoginUserComponent} from './create-login-user/create-login-user.component';
import {UpdateLoginUserComponent} from './update-login-user/update-login-user.component';
import {LoginUserDetailsComponent} from './login-user-details/login-user-details.component';

const routes: Routes = [
  {path:'userLoginView', component: LoginUserListComponent},
  {path:'createLoginUser', component: CreateLoginUserComponent},
  {path:'', redirectTo:'userLogin', pathMatch:'full'},
  {path:'updateLoginUser/:custId', component: UpdateLoginUserComponent},
  {path:'loginUserDetails/:custId', component: LoginUserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
