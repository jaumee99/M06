import { IBarallaSetIMig } from "../../Interfaces/Baralla/IBarallaSetIMig";
import { ICartaSetIMig } from "../../Interfaces/Carta/ICartaSetIMig";
import { CartaSetIMig } from "../Carta/CartaSetIMig";


export class BarallaSetIMig implements IBarallaSetIMig{
   cartes: Array<ICartaSetIMig> = new Array<ICartaSetIMig>();
   pals: Array<string> = ["copas", "oros", "bastos", "espadas"]

   constructor() {
      this.pals.forEach(pals => {
         for (let i = 1; i < 13; i++) {
            if (i !== 8 && i !== 9) {
            const carta = new CartaSetIMig(i, pals, "https://www.trivin.es/wp-content/themes/nirvana/images/cards/" + pals + "_"+ i.toString().padStart(2, '0') + ".png");
            this.cartes.push(carta);
            }            
         }
      });
   }

   barrejar(): void {
      throw new Error("Method not implemented.");
   }
}
