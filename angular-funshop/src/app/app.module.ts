import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUserListComponent } from './login-user-list/login-user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateLoginUserComponent } from './create-login-user/create-login-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateLoginUserComponent } from './update-login-user/update-login-user.component';
import { LoginUserDetailsComponent } from './login-user-details/login-user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserListComponent,
    CreateLoginUserComponent,
    UpdateLoginUserComponent,
    LoginUserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
