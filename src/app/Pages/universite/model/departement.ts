import { Etudiant } from "src/app/etudiant"

export class Departement {
    idDepart:number | undefined
    nomDepart:string | undefined
    surNomDepart:string | undefined
    etudiants:Array<Etudiant> 
    
}