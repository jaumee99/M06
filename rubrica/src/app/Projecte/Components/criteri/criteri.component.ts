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
      valoracions: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.Form);
    this.Form.reset();
    this.guardarCriteri();
  }

  valoracions() {
    return this.Form.get('valoracions') as FormArray;
  }

  onAddValoracio() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.Form.get("valoracions")).push(control);
  }

  guardarCriteri() {
    const Criteri = JSON.stringify(this.Form.value.Criteri);
    localStorage.setItem('Criteri', Criteri);
    const Valoracions = JSON.stringify(this.Form.value.valoracions);
    localStorage.setItem('Valoracions', Valoracions);
  }

}
