import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaComponent } from './Projecte/Components/carta/carta.component';
import { BarallaComponent } from './Projecte/Components/baralla/baralla.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    BarallaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
