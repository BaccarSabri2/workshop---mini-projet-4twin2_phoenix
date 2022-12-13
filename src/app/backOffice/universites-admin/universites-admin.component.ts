import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/etudiant';
import { Departement } from 'src/app/Pages/universite/model/departement';
import { Universite } from 'src/app/Pages/universite/model/universite';
import { User } from 'src/app/Pages/universite/model/user';
import { UniversiteService } from 'src/app/Pages/universite/service/universite.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-universites-admin',
  templateUrl: './universites-admin.component.html',
  styleUrls: ['./universites-admin.component.css']
})
export class UniversitesAdminComponent implements OnInit {
  list : Universite[]=[];
  listEtud: Etudiant[]=[];
  

  listDept:Departement[]=[];
  constructor(private us:UniversiteService) { }

  ngOnInit(): void {
    this.getAllUniversite();
  }

  getAllUniversite(){
    this.us.getAllU().subscribe(res=>{
      this.list=res, 
      console.log(this.list);
      console.log(this.list[0].nomUniv);
     

      
     console.log(this.list)
    })
  }

  deleteUniv(id:number){
      console.log(id)
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimez-le!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.us.deleteUniversite(id).subscribe(res=>{
            console.log(res);
            window.location.reload();
          })

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
  }

}
