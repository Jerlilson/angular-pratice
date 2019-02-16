import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../restaurants/restaurant/restaurant.service';
import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.getRestaurantesById(this.route.snapshot.params['id']).subscribe(restaurant => this.restaurant = restaurant);
    //passa para a rota o parâmetro a ser buscado, anteriormente definido no módulo de rotas como id
  }

}
