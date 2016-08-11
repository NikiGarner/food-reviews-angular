import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantListComponent } from './restaurant-list.component';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <div class="container">
      <h1>Restaurant Reviews</h1>
      <restaurant-list [restaurantList]="restaurants"></restaurant-list>
    </div>
  `
})
export class AppComponent {
  public restaurants: Restaurant[];
  constructor(){
    this.restaurants = [
      new Restaurant("Clyde Common", "American", "SW 11th & Stark", 4, [], []),
      new Restaurant("808", "Hawaiian", "SW 10th & Alder", 2, [], []),
      new Restaurant("Tabor", "Czech", "SW 5th & Oak", 2, [], []),
    ]
    console.log("Restaurants created")
  }

}
