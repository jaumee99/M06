import { ICartaMemori } from "../../Interfaces/Carta/ICartaMemori";
import { IFila } from "../../Interfaces/Fila/IFila";
import { CartaMemori } from "../Carta/CartaMemori";

export class Fila implements IFila {
    cartes: Array<ICartaMemori> = new Array<ICartaMemori>();

    constructor(numFila: number) {
        for (let i = 1; i < 5; i++) {
            const carta = new CartaMemori(i, numFila, "/assets/" + i + ".png");
            this.cartes.push(carta);           
        }
     }

}
