import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Departements } from 'src/app/Pages/departement/departements';
import { BackService } from '../back.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  DepartForm:FormGroup;
  constructor(private backServ:BackService , private router:Router, private location: Location ,private ac:ActivatedRoute) { }
  dept:Departements=new Departements();
  widthExp=500;
  heightExp=100;
  id="";
  ngOnInit(): void {
this.id=this.ac.snapshot.params['id'];
    this.createForm(new Departements());
  }

  createForm(dept){
    this.DepartForm=new FormGroup({
     
      nom:new FormControl(dept.nomDepart, Validators.required),
      surNom:new FormControl(dept.surNomDepart, Validators.required),
      description:new FormControl(dept.description,[Validators.required, Validators.minLength(20), Validators.pattern("[a-zA-Z0-9]*")]),
     
    
    })
  }

  saveDept(){
    this.dept.nomDepart=  this.DepartForm.get("nom").value;
    this.dept.surNomDepart=  this.DepartForm.get("surNom").value;
    this.dept.description=  this.DepartForm.get("description").value;
    console.log(this.dept)



  this.backServ.addDept(this.dept,this.id).subscribe();
  
  Swal.fire({
          
    icon: 'success',
    title: 'Departement ajouté!',
    showConfirmButton: false,
    timer: 2000
  })
  this.location.back()
  
 

 
  }




}
