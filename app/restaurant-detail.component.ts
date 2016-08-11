import {Component} from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-detail',
  inputs: ['restaurant'],
  template: `
    <div>
      <p>{{restaurant.address}}</p>
      <p>{{restaurant.speciality}}</p>
      <p>{{restaurant.cost}}</p>
      <p *ngFor="#currentReview of restaurant.reviews">{{currentReview}}</p>
      <p *ngFor="#currentWait of restaurant.waitTimes">{{currentWait}} minutes</p>
    </div>
  `
})
export class RestaurantDetailsComponent {
  public restaurant: Restaurant;
}
