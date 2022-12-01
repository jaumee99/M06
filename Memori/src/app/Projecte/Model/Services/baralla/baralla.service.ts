import { Injectable } from '@angular/core';
import { BarallaMemori } from '../../Entitats/Implementions/Baralla/Baralla';

@Injectable({
  providedIn: 'root'
})
export class BarallaService {
  baralla:BarallaMemori = new BarallaMemori();

  constructor() { }

  getBaralla():BarallaMemori { return this.baralla; }
}
