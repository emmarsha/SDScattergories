import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimerComponent } from './timer/timer.component';
import { AlphaDiceComponent } from './alpha-dice/alpha-dice.component';
import { GameScreenComponent } from './game-screen/game-screen.component';

// -- Angular Materials -- //
import { MatButtonModule } from '@angular/material/button';
import { GameCardComponent } from './game-card/game-card.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    AlphaDiceComponent,
    GameScreenComponent,
    GameCardComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
