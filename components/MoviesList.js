import Movie from "../components/Movie";
import { observer } from "mobx-react";
import MoviesStore from "./Store";

@observer
class MoviesList extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {MoviesStore.resultMovies.map((movie, index) => {
            return (
              <div key={index} className="row mt-3">
                <div className="col-md-8">
                  <Movie movie={movie} />
                </div>
                <div className="col-md-4">
                  <button onClick={() => MoviesStore.addToFavourites(index)}>
                    Favorilere ekle
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MoviesList;
