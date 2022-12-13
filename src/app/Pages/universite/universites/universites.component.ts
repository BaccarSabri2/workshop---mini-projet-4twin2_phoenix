import { Component, OnInit, ViewChild } from '@angular/core';
import { Universite } from '../model/universite';
import { UniversiteService } from '../service/universite.service';
import { UniversiteDetailComponent } from '../universite-detail/universite-detail.component';

@Component({
  selector: 'app-universites',
  templateUrl: './universites.component.html',
  styleUrls: ['./universites.component.css']
})
export class UniversitesComponent implements OnInit {
  list : Universite[]=[];
  text!: string ;


  
  constructor(private us:UniversiteService) { }

  ngOnInit(): void {
    this.getAllUniversite();
  }

  getAllUniversite(){
    this.us.getAllU().subscribe(res=>{
      this.list=res, 
      console.log(this.list);
      console.log(this.list[0].nomUniv)
    })
  }

  detail(id:number){
    console.log(id);
  }

  onKeyUp(x:any) { // appending the updated value to the variable
    this.text = x.target.value;
    console.log(this.text);
    if(this.text==""){
      this.text="all"
    }
    this.us.getByNoom(this.text).subscribe(res=>{
      this.list=res;
    })
  }




}
