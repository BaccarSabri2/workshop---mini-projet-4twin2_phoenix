import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from '../model/universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  universiteUrl="http://localhost:9090/universites";

  constructor(private _http:HttpClient) { }

  getUniversite(id:number):Observable<Universite>{
    
    return this._http.get<Universite>(this.universiteUrl+"/"+id);
  }


  getAllU():Observable<Universite[]>{
    console.log("get universite");
    return this._http.get<Universite[]>(this.universiteUrl);
  }


  addUniversite(universite:Universite):Observable<Universite>{
    console.log("service appelé");
    return this._http.post<Universite>(this.universiteUrl,universite);
  }

  deleteUniversite(universite:Universite):Observable<Universite>{
    console.log("delete universite");
    return this._http.delete<Universite>(this.universiteUrl+"/"+universite.idUniv);
  }

  updateUniversite(universite:Universite):Observable<Universite>{
    console.log("update universite");
    return this._http.put<Universite>(this.universiteUrl+"/"+universite.idUniv,universite);
  }

  getByNoom(nom:string):Observable<Universite[]>{
    
    return this._http.get<Universite[]>(this.universiteUrl+"/byNom/"+nom);
  }

  
}
