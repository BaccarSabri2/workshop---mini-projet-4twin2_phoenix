import { Formation } from './../../../Pages/formation/model/formation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormationService {
  formationUrl="http://localhost:4200/formations";

  constructor(private _http:HttpClient) { }

  getFormation(id:number):Observable<Formation>{
    
    return this._http.get<Formation>(this.formationUrl+"/"+id);
  }


  getAllU():Observable<Formation[]>{
    console.log("get formation");
    return this._http.get<Formation[]>(this.formationUrl);
  }


  addFormation(formation:Formation):Observable<Formation>{
    console.log("service appelé");
    return this._http.post<Formation>(this.formationUrl,formation);
  }

  deleteUniversite(formation:Formation):Observable<Formation>{
    console.log("delete formation");
    return this._http.delete<Formation>(this.formationUrl+"/"+formation.idFormation);
  }

  updateUniversite(formation:Formation):Observable<Formation>{
    console.log("update formation");
    return this._http.put<Formation>(this.formationUrl+"/"+formation.idFormation,formation);
  }

  getByName(nom:string):Observable<Formation[]>{
    
    return this._http.get<Formation[]>(this.formationUrl+"/byNom/"+nom);
  }

  
}
