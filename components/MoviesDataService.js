import axios from "axios";

class MoviesDataService {
  getSearchedMovies(title, year, type) {
    return axios.get(
      `http://www.omdbapi.com/?apikey=7175a363&s=${title}&y=${year}&type=${type}`
    );
  }
}

export default new MoviesDataService();
