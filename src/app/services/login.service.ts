import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Credentials{
  email : string,
  password : number
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  private basePath = 'https://mean-back.herokuapp.com/api/Users';
  constructor(private http: HttpClient) { 
  }

  public login(credentials): Observable<Object>{
    return this.http.post<Credentials>(`${this.basePath}/login`, credentials)
  }

  public logout(token): Observable<Object>{
    const params = new HttpParams().set('access_token', token);
    
    return this.http.post<Credentials>(`${this.basePath}/logout`, { 
      access_token : token
    },{ 
      params 
    })
  }

  public setToken(token):void{
    sessionStorage.setItem('token', token)
  }

  public getToken():string{
    return sessionStorage.getItem('token');
  }

  public removeToken():void{
    sessionStorage.removeItem('token');
  }
}
