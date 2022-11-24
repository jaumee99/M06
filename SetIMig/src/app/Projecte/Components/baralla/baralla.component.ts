import { Component, OnInit } from '@angular/core';
import { BarallaSetIMig } from '../../Model/Entitats/Implementions/Baralla/Baralla';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';

@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})
export class BarallaComponent implements OnInit {
  //baralla! : BarallaSetIMig;

  constructor(private barallaService: BarallaService) { }

  ngOnInit(): void {

  }

  public getBaralla():BarallaSetIMig {
    return this.barallaService.getBaralla();
  }
}
