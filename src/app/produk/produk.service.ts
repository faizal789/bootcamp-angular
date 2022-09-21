import { HttpClient,HttpParams, HttpResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Halaman } from '../Models/halaman';
import { DepartmentRequest } from './form/department';
@Injectable({
  providedIn: 'root'
})
export class ProdukService {

  constructor(private http: HttpClient) { 

    
  }
  getKategori(page : Halaman): Observable<any>{
    return this.http.post(`${environment.baseUrl}/kategoridt`,page).pipe(map(data => data))
  }

  getProduk(): Observable<any>{
    return this.http.get(`${environment.baseUrl}/produklist`).pipe(map(data => data))
  }

  getDept(): Observable<any>{
    return this.http.get(`${environment.baseUrl}/deptlist`).pipe(map(data => data))
  }

  postDept(value : DepartmentRequest){
    return this.http.post(`${environment.baseUrl}/deptpost`, value ,{observe : 'response'}).pipe(map(data => data))
  }


}
