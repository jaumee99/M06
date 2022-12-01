import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartaMemori } from '../../Model/Entitats/Implementions/Carta/CartaMemori';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input() carta!: CartaMemori;
  @Output() clicked = new EventEmitter;

  constructor(private barallaService: BarallaService) { }

  ngOnInit(): void {
  }

  agafar(carta: CartaMemori): void{
    this.clicked.emit();
  }


}
