import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=8c247ea0b4b56ed2ff7d41c9a833aa77'
    ).subscribe((data) => {
      console.log("data is present here : "+data)
    })
  }
}
