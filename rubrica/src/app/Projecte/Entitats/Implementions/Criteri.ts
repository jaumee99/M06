import { ICriteri } from "../Interfaces/ICriteri";
import { IValoracions } from "../Interfaces/IValoracions";

export class Criteri implements ICriteri {
    titol!: string;
    valoracions!: Array<IValoracions>;
}
