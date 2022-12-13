import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';






import { AddUniversiteAdminComponent } from './backOffice/add-universite-admin/add-universite-admin.component';

import { DashbordComponent } from './backOffice/dashbord/dashbord.component';
import { UniversitesAdminComponent } from './backOffice/universites-admin/universites-admin.component';

import { EditProfileComponent } from './Pages/edit-profile/edit-profile.component';

import { FormationComponent } from './Pages/formation/formation.component';
import { HomeComponent } from './Pages/home/home.component';
import { JoinusComponent } from './Pages/joinus/joinus.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:"full"},

 
  {path:'departement', loadChildren: () => import('./Pages/departement/departement-module/departement-module.module').then(m=>m.DepartementModuleModule) },
  
  {path:'dashbord', component:DashbordComponent},
  {path:'universiteAdmin', component:UniversitesAdminComponent},
   {path:'addUniversite', component:AddUniversiteAdminComponent },


  {path:'formations', loadChildren: () => import('./Pages/formation-module/formation/formation.module').then(m=>m.FormationModule) },
  {path:'universites', loadChildren: () => import('./Pages/universite/universite.module').then(m=>m.UniversiteModule) },
  {path:'home', component:HomeComponent},
  { path: 'user', loadChildren: () => import('./Pages/user/user.module').then(m => m.UserModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
