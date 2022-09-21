import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth/auth.guard';
import { DatatableComponent } from './datatable/datatable.component';
import { HomeComponent } from './home/home.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { PlainlayoutComponent } from './plainlayout/plainlayout.component';
import { FormComponent } from './produk/form/form.component';
import { ProdukComponent } from './produk/produk.component';
import { ProdukkategoriComponent } from './produkkategori/produkkategori.component';

const routes: Routes = [
{
  component :MainlayoutComponent, path : 'apps',children:[
    {
        component :HomeComponent, path : 'home', title : "Home"
    },
    {
        component :MahasiswaComponent, path : 'mahasiswa',
        canActivate:[AuthGuard] ,title : "mahasiswa"
    },
    {
      component :ProdukComponent ,path : 'produk', title : "produk"
    },
    {
      component :ProdukkategoriComponent ,path : 'produkkategori', title : "produk dan kategori"
    },
    {
      component :FormComponent ,path : 'inputdept', title : "insert departement"
    }
  ]
},

{
  component :PlainlayoutComponent, path : '',children:[
    {
      component :AboutComponent ,path : 'about', title : "About"
    } 
  ]
},


{
  component :DatatableComponent, path : 'datatable', 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
