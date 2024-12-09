import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent  {

  // movies: any

  constructor(private moviesService : MoviesService){}

  movies$ = this.moviesService.getPopularMovies()

  items=['Name1', 'Name2', 'Name3', 'Name4','Name5']

  // ngOnInit(){
  //   this.getPopoularMovies();
  // }

  // getPopoularMovies(){
  //   this.moviesService.getPopularMovies().subscribe((data) => {
  //     this.movies=data;
  //   })
  // }
}
