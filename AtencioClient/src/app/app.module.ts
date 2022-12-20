import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariCriterisComponent } from './Projecte/Components/formulari-criteris/formulari-criteris.component';
import { FormulariComponent } from './Projecte/Components/formulari/formulari.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulariCriterisComponent,
    FormulariComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
