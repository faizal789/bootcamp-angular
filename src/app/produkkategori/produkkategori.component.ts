import { Component, OnInit } from '@angular/core';
import { Produk } from '../produk/produk';
import { ProdukService } from '../produk/produk.service';

@Component({
  selector: 'app-produkkategori',
  templateUrl: './produkkategori.component.html',
  styleUrls: ['./produkkategori.component.css']
})
export class ProdukkategoriComponent implements OnInit {

  constructor(private produkservice : ProdukService) { }
  listProduk !: Produk[]
  ngOnInit(): void {

    this.produkservice.getProduk().subscribe(
      (hasil : any)=>{
        this.listProduk = hasil
      },
      (error)=>{
        console.log(error)
      }    
     )
  }

}
