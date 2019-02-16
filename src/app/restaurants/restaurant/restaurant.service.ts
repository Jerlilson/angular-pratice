import { MenuItem } from './../../restaurant-detail/menu-item.model';
// import { MEAT_API } from './../../app.api';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from '../../app.api';
import { Restaurant } from './restaurant.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorHandler } from './../../app.error-handler';

@Injectable()
export class RestaurantService {

  rests: Restaurant[] = [];

  constructor(private http: Http) {}

  // Faz a consulta pelos restaurantes e retorna
  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
    .map( response => response.json())
    .catch(ErrorHandler.handleError) ;
  }

  /**
   * Faz a busca no back end por um restaurante a partir de um id
   * @param id o id para consulta
   */
  getRestaurantesById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

  /**
   * Recupera os reviews de um restaurante
   * @param id o id do restaurante para a consulta
   */
  getReviewsOfRestaurants(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }

   /**
   * Busca e retorna o menu dos restaurantes
   * @param id o id do restaurante para a consulta do menu
   */
  getMenuOfRestaurants(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).
    map(response => response.json())
    .catch(ErrorHandler.handleError);
  }


}


