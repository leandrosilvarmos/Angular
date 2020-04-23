import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private movies = new Array<Movie>();
  private autoGenerateId = 0;

  constructor() { }

  insert(movie: Movie){
    movie.id = this.autoGenerateId++;
    this.movies.push(movie);


  }

  listAll(): Array<Movie>{
    return this.movies;
  }


  remove(id: number){
    for (let i = 0; i < this.movies.length; i++) {
      let movie = this.movies[i];
      if(movie.id === id){
        this.movies.splice(i , 1);
        break;
      }

    }
  }

update(movie: Movie){

  for (let i = 0; i < this.movies.length; i++) {
    let movieInArray = this.movies[i];
    if(movieInArray.id === movie.id){
      this.movies[i] = movie;
      break;
    }

  }

}

}
