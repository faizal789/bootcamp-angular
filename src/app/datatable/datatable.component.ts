import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatatableService } from './datatable.service';
import { DataUser, GetUserResponse } from './user';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
dataUser !: DataUser[];
formUser !: FormGroup;
page!: number;
  constructor(private datatableService : DatatableService, 
              private formBuilder : FormBuilder) { }
  


  ngOnInit(): void {
    this.getData()
    this.formUser = this.formBuilder.group({
      "name" : new FormControl(null),
      "job" : new FormControl(null),
    })
  }


  getData(){
    this.datatableService.getDataUser(this.page).subscribe(data => {
      if (data.status == 200) {
        this.dataUser = data.body?.data!;
        console.log(this.dataUser);
      } else if(data.status == 404) {
        alert('link salah')
      }
    })
  }

  createUser(){
    this.datatableService.createUser(this.formUser.value).subscribe(resp =>{
      if(resp.status == 201){
        alert('data berhasil ditambah')
        console.log(resp)
      }
    })
  }


  deleteUser(id : number){
    this.datatableService.deleteUser(id).subscribe(resp =>{
      if (resp.status == 200) {
        alert('data berhasil dihapus')
      } else {
        alert('gagal menghapus data')
      }
    })
  }

}
