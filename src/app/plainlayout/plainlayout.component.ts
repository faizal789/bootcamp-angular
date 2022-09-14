import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-plainlayout',
  templateUrl: './plainlayout.component.html',
  styleUrls: ['./plainlayout.component.css']
})
export class PlainlayoutComponent implements OnInit {
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
