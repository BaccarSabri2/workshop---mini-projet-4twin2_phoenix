import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { JoinusComponent } from './joinus/joinus.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'joinus', component: JoinusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editprofile', component: EditProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
