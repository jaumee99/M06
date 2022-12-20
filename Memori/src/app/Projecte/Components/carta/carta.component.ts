import { APP_BASE_HREF } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
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
  route: string;

  constructor(@Inject(APP_BASE_HREF) private baseHref: string, private barallaService: BarallaService) { 
    this.route = baseHref;
  }

  ngOnInit(): void {
  }

  agafar(carta: CartaMemori): void{
    this.clicked.emit();
  }


}
