import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantDetailsComponent } from './restaurant-detail.component';
import { RestaurantReviewComponent } from './restaurant-review.component';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  directives: [RestaurantDetailsComponent, RestaurantReviewComponent],
  template: `
    <div>
      <label (click)="restaurantClicked(restaurant)">{{restaurant.name}}</label>
      <restaurant-detail *ngIf="selectedRestaurant === restaurant && restaurant.display === true" [restaurant] = "selectedRestaurant"></restaurant-detail>
      <restaurant-review *ngIf="selectedRestaurant === restaurant && restaurant.display === true" [restaurant] = "selectedRestaurant" (onAddReview) = "addReview($event[0], $event[1])"></restaurant-review>
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

  addReview(rating: number, waitTime: number) {
    this.selectedRestaurant.reviews.push(rating);
    this.selectedRestaurant.waitTimes.push(waitTime);
  }
}
