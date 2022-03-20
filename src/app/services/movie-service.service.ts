import { Movie } from './../interfaces/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[] = [];
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}
  sendGetRequest() {
    return this.httpClient.get<Movie>(this.REST_API_SERVER);
  }
  addOneMovie(movieObj: Movie): void {
    this.movies.push(movieObj);
  }
  getMovies() {
    return this.movies;
  }
}
