import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { PlainlayoutComponent } from './plainlayout/plainlayout.component';

const routes: Routes = [
{
  component :MainlayoutComponent, path : 'apps',children:[
    {
        component :HomeComponent, path : 'home', title : "Home"
    }
  ]
},
{
  component :PlainlayoutComponent, path : '',children:[
    {
      component :AboutComponent ,path : 'about', title : "About"
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
