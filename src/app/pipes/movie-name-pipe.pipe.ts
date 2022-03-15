import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie';
@Pipe({
  name: 'movieNamePipe',
})
export class MovieNamePipe implements PipeTransform {
  transform(movie: Movie[], movieName: string): Movie[] {
    if (!movieName) return movie;
    return movie.filter((movie) => movie.title.includes(movieName));
  }
}
