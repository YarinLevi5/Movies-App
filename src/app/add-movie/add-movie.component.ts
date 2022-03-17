import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie-service.service';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  @Input() title = '';
  @Input() date = '';
  @Input() summary = '';
  @Input() genre = '';
  @Input() time = '';
  @Input() isNew = false;

  addMovie() {
    let movieObject = {
      title: this.title,
      date: new Date(this.date),
      summary: this.summary,
      genre: this.genre,
      time: this.time,
      isNew: this.toggleIsNewValue(),
    };
    this.service.addOneMovie(movieObject);
    this.title = this.date = this.summary = this.genre = this.time = '';
    this.isNew = false;
  }
  toggleIsNewValue() {
    return this.isNew;
  }
  constructor(private service: MovieService) {}

  ngOnInit(): void {}
}
