import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantDetailsComponent } from './restaurant-detail.component';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  directives: [RestaurantDetailsComponent],
  template: `
    <div>
      <label (click)="restaurantClicked(restaurant)">{{restaurant.name}}</label>
      <restaurant-detail *ngIf="selectedRestaurant === restaurant && restaurant.display === true" [restaurant] = "selectedRestaurant"></restaurant-detail>
    </div>


  `
})
export class RestaurantComponent {

  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  constructor() {
    this.onRestaurantSelect = new EventEmitter();
  }

  restaurantClicked(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
    this.selectedRestaurant.display = !this.selectedRestaurant.display;
    this.onRestaurantSelect.emit(clickedRestaurant);
    console.log(this.selectedRestaurant);
  }
}
