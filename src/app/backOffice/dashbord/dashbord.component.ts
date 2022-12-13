import { Component, OnInit } from '@angular/core';
import { Demande } from 'src/app/Pages/departement/demande';
import { BackService } from '../back.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  demandes:Array<Demande>=[];

  constructor(private backServ:BackService) { }

  ngOnInit(): void {
    this.loadScript('../assets/back/vendor/datatables/jquery.dataTables.min.js');
    this.loadScript('../assets/back/vendor/datatables/dataTables.bootstrap4.min.js');
    this.loadScript('../assets/back/js/demo/datatables-demo.js');
    this.backServ.getAllDemandes().subscribe(
      res=>{
        this.demandes=res;
      }
    )
  }
  Rependre(id:number){
    Swal.fire({
      title: 'Rependre!',
      input: 'select',
      inputOptions: {
        'Accepted': 'Confirmer',
        'Rejected': 'Rejecter',
       
      },
  
      showCancelButton: true,
      confirmButtonText: 'Update',
      showLoaderOnConfirm: true,
      preConfirm: (statut) => {
        this.backServ.setDemandes(id,statut).subscribe(
          res=>{
          
           
             
              Swal.fire({
          
                icon: 'success',
                title: 'Demande est '+statut,
                showConfirmButton: false,
                timer: 2000
              })
                                      //<<<---using ()=> syntax
                                      this.backServ.getAllDemandes().subscribe(
                                        result=>{
                                          this.demandes=result;
                                        }
                                      )
       
              
            
          }
        );
         
          
          
      },
      allowOutsideClick: () => !Swal.isLoading()
    })

  }
  

}
