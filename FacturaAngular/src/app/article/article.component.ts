import { Component, OnInit } from '@angular/core';
import { Producte } from "./producte";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }
  seleccionat?: Producte;

  productes:Producte[] = [
    {codi: 1, nom: "arroz", quantitat: 10, preu: 12, total: 11},
    {codi: 2, nom: "pa", quantitat: 10, preu: 5, total: 11},
    {codi: 3, nom: "oli", quantitat: 10, preu: 8, total: 11},
    {codi: 4, nom: "sucre", quantitat: 10, preu: 22, total: 11},
    {codi: 5, nom: "verd", quantitat: 10, preu: 42, total: 11},
  ];

  ngOnInit(): void {
  }


  addItem() {
    alert(this.seleccionat?.codi);
  }
}
