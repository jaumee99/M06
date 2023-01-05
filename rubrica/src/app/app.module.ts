import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriteriComponent } from './Projecte/Components/criteri/criteri.component';
import { ValoracioComponent } from './Projecte/Components/valoracio/valoracio.component';

@NgModule({
  declarations: [
    AppComponent,
    CriteriComponent,
    ValoracioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
