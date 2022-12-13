import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantAdminComponent } from '../etudiant-admin/etudiant-admin.component';

const routes: Routes = [
  {path:'', component:EtudiantAdminComponent, children:[

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
