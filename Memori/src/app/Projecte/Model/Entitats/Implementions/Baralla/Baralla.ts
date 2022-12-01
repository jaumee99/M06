import { Utils } from "src/app/Projecte/Utils/Utils";
import { IBaralla } from "../../Interfaces/Baralla/IBaralla";
import { ICarta } from "../../Interfaces/Carta/ICarta";
import { IFila } from "../../Interfaces/Fila/IFila";
import { CartaMemori } from "../Carta/CartaMemori";
import { Fila } from "../Fila/Fila";


export class BarallaMemori implements IBaralla{
   fila: Array<IFila> = new Array<IFila>();
   cartes: CartaMemori[] = new Array<CartaMemori>();



   constructor()
   {
      for (let i = 1; i < 5; i++) {
         this.fila.push(new Fila(i));           
      }
   }

   barrejar(): void {
      this.fila.forEach(row => {
         for (let index = 0; index < this.fila.length; index++) this.canviar(row.cartes, index);
      });
  }

  private canviar(arr: Array<CartaMemori>, index:number) {
      const index2=Utils.getRandom(arr.length -1);
      this.intercanviar(arr, index, index2);
  }

  private intercanviar(arr: Array<CartaMemori>, index:number,index2:number) {
      const aux=arr[index];
      arr[index] = arr[index2];
      arr[index2] = aux;
  }

}
