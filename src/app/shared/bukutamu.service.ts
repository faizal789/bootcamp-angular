import { Injectable } from '@angular/core';
import { BukuTamu } from '../Models/Bukutamu';

@Injectable({
  providedIn: 'root'
})
export class BukutamuService {

  constructor() {
  }

  simpanBuku(bukuTamu: BukuTamu): string {
    console.log(bukuTamu)
    return "Sukses"
  }
}
