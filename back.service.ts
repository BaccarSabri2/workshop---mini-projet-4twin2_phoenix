import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departements } from '../Pages/departement/departements';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  url="";
  constructor(private http:HttpClient , ) {
    this.url=environment.backendurl;
   }
   getDepartementById(id:number):Observable<any>{
    return this.http.get(this.url+'/departements/'+id, 
     {
      
     }
    )
  }
   getAllDemandes():Observable<any>{
    return this.http.get(this.url+'/departements/getDemandes/',
     {
    
     }
    )
  }
  setDemandes(id:number,statut:string):Observable<any>{
    return this.http.post(this.url+'/departements/setDemande/'+id+'/'+statut,
     {
 
     }
    )
  }
  addDept(Departements:Departements,id:string):Observable<Departements>{
    return this.http.post<Departements>(this.url+'/departements/'+id,
     
 Departements
     
    )
  }
  updateDepart(Departements:Departements,id:number):Observable<Departements>{
    return this.http.put<Departements>(this.url+'/departements/'+id,
     
      Departements
     
    )
  }
  getDepartementByUniversite(id:string):Observable<any>{
    return this.http.get(this.url+'/departements/universite/'+id, 
     {
      
     }
    )
  }
  
  
}
