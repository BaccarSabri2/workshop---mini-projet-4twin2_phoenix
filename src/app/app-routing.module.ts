import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './Pages/user/edit-profile/edit-profile.component';
import { FormationComponent } from './Pages/formation/formation.component';
import { HomeComponent } from './Pages/home/home.component';
import { EtudiantAdminComponent } from './Pages/etudiant-admin/etudiant-admin.component';
import { CommonModule } from '@angular/common';




const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'formation', loadChildren: () => import('./Pages/formation-module/formation/formation.module').then(m => m.FormationModule) },
  { path: 'EtudiantAdmin', loadChildren: () => import('./Pages/admin/admin.module').then(m => m.AdminModule) },
  { path: 'user', loadChildren: () => import('./Pages/user/user.module').then(m => m.UserModule) },
  { path: 'home', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
