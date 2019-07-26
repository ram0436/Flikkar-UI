import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Constant } from '../shared/constant/constant'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

login(username: string, password: string) {
    return this.http.post<any>(`${Constant.baseUrl}/users/authenticate`, { username: username, password: password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', JSON.stringify(user));
            }
            return user;
        }));

}
logout() {
    localStorage.removeItem('token');
}
}
