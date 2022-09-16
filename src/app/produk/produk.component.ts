import { Component, OnInit } from '@angular/core';
import { Kategori, Produk } from './produk';
import { ProdukService } from './produk.service';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.css']
})
export class ProdukComponent implements OnInit {

  constructor(private produkService : ProdukService) { }
  listKategori !: Kategori[]
  listProduk !: Produk[]
  ngOnInit(): void {
  this.produkService.getKategori().subscribe(
      (hasil : any)=>{
        this.listKategori = hasil
      },
      (error)=>{
        console.log(error)
      }    
        )
      }


      
}
