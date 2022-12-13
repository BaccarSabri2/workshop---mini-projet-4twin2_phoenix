import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeroComponent } from './Pages/hero/hero.component';
import { FormationComponent } from './Pages/formation/formation.component';
import { HomeComponent } from './Pages/home/home.component';


import { ReactiveFormsModule } from '@angular/forms';



import { DashbordComponent } from './backOffice/dashbord/dashbord.component';
import { NavbarBackooficeComponent } from './backOffice/navbar-backoofice/navbar-backoofice.component';
import { FooterBackOfficeComponent } from './backOffice/footer-back-office/footer-back-office.component';






import { JoinusComponent } from './Pages/joinus/joinus.component';
import { LoginComponent } from './Pages/login/login.component';
import { EditProfileComponent } from './Pages/edit-profile/edit-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UniversitesAdminComponent } from './backOffice/universites-admin/universites-admin.component';
import { AddUniversiteAdminComponent } from './backOffice/add-universite-admin/add-universite-admin.component';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    //FormationComponent,
    HomeComponent,






 



    DashbordComponent,
    NavbarBackooficeComponent,
    FooterBackOfficeComponent,
 
  //  MyDemandesComponent,
  //  JoinDepartementComponent,
  
   // DepartementDetailComponent,
   

    JoinusComponent,
    LoginComponent,
    EditProfileComponent,
    UniversitesAdminComponent,
    AddUniversiteAdminComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


   
  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
