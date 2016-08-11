import {Component, EventEmitter} from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-review',
  inputs: ['restaurant'],
  outputs: ['onAddReview'],
  template: `
  <div>
    <h4>Review your experience</h4>
    <select #rating>
      <option value=5 selected="selected"> 5 out of 5 </option>
      <option value=4> 4 out of 5 </option>
      <option value=3> 3 out of 5 </option>
      <option value=2> 2 out of 5 </option>
      <option value=1> 1 out of 5 </option>
    </select>
    How long was your wait (in minutes)? <input type = "number" name = "wait" #wait>
    <button (click) = "addReview(rating, wait)">Add Review</button>
  </div>
  `
})
export class RestaurantReviewComponent {
  public restaurant: Restaurant;
  public rating: number;
  public onAddReview: EventEmitter<number[]> = new EventEmitter();
  constructor(){
    this.onAddReview = new EventEmitter()
  }

  addReview(score: HTMLInputElement, waitTime: HTMLInputElement){
    this.onAddReview.emit([parseInt(score.value), parseInt(waitTime.value)])
    score.value = "";
    waitTime.value = "";
  }
}
