import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";
import { Carta } from "./Carta";

export class CartaSetIMig extends Carta implements ICartaSetIMig{
    value!: number;
    status: boolean;

    constructor(num:number,pal:string,img:string){
        super(num,pal,img);
        this.setValue(num);
        this.status = false;
    }

    public setValue(num:number) {
        if (num < 8) this.value = num;
        else this.value = 0.5;
    }

    public girar(): void {
        this.status = !this.status;
    }
}