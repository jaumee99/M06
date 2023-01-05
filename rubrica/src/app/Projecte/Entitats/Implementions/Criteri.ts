import { ICriteri } from "../Interfaces/ICriteri";
import { Valoracions } from "./Valoracions";

export class Criteri implements ICriteri {
    titol!: string;
    valoracions: Valoracions[] = new Array<Valoracions>;
}
