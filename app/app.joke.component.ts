import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Joke } from './Joke';

@Component({
  selector: 'joke',
  template:`
  <div class="card card-block">
    <h4 class="card-title">{{joke.setup}}</h4>
    <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
    <a class="btn btn-info" (click)="joke.toggle()">Tell Me!</a>
    <a class="btn btn-danger" (click)="removeJoke(joke)">Delete</a>
  </div>
  `
})
export class JokeComponent {
  @Input('joke')
  joke: Joke;

  @Output() jokeRemoved = new EventEmitter<Joke>();

  removeJoke(joke: Joke){
    this.jokeRemoved.emit(joke);
  }
}