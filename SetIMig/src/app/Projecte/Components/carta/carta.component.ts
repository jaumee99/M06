import { Component, Input, OnInit } from '@angular/core';
import { CartaSetIMig } from '../../Model/Entitats/Implementions/Carta/CartaSetIMig';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';
import { JugadorService } from '../../Model/Services/jugador/jugador.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() carta!: CartaSetIMig;

  constructor(private barallaService: BarallaService,private JugadorService: JugadorService) { }

  ngOnInit(): void {
  }

  agafar(carta: CartaSetIMig): void{
    if(this.JugadorService.getJugador().contar()<=7.5) {
      carta.girar();
      this.JugadorService.getJugador().agafar(carta);
      this.barallaService.getBaralla().eliminar(carta);
    }
    
  }
}
