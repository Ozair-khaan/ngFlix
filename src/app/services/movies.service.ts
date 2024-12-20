import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopularMovies(){
    return this.http.get<any>(
      'https://jsonplaceholder.typicode.com/posts'
    )
  }
}
