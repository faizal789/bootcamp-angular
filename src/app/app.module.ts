import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { PlainlayoutComponent } from './plainlayout/plainlayout.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './filter.pipe';
import { DatatableComponent } from './datatable/datatable.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdukComponent } from './produk/produk.component';
import { ProdukkategoriComponent } from './produkkategori/produkkategori.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormComponent } from './produk/form/form.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MainlayoutComponent,
    PlainlayoutComponent,
    FilterPipe,
    DatatableComponent,
    ProdukComponent,
    ProdukkategoriComponent,
    FormComponent,
    MahasiswaComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
