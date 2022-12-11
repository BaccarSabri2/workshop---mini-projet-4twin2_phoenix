import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { option, User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = environment.backUrl;


  constructor(private http: HttpClient) { }

  login(email: any, password: any): Observable<any> {
    return this.http.post(this.url + '/authenticate',
      {
        email,
        password
      }
    )
  }
  updateUser(etudiant: User) {

    return this.http.put<User>(this.url + '/etudiants/update', etudiant)

  }
  register(user: User): Observable<any> {
    return this.http.post<HttpResponse<any>>(this.url + '/etudiants', user)


  }

  storeUserData(token: any, user: any) {
    localStorage.setItem('auth', token);
    localStorage.setItem('user', JSON.stringify(user));

  }

  public getUser(): any {
    const user = localStorage.getItem('user');
    if (user) {
      return (user);
    }
    return {};
  }

  public getToken(): any {
    return localStorage.getItem('auth');
  }

  getIdfromToken(): string {
    const jwtData = this.getToken().split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);
    return decodedJwtData.user_id;
  }


  isAuthenticated(): boolean {

    const token: any = localStorage.getItem('auth');
    return token;
  }
  signOut() {

    localStorage.clear();


  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
