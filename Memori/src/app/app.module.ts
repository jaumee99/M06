import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadorComponent } from './Projecte/Components/Jugador/jugador/jugador.component';
import { FilaComponent } from './Projecte/Components/fila/fila.component';
import { CartaComponent } from './Projecte/Components/carta/carta.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    FilaComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
