import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = new Array<Movie>();
  selMovie: Movie = null;
  isAddingNewMovie = false;

  constructor( private movieService: MovieService) {

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
    this.movieService.insert(this.selMovie);

  }else{
    this.movieService.update(this.selMovie);
  }
    this.movies = this.movieService.listAll();
    this.selMovie = null;

}else{
  alert('Precisa informar');
  }


}

removeMovie(is: number){
  //remove a apartir de 1 posição

  if (confirm("Isso ira apagar o item")){
    this.movieService.remove(id);
  }


}

}
