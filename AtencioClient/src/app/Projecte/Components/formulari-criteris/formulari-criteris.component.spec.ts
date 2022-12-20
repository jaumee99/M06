import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariCriterisComponent } from './formulari-criteris.component';

describe('FormulariCriterisComponent', () => {
  let component: FormulariCriterisComponent;
  let fixture: ComponentFixture<FormulariCriterisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariCriterisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariCriterisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
