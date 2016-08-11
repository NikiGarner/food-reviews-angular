import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantDetailsComponent } from './restaurant-detail.component';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  directives: [RestaurantDetailsComponent],
  template: `
    <div>
      <label>{{restaurant.name}}</label>
    </div>

  `
})
export class RestaurantComponent {
  public restaurant: Restaurant;
}
