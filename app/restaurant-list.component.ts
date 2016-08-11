import { Component, EventEmitter } from 'angular2/core';
import { RestaurantComponent } from './restaurant.component';
import { Restaurant } from './restaurant.model';
import { RestaurantDetailsComponent} from './restaurant-detail.component';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  pipes: [],
  directives: [RestaurantComponent, RestaurantDetailsComponent],
  template: `
  <restaurant-display *ngFor="#currentRestaurant of restaurantList" [restaurant] = "currentRestaurant" (click)="restaurantClicked(currentRestaurant)" ></restaurant-display>

  <restaurant-detail *ngIf="selectedRestaurant" [restaurant] = "selectedRestaurant">
  </restaurant-detail>
  `
})
export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  constructor() {
    this.onRestaurantSelect = new EventEmitter();
  }

  restaurantClicked(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
    this.onRestaurantSelect.emit(clickedRestaurant);
    console.log(this.selectedRestaurant);
  }
}
