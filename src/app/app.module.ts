import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { PlayersComponent } from './players/players.component';

import { PlayersService } from "./services/players.service";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PlayersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
