import { Component } from '@angular/core';

import { Joke } from './Joke';

@Component({
  selector: 'joke-list',
  template:`
  <joke-form (jokeCreated)="addJoke($event)"></joke-form>
  <joke *ngFor="let j of jokes" [joke]="j" (jokeRemoved)="removeJoke($event)"></joke>
  `
})
export class JokeListComponent {
  jokes: Joke[];

  constructor(){
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought 'That's not very mature'")
    ];    
  }

  addJoke(joke: Joke) {
    this.jokes.unshift(joke);
  }

  removeJoke(joke: Joke) {
    const index = this.jokes.indexOf(joke);
    if (index != -1) {
      this.jokes.splice(index, 1);
    }
  }
}