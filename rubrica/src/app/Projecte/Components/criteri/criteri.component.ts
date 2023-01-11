import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from "@angular/forms";


@Component({
  selector: 'app-criteri',
  templateUrl: './criteri.component.html',
  styleUrls: ['./criteri.component.css']
})
export class CriteriComponent implements OnInit {
  Form!: FormGroup;
  //const valoracions = this.Form.get('valoracions') as FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      criteri: new FormControl('', Validators.required),
      valoracions: new FormArray([
        this.fb.group({
          valoracio: new FormControl('', Validators.required),
          nota: new FormControl('', Validators.required),
        })
      ])
    });
  }

  onNewCriteriClick(): void {
    this.Form = this.fb.group({
      criteri: new FormControl('', Validators.required),
      valoracions: new FormArray([
        this.fb.group({
          valoracio: new FormControl('', Validators.required),
          nota: new FormControl('', Validators.required),
        })
      ])
    });
  }

  onSubmit() {
    console.log(this.Form);
    this.guardarCriteri();
    this.onNewCriteriClick();
    this.Form.reset();
  }

  valoracions() {
    return this.Form.get('valoracions') as FormArray;
  }

  onAddValoracio() {
    const control = new FormGroup({
      valoracio: new FormControl('', Validators.required),
      nota: new FormControl('', Validators.required)
    }, Validators.required);
    (<FormArray>this.Form.get("valoracions")).push(control);
  }

  guardarCriteri() {
    const object = localStorage.getItem('Value');
    let criteris = [];
    if (object) {
      criteris = JSON.parse(object);
    }
    criteris.push(this.Form.value);
    const Value = JSON.stringify(criteris);
    localStorage.setItem('Value', Value);
  }

}
