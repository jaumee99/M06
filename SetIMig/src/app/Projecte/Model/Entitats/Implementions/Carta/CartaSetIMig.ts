import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";
import { Carta } from "./Carta";

export class CartaSetIMig extends Carta implements ICartaSetIMig{
    value!: number;

    constructor(num:number,pal:string,img:string){
        super(num,pal,img);
        this.setValue(num);
    }

    private setValue(num:number) {
        if (num < 8) this.value = num;
        else this.value = 0.5;
    }
}