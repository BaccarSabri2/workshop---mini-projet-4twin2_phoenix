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
import { JoinusComponent } from './Pages/joinus/joinus.component';
import { LoginComponent } from './Pages/login/login.component';
import { EditProfileComponent } from './Pages/edit-profile/edit-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    //FormationComponent,
    HomeComponent,
    JoinusComponent,
    LoginComponent,
    EditProfileComponent,
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
