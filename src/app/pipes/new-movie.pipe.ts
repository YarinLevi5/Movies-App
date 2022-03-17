import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie';
@Pipe({
  name: 'newMovie',
})
export class NewMoviePipe implements PipeTransform {
  transform(movie: Movie[], isNew: boolean): Movie[] {
    if (!isNew) return movie;
    return movie.filter((movie) => movie.isNew);
  }
}
