import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LordOfTheRingsService {

  baseUrl = 'https://the-one-api.dev/v2'
  movie = '/movie'
  character = '/character'
  

  //pagination settings

  //       /character?sort=name:asc  <-- to sort by ascent. by decrecent is desc

  limit = '?limit ='
  constructor(
    private _httpClient: HttpClient
  )
  {}
  
  getCharacters(){
    return this._httpClient.get(`${this.baseUrl}${this.character}`);
  }

  getMovie() {
    return this._httpClient.get(`${this.baseUrl}${this.movie}`);
  }
}
