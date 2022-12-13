import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from 'src/app/Pages/universite/model/universite';
import { UniversiteService } from 'src/app/Pages/universite/service/universite.service';

@Component({
  selector: 'app-add-universite-admin',
  templateUrl: './add-universite-admin.component.html',
  styleUrls: ['./add-universite-admin.component.css']
})
export class AddUniversiteAdminComponent implements OnInit {
  

  constructor(private us:UniversiteService,private router:Router) { }
  universite :Universite = new Universite();
  

  ngOnInit(): void {
    
  }

  addUniv(f){
    console.log(f);
    console.log(this.universite);
    this.us.addUniversite(this.universite).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/universiteAdmin']);
    })
  }

}
