import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Constant } from '../constant/constant'
import { IUser } from '../model/IUser'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  private urlCreateUser: string ='user/CreateUser';

  constructor(private http: HttpClient) { }
  
  getUser():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.urlCreateUser);
  }
  //headers['Access-Control-Allow-Credentials'] = 'true';
  saveUserDetail(userData){
     return this.http.post<any>(Constant.baseUrl + this.urlCreateUser, userData)
  }
}
