import { IValoracions } from "../Interfaces/IValoracions";

export class Valoracions implements IValoracions {
  titol!: string;
  nota!: number;

  constructor(titol: string , nota: number){
    this.titol = titol;
    this.nota = nota;
}
}
