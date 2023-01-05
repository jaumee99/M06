import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";


@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {
  Form!: FormGroup;
  //const valoracions = this.Form.get('valoracions') as FormArray;

  constructor() { }

  ngOnInit(): void {
    this.Form = new FormGroup({
        Criteri: new FormControl('', Validators.required),
      valoracions: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.Form);
    this.Form.reset();
  }

  valoracions() {
    return this.Form.get('valoracions') as FormArray;
  }

  onAddValoracio() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.Form.get("valoracions")).push(control);
  }



}
