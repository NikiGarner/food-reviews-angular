import {Pipe, PipeTransform} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "speciality",
  pure: false
})

export class SpecialityPipe implements PipeTransform {
  transform(input: Restaurant[], info) {
    var restaurantSpeciality = info[0];
    if (restaurantSpeciality === "all" || !restaurantSpeciality) {
      return input;
    } else {
      return input.filter(function(restaurant){
        return restaurant.speciality === restaurantSpeciality;
      });
    }
  }
}
