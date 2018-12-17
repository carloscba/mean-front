import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country{
  name : string,
  population : number
}

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  private basePath = 'https://mean-back.herokuapp.com/api/Countries';
  constructor(private http: HttpClient) { 

  }

  /**
   * @param token accesstoken
   */
  public get(token): Observable<Object>{
    const params = new HttpParams().set('access_token', token);
    return this.http.get<Country>(this.basePath, {params})
  }

  /**
   * 
   * @param item Country object
   * @param token accesstoken
   */
  public post(item, token){
    const params = new HttpParams().set('access_token', token);
    return this.http.post<Country>(this.basePath,item, {params})
  }
}
