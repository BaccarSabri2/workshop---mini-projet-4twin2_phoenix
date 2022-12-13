import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartementService } from 'src/app/Pages/departement/departement.service';
import { Departements } from 'src/app/Pages/departement/departements';
import { BackService } from 'src/app/backOffice/back.service';
import { Location } from '@angular/common'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-upadet-departement',
  templateUrl: './upadet-departement.component.html',
  styleUrls: ['./upadet-departement.component.css']
})
export class UpadetDepartementComponent implements OnInit {
  dept:Departements=new Departements();
  id:any;
  constructor(private ac:ActivatedRoute , private backServ:BackService , private location:Location) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['id'];
    this.backServ.getDepartementById(this.id).subscribe(
      res=>{
        this.dept=res;
      }
    )
  }
  addUser(f){
    //let obj = {"user":this.user, "msg":"succès"};
    //this.notified.emit(obj);
console.log(this.dept);
Swal.fire({
          
  icon: 'success',
  title: 'Departement updated!',
  showConfirmButton: false,
  timer: 2000
})
    this.backServ.updateDepart(this.dept,this.id).subscribe(
    )
    this.location.back();
   // this.list.push(this.user);
    //console.log(this.list);*/
   // this.user=new User();//vider le formulaire
  }

}
