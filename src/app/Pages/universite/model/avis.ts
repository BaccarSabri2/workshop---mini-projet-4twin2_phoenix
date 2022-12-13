import { Universite } from "./universite";

export class Avis{
    idAvis!: number;
    
    dateCreation:Date | undefined;
    commentaire!: string;
    universite:Universite | undefined;
    
}