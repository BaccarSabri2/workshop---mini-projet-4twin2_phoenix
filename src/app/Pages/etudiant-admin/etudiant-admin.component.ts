import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/service/user.service';
import { User } from '../user/user';


@Component({
  selector: 'app-etudiant-admin',
  templateUrl: './etudiant-admin.component.html',
  styleUrls: ['./etudiant-admin.component.css']
})
export class EtudiantAdminComponent implements OnInit {
  list:User[]=[];
  loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);

  }
  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.loadScript('../assets/back/vendor/datatables/jquery.dataTables.min.js');
    this.loadScript('../assets/back/vendor/datatables/dataTables.bootstrap4.min.js');
    this.loadScript('../assets/back/js/demo/datatables-demo.js');
    this.us.getAllEtudiants(); 
    this.us.getAllEtudiants().subscribe(res=>{
      this.list=res,
      console.log(res);
   
    })
  }
  getAllEtudiants(){
    this.us.getAllEtudiants().subscribe(res=>{
      this.list=res,
      console.log(res);
   
    })
  }
    }
