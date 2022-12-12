import { FormationService } from './service/formation.service';
import { Formation } from './model/formation';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  // list : Formation[]=[];
  // id : number | undefined ;
  // formation : Formation = new Formation();
  // constructor(private ac : ActivatedRoute,private fr:FormationService) { }

  ngOnInit(): void {
  //   this.ac.paramMap.subscribe(result=>{ this.id=+Number(result.get('id'));
  //   console.log(this.id);
  //   this.fr.getFormation(this.id).subscribe(res=>{
  //     this.formation=res;
  //     //console.log(this.universite);
  //    // this.list.push(this.universite);
  //   })
  // });
  


  }

}
