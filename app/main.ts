import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'joke',
  template: `
  <h1>What did the cheese say when it looked in the mirror?</h1>
  <p>Halloumi (hello me)</p>
  `
})
class JokeComponent {}

@NgModule({
  imports: [BrowserModule],
  declarations: [JokeComponent],
  bootstrap: [JokeComponent]
})
export class AppModule {}


platformBrowserDynamic().bootstrapModule(AppModule);
