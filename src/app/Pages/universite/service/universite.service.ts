import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from '../model/universite';
import { Avis } from '../model/avis';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  httpOptions = {
    headers: new HttpHeaders({
      'apikey': 'eWqouNc30HWcrt82HTaeBas1gEcF43FQ'
    })
  }

  httpWords = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '998f472e7amsh89a14d191cefef7p1de360jsnee8fc8c5ff88',
      'X-RapidAPI-Host': 'community-purgomalum.p.rapidapi.com'
    })
  }
  universiteUrl="http://localhost:9090/universites";
  avisUrl="http://localhost:9090/avis";


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

  deleteUniversite(id:number):Observable<any>{
    return this._http.delete<any>(this.universiteUrl+"/"+id);
  }

  updateUniversite(universite:Universite):Observable<Universite>{
    console.log("update universite");
    return this._http.put<Universite>(this.universiteUrl+"/"+universite.idUniv,universite);
  }

  getByNoom(nom:string):Observable<Universite[]>{
    
    return this._http.get<Universite[]>(this.universiteUrl+"/byNom/"+nom);
  }

  checkWord(word:string){

    //console.log(encodeURIComponent(word.trim()));
    return this._http.get<any>("https://community-purgomalum.p.rapidapi.com/containsprofanity?text="+encodeURIComponent(word.trim()),this.httpWords);

  }

  addAvis(avis:Avis,idE:number,idU:number){
    return this._http.post<Avis>(this.avisUrl+"/add/"+idE+"/"+idU,avis);
  }

  
}
