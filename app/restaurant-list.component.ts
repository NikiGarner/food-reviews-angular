import { Component, EventEmitter } from 'angular2/core';
import { RestaurantComponent } from './restaurant.component';
import { Restaurant } from './restaurant.model';
import { RestaurantDetailsComponent} from './restaurant-detail.component';
import { RestaurantReviewComponent } from './restaurant-review.component';
import { SpecialityPipe } from './speciality.pipe';
import { NewRestaurantComponent } from './new-restaurant.component';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  pipes: [SpecialityPipe],
  directives: [RestaurantComponent, RestaurantDetailsComponent, RestaurantReviewComponent, NewRestaurantComponent],
  template: `
  <select (change)="onSpecialityChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option *ngFor="#i of restaurantList">{{i.speciality}}</option>
  </select>
  <restaurant-display *ngFor="#currentRestaurant of restaurantList | speciality:filterSpeciality" [restaurant] = "currentRestaurant" (click)="restaurantClicked(currentRestaurant)" ></restaurant-display>

  <restaurant-detail *ngIf="selectedRestaurant" [restaurant] = "selectedRestaurant">
  </restaurant-detail>
  <restaurant-review *ngIf="selectedRestaurant" [restaurant] = "selectedRestaurant">
  </restaurant-review>

  <new-restaurant (onSubmitNewRestaurant) = "createRestaurant($event[0], $event[1], $event[2], $event[3], [], [])"></new-restaurant>
  `
})
export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  public filterSpeciality: "all";
  constructor() {
    this.onRestaurantSelect = new EventEmitter();
  };
  onSpecialityChange(filterOption) {
    this.filterSpeciality = filterOption;
  }
  createRestaurant(name: string, speciality: string, address: string, price: string) {
    this.restaurantList.push(
      new Restaurant(name, speciality, address, parseInt(price), [], [])
    );
  }
  restaurantClicked(clickedRestaurant: Restaurant): void {
    // this.selectedRestaurant = clickedRestaurant;
    // this.onRestaurantSelect.emit(clickedRestaurant);
  }
}
