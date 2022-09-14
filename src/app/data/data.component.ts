import { Component, OnInit } from '@angular/core';
import { Student } from '../plainlayout/student';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  student !: Student[];
  searchValue : string = '';
  
    constructor() { }
  
    ngOnInit(): void {
      this.student = [
        {
          nama : "Faizal",
          jurusan : "Sistem Informasi",
          nilai : 70
        },
        {
          nama : "Rafli",
          jurusan : "Teknik",
          nilai : 60
        },
        {
          nama : "Felix",
          jurusan : "Informatika",
          nilai : 80
        }
      ]
    }  
}
