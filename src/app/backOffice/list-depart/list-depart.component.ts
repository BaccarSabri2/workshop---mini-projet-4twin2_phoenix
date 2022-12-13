import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackService } from 'src/app/backOffice/back.service';
import { Departements } from 'src/app/Pages/departement/departements';

@Component({
  selector: 'app-list-depart',
  templateUrl: './list-depart.component.html',
  styleUrls: ['./list-depart.component.css']
})
export class ListDepartComponent implements OnInit {

  constructor(private backServ:BackService, private ac:ActivatedRoute) { }
  loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
id="";
univ="";
Departements:Array<Departements>=[];
  ngOnInit(): void {
    this.loadScript('../assets/back/vendor/datatables/jquery.dataTables.min.js');
    this.loadScript('../assets/back/vendor/datatables/dataTables.bootstrap4.min.js');
    this.loadScript('../assets/back/js/demo/datatables-demo.js');
    this.id=this.ac.snapshot.params['id'];
    this.backServ.getDepartementByUniversite(this.id).subscribe(
      res=>{
       this.univ=res.nomUniv
        this.Departements=res.departemnts;
        console.log(res);
      }
    )
  }

}
