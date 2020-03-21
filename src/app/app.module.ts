import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimerComponent } from './timer/timer.component';
import { AlphaDiceComponent } from './alpha-dice/alpha-dice.component';
import { GameScreenComponent } from './game-screen/game-screen.component';

// -- Angular Materials -- //
import { MatButtonModule } from '@angular/material/button';
import { GameCardComponent } from './game-card/game-card.component';
import { CardShuffleComponent } from './card-shuffle/card-shuffle.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    AlphaDiceComponent,
    GameScreenComponent,
    GameCardComponent,
    CardShuffleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
