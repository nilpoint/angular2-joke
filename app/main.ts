import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'joke',
  template: `
  <h1>{{setup}}</h1>
  <p>{{punchline}}</p>
  `
})
class JokeComponent {
  setup: string;
  punchline: string;

  constructor() {
    this.setup = "What did the cheese say when it looked in the mirror?";
    this.punchline = "Halloumi (hello me)";
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [JokeComponent],
  bootstrap: [JokeComponent]
})
export class AppModule {}


platformBrowserDynamic().bootstrapModule(AppModule);
