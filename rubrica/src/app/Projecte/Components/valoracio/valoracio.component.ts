import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valoracio',
  templateUrl: './valoracio.component.html',
  styleUrls: ['./valoracio.component.css']
})
export class ValoracioComponent implements OnInit {
  objeto: any;

  constructor() { 
    this.getLocalStorage();
  }

  ngOnInit(): void {
  }

  getLocalStorage() {
    const object = localStorage.getItem('Value');
    if (object) {
      this.objeto = JSON.parse(object);
    }
    return object;
  }

}
