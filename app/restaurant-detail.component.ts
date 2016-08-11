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
    </div>
  `
})
export class RestaurantDetailsComponent {
  public restaurant: Restaurant;
}
