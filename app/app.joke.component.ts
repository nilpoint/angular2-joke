import { Component, Input } from '@angular/core';

import { Joke } from './Joke';

@Component({
  selector: 'joke',
  template:`
  <div class="card card-block">
    <h4 class="card-title">{{joke.setup}}</h4>
    <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
    <a class="btn btn-primary" (click)="joke.toggle()">Tell Me!</a>
  </div>
  `
})
export class JokeComponent {
  @Input('joke')
  joke: Joke;
}