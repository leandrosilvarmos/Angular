import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = new Array<Movie>();
  selMovie: Movie = null;
  isAddingNewMovie = false;

  constructor() {

    const filme1 = new Movie();
    filme1.name = ' O poço';
    filme1.rating = 8;

    this.movies.push(filme1);

  }

  ngOnInit(): void {
  }

  selectMovie(movie: Movie){
    this.selMovie = movie;
    this.isAddingNewMovie = false;
  }

  newMovie(){
    this.selMovie = new Movie();
    this.isAddingNewMovie = true;

  }

addMovie(){


  if (this.selMovie.name !== ''  && !isNaN(this.selMovie.rating)){
    if (this.isAddingNewMovie){
    this.movies.push(this.selMovie);
  }
    this.selMovie = null;

}else{
  alert('Precisa informar');
  }

}

removeMovie(pos: number){
  //remove a aprtir de 1 posição

  if (confirm("Isso ira apagar o item")){
    this.movies.splice(pos , 1);
  }


}

}
