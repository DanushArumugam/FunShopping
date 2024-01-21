import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from './login-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private baseUrl ="http://localhost:8081/api/v1/loginUsers";
  private custId = "custid";

  constructor(private httpClient:HttpClient) { }

  getLoginUserList(): Observable<LoginUser[]>{
      return this.httpClient.get<LoginUser[]>(`${this.baseUrl}`)
  }

  createLoginUser(loginUser : LoginUser): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,loginUser);
  }

  getLoginUserByPhNo(cus : number):Observable<LoginUser>{
    console.log(cus);
    return this.httpClient.get<LoginUser>(`${this.baseUrl}/${this.custId}/${cus}`);
  }

  updateLoginUser(cus : number, loginUser : LoginUser):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${this.custId}/${cus}`, loginUser);
  }

  deleteLoginUser(cus : number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${this.custId}/${cus}`);
  }
}
