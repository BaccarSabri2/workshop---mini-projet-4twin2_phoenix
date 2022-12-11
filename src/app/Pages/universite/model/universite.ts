import { Avis } from "./avis";
import { Departement } from "./departement";

export class Universite{
    idUniv!: number;
    nivea!: Niveau;
    nomUniv!: string;
    description!: string;
    departemnts:Array<Departement> | undefined;
    avis:Array<Avis> | undefined
    dateCreation:Date | undefined;
    lieu:string | undefined;
}

enum Niveau {
   EXPERT,
   JUNIOR,
   SENIOR
  }