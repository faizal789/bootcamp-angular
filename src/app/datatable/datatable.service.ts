import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUserResponse, RequestBody } from './user';
import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  baseUrl : string = 'https://reqres.in';

  constructor(private http: HttpClient ) {  }

  getDataUser(page : number): Observable<HttpResponse<GetUserResponse>>{
    let params = new HttpParams();
    params = params.append('page',page)
    return this.http.get<GetUserResponse>(`${this.baseUrl}/api/users`,{params : params, observe: 'response'})
  }

  createUser(body : RequestBody){
    return this.http.post(`${this.baseUrl}/api/users`, body, {observe : 'response'})
  }

  deleteUser(id : number){
    return this.http.delete(`${this.baseUrl}/api/users/${id}`,{observe : "response"})
  }

}
