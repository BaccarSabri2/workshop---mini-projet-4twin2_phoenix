import { SujetDetailComponent } from './Components/formation/sujet-detail/sujet-detail.component';
import { FormationDetailComponent } from './Pages/formation/formation-detail/formation-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AllSujetComponent } from './Components/formation/list-sujet/all-sujet.component';

const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:"full"},
  {path:'formation', loadChildren: () => import('./Pages/formation/formation.module').then(m=>m.FormationModule) },
  {path:'formation-detail', component:FormationDetailComponent},
  {path:'sujet-detail', component:SujetDetailComponent},
  {path:'all-sujet', component:AllSujetComponent},
  {path:'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
