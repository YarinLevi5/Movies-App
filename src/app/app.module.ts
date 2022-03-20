import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MoviesContainerComponent } from './moviesContainer/moviesContainer.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieNamePipe } from './pipes/movie-name-pipe.pipe';
import { NewMoviePipe } from './pipes/new-movie.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesContainerComponent,
    MoviesComponent,
    MovieComponent,
    AddMovieComponent,
    MovieNamePipe,
    NewMoviePipe,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
