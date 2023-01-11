import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-valoracio',
  templateUrl: './valoracio.component.html',
  styleUrls: ['./valoracio.component.css']
})
export class ValoracioComponent implements OnInit {

  constructor() {
    this.getLocalStorage();
  }

  ngOnInit(): void {
  }

  getLocalStorage() {
    const object = localStorage.getItem('Value');
    let data = [];
    if (object) {
      data = JSON.parse(object);
    }
    return data;
  }

}
