import { HttpClient,HttpParams, HttpResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Kategori } from './produk';

@Injectable({
  providedIn: 'root'
})
export class ProdukService {

  constructor(private http: HttpClient) { 

    
  }
  getKategori(): Observable<any>{
    return this.http.get(`${environment.baseUrl}/kategorilist`).pipe(map(data => data))
  }

  getProduk(): Observable<any>{
    return this.http.get(`${environment.baseUrl}/produklist`).pipe(map(data => data))
  }

}
