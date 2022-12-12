import { SujetDetailComponent } from '../../Components/formation/sujet-detail/sujet-detail.component';
import { FormationDetailComponent } from '../../Pages/formation/formation-detail/formation-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation.component';

const routes: Routes = [
  {path:'', component:FormationComponent, children:[
    {path:'formation-detail/:id', component:FormationDetailComponent},
    {path:'sujet-detail/:id', component:SujetDetailComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
