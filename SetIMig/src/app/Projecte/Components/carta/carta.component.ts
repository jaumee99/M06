import { Component, OnInit } from '@angular/core';
import { CartaSetIMig } from '../../Model/Entitats/Implementions/Carta/CartaSetIMig';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  carta!: CartaSetIMig;

  constructor() { }

  ngOnInit(): void {
    this.carta = new CartaSetIMig(1,'porro','http://blog.eatb.es/wp-content/uploads/2013/02/porro-glass-pitcher.jpg');
    console.log(this.carta);
  }

}
