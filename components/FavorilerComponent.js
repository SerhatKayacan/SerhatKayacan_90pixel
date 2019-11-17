import Movie from "../components/Movie";
import MoviesStore from "./Store";
import { observer } from "mobx-react";

@observer
class FavorilerComponent extends React.Component {
  componentDidMount() {
    MoviesStore.setFavorites();
  }
  render() {
    return (
      <div>
        <ul>
          {MoviesStore.favourites.map(movie => {
            return (
              <div key={movie.imdbID}>
                <Movie movie={movie} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default FavorilerComponent;
