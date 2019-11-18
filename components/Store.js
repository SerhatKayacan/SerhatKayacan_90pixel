import { observable } from "mobx";
import MoviesDataService from "./MoviesDataService";

class MovieStore {
  @observable resultMovies = [];
  @observable movieTitle = "";
  @observable movieYear = null;
  @observable movieType = "movie";
  @observable favourites = [];

  getMovies = e => {
    e.preventDefault();
    MoviesDataService.getSearchedMovies(
      this.movieTitle,
      this.movieYear,
      this.movieType
    ).then(res => {
		if(res.data.Error === "Movie not found!"){
			this.resultMovies=[];
		}else{
			this.resultMovies = res.data.Search;
		}});
  };

  changeInput(value, id) {
    if (id === "movieName") {
      this.movieTitle = value;
    } else if (id === "movieYear") {
      this.movieYear = value;
    } else {
      this.movieType = value;
    }
  }

  addToFavourites(index) {
    let movieToAdd = this.resultMovies[index];
    this.favourites.push(movieToAdd);
    localStorage.setItem("favoriler", JSON.stringify(this.favourites));
  }

  setFavorites() {
    if (localStorage.getItem("favoriler")) {
      this.favourites = JSON.parse(localStorage.getItem("favoriler"));
    }
  }
}

export default new MovieStore();
