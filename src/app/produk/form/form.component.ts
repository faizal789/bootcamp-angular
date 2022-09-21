import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdukService } from '../produk.service';
import { DepartmentRequest } from './department';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  inputDept !: FormGroup
  department = new DepartmentRequest()

  constructor(private builder : FormBuilder, private produkService : ProdukService,private router : Router) { }

  ngOnInit(): void {
    this.inputDept = this.builder.group({
      "name" : new FormControl(),
      "ket" : new FormControl()
    })
  }


  createDept(){
    this.department.param = {
      'name' : this.inputDept.controls['name'].value,
      'ket': this.inputDept.controls['ket'].value
    }
    this.produkService.postDept(this.department).subscribe(resp =>{
      if(resp.status == 200){ 
        alert('data berhasil ditambah')
        console.log(resp)
        this.router.navigate(['apps/produk'])
      }
    })
  }

}
