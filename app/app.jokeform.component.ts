import { Component, Output, EventEmitter } from '@angular/core';

import { Joke } from './Joke';

@Component({
  selector: 'joke-form',
  template:`
  <div class="card card-block">
    <h4 class="card-title">Create Joke</h4>
    <div class="form-group">
      <input type="text"
            class="form-control"
            placeholder="Enter the setup"
            #setup>
    </div>
    <div class="form-group">
      <input type="text"
            class="form-control"
            placeholder="Enter the punchline"
            #punchline>
    </div>
    <button type="button"
            class="btn btn-primary"
            (click)="createJoke(setup.value, punchline.value)">Create
    </button>
  </div>
  `
})
export class JokeFormComponent{
  /**
   * An EventEmitter is a helper class which we can use to emit events when 
   * something happens, other components can then bind and react to these 
   * events.
   */
  @Output() jokeCreated = new EventEmitter<Joke>();

  // output an event by calling the emit function on our jokeCreated property. 
  // Whatever we pass to the emit function is what will be output by the property.
  createJoke(setup: string, punchline: string){
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}