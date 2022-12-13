import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteDetailComponent } from './universite-detail/universite-detail.component';
import { UniversitesComponent } from './universites/universites.component';

const routes: Routes = [
  {path:'', component:UniversitesComponent, children:[
   // {path:'Detail', component:UniversiteDetailComponent }
   {path:'Detail/:id', component:UniversiteDetailComponent }
  ]},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
