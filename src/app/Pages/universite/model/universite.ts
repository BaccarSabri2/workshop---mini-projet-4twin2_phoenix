import { Departement } from "./departement";

export class Universite{
    idUniv!: number;
    nivea!: Niveau;
    nomUniv!: string;
    description!: string;
    departemnts:Array<Departement> | undefined
    dateCreation:Date | undefined;
    lieu:string | undefined;
}

enum Niveau {
   EXPERT,
   JUNIOR,
   SENIOR
  }