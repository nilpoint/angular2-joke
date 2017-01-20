import { Component } from '@angular/core';

@Component({
  selector: 'joke-form',
  template:`
  <div class="card card-block">
    <h4 class="card-title">Create Joke</h4>
    <div class="form-group">
      <input type="text"
            class="form-control"
            placeholder="Enter the setup">
    </div>
    <div class="form-group">
      <input type="text"
            class="form-control"
            placeholder="Enter the punchline">
    </div>
    <button type="button"
            class="btn btn-primary">Create
    </button>
  </div>
  `
})
export class JokeFormComponent{}