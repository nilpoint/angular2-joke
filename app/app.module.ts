import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JokeComponent } from './app.joke.component';
import { JokeListComponent } from './app.jokelist.component'
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    JokeComponent,
    JokeListComponent,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}