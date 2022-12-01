import { Component, OnInit } from '@angular/core';
import { BarallaMemori } from '../../Model/Entitats/Implementions/Baralla/Baralla';
import { CartaMemori } from '../../Model/Entitats/Implementions/Carta/CartaMemori';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';

@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})
export class BarallaComponent implements OnInit {
  carteSelected: Array<CartaMemori> = [];
  errors: number = 0;


  constructor(private barallaService: BarallaService) { }

  ngOnInit(): void {
    this.barallaService.baralla.barrejar();
  }

  public getBaralla():BarallaMemori {
    return this.barallaService.getBaralla();
  }

  clickCarta(carta: CartaMemori) {
    if (carta.status == true) {
    }else {
    if (this.comprovarFiles(carta.fila)) {
      carta.girar();
      this.carteSelected.push(carta);
      if(this.carteSelected.length == 4) {
        this.comprovarCartes();
      }
    }
  }
  }

  comprovarCartes() {
    if (this.carteSelected.every( (carta) => carta.num === this.carteSelected[0].num )) {
      this.carteSelected = [];
    } else {
      setTimeout( () => {
        this.errors++;
        this.carteSelected.forEach(carta => {
          carta.amagar();
          this.carteSelected = [];
        });
      },3000)
    }
  }

  comprovarFiles(numFila: number): boolean {
    let filaRepetida: boolean = true;
    this.carteSelected.forEach(carta => {
      if (carta.fila == numFila) {
        filaRepetida = false;
      }
    });
    return filaRepetida;
  }


  
}
