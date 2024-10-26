
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface movies {
  "id": number
  "movie_id": number
  "title": string
  "overview": string
  "release_date": string
  "popularity": number
  "price": number
  "category": String
  "duration": string
}

@Injectable({
  
  providedIn: 'root'
})

  
export class ApiService {

  url = "https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php?limit=100"

  

  constructor(
    private http: HttpClient

  ) { }

  obtieneDatos(): Observable<movies>{
    return this.http.get<movies>(this.url);
  }

 
}
