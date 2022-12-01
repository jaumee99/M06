import { ICartaMemori } from "../../Interfaces/Carta/ICartaMemori";

export class CartaMemori implements ICartaMemori{
    status!: boolean;

    num: number;
    fila: number;
    img!: string;

    constructor(num: number, fila: number, img: string){
        this.num = num;
        this.fila = fila;
        this.img = img;
    }

    public girar(): void {
        this.status = true;
    }

    public amagar(): void {
        this.status = false;
    }

}