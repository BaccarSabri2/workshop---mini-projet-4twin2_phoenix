import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversitesComponent } from './universites/universites.component';
import { UniversiteDetailComponent } from './universite-detail/universite-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UniversitesComponent,
    UniversiteDetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UniversiteRoutingModule,
    ReactiveFormsModule
  ]
})
export class UniversiteModule { }
