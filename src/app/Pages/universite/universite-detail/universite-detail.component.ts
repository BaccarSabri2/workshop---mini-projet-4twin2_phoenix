import { Component, OnInit } from '@angular/core';
import { Universite } from '../model/universite';
import { ActivatedRoute } from '@angular/router';
import { UniversiteService } from '../service/universite.service';

@Component({
  selector: 'app-universite-detail',
  templateUrl: './universite-detail.component.html',
  styleUrls: ['./universite-detail.component.css']
})
export class UniversiteDetailComponent implements OnInit {
  list : Universite[]=[];
  id : number | undefined ;
  universite : Universite = new Universite();
  constructor(private ac : ActivatedRoute,private us:UniversiteService) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(result=>{ this.id=+Number(result.get('id'));
    console.log(this.id);
    this.us.getUniversite(this.id).subscribe(res=>{
      this.universite=res;
      //console.log(this.universite);
     // this.list.push(this.universite);
    })
  });
    
   // this.list.
  }

  



}
