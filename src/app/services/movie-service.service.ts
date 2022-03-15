import { Movie } from './../interfaces/movie';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[] = [];
  constructor() {}
  addOneMovie(movieObj: Movie): void {
    this.movies.push(movieObj);
  }
  getMovies() {
    return this.movies;
  }
}
