import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BukuTamu } from '../Models/Bukutamu';
import { BukutamuService } from '../shared/bukutamu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formKontak !: FormGroup;
  constructor(private formBuild : FormBuilder, private bukutamuService:BukutamuService) {}


  ngOnInit(): void {
    this.formKontak = this.formBuild.group({
      "nama" : new FormControl(null,[Validators.required,Validators.minLength(3)]),
      "alamat" : new FormControl(null,Validators.required),
      "email" : new FormControl(null,[Validators.required,Validators.email]),
      "nomorTelp" : new FormControl(null,Validators.required)

    })
  }


  simpanForm():void{
    let bukutamu = new BukuTamu;
    bukutamu.nama = this.formKontak.controls['nama'].value;
    bukutamu.alamat = this.formKontak.controls['alamat'].value;
    bukutamu.email = this.formKontak.controls['email'].value;
    bukutamu.nomorTelp = this.formKontak.controls['nomorTelp'].value;
    this.bukutamuService.simpanBuku(bukutamu)
  }

}
