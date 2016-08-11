import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'new-restaurant',
  outputs: ['onSubmitNewRestaurant'],
  template: `
  <div>
    <h3>Add a new Restaurant</h3>
    <input placeholder="Restaurant Name" class="input-lg" #newName>
    <input placeholder="Cuisine Specialty" class="input-lg" #newSpeciality>
    <input placeholder="Address" class="input-lg" #newAddress>
    Price Range <select placeholder="Price" #newPrice>
      <option value=1 selected="selected"> Cheap </option>
      <option value=2> Affordable </option>
      <option value=3> Moderate </option>
      <option value=4> Spendy </option>
      <option value=5> Really Spendy </option>
    </select>
    <button (click)="addRestaurant(newName, newSpeciality, newAddress, newPrice)">Add Restaurant</button>
  </div>
  `
})
export class NewRestaurantComponent {
  public onSubmitNewRestaurant: EventEmitter<String[]> = new EventEmitter();
  constructor(){
    this.onSubmitNewRestaurant = new EventEmitter()
  }
  addRestaurant(restaurantName: HTMLInputElement, restaurantSpeciality: HTMLInputElement, restaurantAddress: HTMLInputElement, restaurantPrice: HTMLInputElement) {
    this.onSubmitNewRestaurant.emit([restaurantName.value, restaurantSpeciality.value, restaurantAddress.value, restaurantPrice.value]);

  }
}
