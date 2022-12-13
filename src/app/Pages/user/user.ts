export class User {
    idEtudiant: number;
    prenomE: string | undefined;
    nomE: string;

    email: string;
    password: string;
    option: option;
    public User() { };
}
export enum option {
    GAMIX, SE, SIM, NIDS, Twin
}
