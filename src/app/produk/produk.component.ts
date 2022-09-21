import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Halaman } from '../Models/halaman';
import { Department, Kategori, Produk } from './produk';
import { ProdukService } from './produk.service';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.css']
})
export class ProdukComponent implements OnInit {

  constructor(private produkService : ProdukService,private formBuild : FormBuilder) { }
  jumlahPerPage = [5,10,20,50];
  formPage !: FormGroup
  listDept !: Department[]
  listKategori !: Kategori[]
  listProduk !: Produk[]
  hal = new Halaman()
  formCari !: FormGroup
  ngOnInit(): void {
    this.getKategory()
    this.getDepartment()
    this.formCari = this.formBuild.group({
        "name" : new FormControl(null),
        "deptId": new FormControl(null)
      })
    this.formPage = this.formBuild.group({
      "size" : new FormControl(this.hal.size)
    })
    }

  getCariKategori(){
    this.hal.pagenumber = 0;
    this.hal.param = {
      'nama' : this.formCari.controls['name'].value,
      'deptId': this.formCari.controls['deptId'].value
    }
    this.getKategory() 
  }

  sizeChangeEvent(){
    this.hal = new Halaman()
    this.hal.size = parseInt(this.formPage.controls['size'].value);
    this.getCariKategori();
  }

  getKategory(){
    this.produkService.getKategori(this.hal).subscribe({
      next : (hasil) =>{
        if (hasil && hasil.data) {
          this.hal = hasil.hal
          this.listKategori = hasil.data
        } else {
          this.listKategori = []
          this.hal = new Halaman()
        }
      }
     })
  }

  getDepartment(){
    this.produkService.getDept().subscribe(
      {
      next : (hasil) =>{    
        this.listDept = hasil
      }
     })
  }


  pageChangeEvent(event: number){
   this.hal.pagenumber = event;
   this.getKategory()
}
  
}
