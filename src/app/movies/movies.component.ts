import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie-service.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  @Input() name = '';
  constructor(private service: MovieService) {
    this.movies = this.service.getMovies();
  }

  ngOnInit(): void {}
}
