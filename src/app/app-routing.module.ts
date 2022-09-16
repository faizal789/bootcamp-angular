import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth/auth.guard';
import { DataComponent } from './data/data.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HomeComponent } from './home/home.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { PlainlayoutComponent } from './plainlayout/plainlayout.component';
import { ProdukComponent } from './produk/produk.component';
import { ProdukkategoriComponent } from './produkkategori/produkkategori.component';

const routes: Routes = [
{
  component :MainlayoutComponent, path : 'apps',children:[
    {
        component :HomeComponent, path : 'home', title : "Home"
    },
    {
        component :DataComponent, path : 'data',
        canActivate:[AuthGuard] ,title : "data"
    }
  ]
},
{
  component :PlainlayoutComponent, path : '',children:[
    {
      component :AboutComponent ,path : 'about', title : "About"
    },
    {
      component :ProdukComponent ,path : 'produk', title : "produk"
    },
    {
      component :ProdukkategoriComponent ,path : 'produkkategori', title : "produk dan kategori"
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
