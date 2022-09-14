import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent implements OnInit {

  isLogin: boolean = false;

  constructor(private authService: AuthService) { }
  tampilHilang: string = "display:none;";

  ngOnInit(): void {
    this.getAuth();
  }

  getAuth() {
    this.isLogin = this.authService.isAuthenticated()
  }
  bukaTutup(): void {
    const sidebarToggle = document.body.querySelector("#sidebarToggle")
    if (sidebarToggle) {
      document.body.classList.toggle('sb-sidenav-toggled');
    }
  }
  dropdown(): void {
    if (this.tampilHilang === "display:none;") {
      this.tampilHilang = "display:block; left:-98px";
    } else {
      this.tampilHilang = "display:none;"
    }

  }

  collapse(param: string): void {
    const collapseLayoutDiv = document.getElementById(param);
    if (collapseLayoutDiv?.style.display === "block") {
      collapseLayoutDiv.style.display = "none";
    } else {
      if (collapseLayoutDiv) {
        collapseLayoutDiv.style.display = "block"
      }
    }
  }

  login() {
    console.log(`before login : ${this.isLogin}`)
    this.authService.login();
    this.getAuth()
    console.log(`after login : ${this.isLogin}`)
  }

  logout() {
    this.authService.logout();
    this.getAuth()

  }


}
