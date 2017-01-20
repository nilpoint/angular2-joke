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

@Component({
  selector: 'joke-list',
  template:`
  <div class="card card-block" *ngFor="let joke of jokes">
    <h4 class="card-title">{{joke.setup}}</h4>
    <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
    <a class="btn btn-primary" (click)="joke.hide=!joke.hide">Tell Me!</a>
  </div>
  `
})
class JokeListComponent {
  jokes: Object[];

  constructor(){
    this.jokes = [
      {
        setup: "What did the cheese say when it looked in the mirror?",
        punchline: "Hello-Me (Halloumi)",
        hide: true
      },
      {
        setup: "What kind of cheese do you use to disguise a small horse?",
        punchline: "Mask-a-pony (Mascarpone)",
        hide: true
      },
      {
        setup: "A kid threw a lump of cheddar at me",
        punchline: "I thought 'That's not very mature'",
        hide: true
      },
    ];    
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [JokeComponent, JokeListComponent],
  bootstrap: [JokeListComponent]
})
export class AppModule {}


platformBrowserDynamic().bootstrapModule(AppModule);
