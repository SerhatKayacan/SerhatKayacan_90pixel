import MoviesStore from "./Store";
import { observer } from "mobx-react";

@observer
class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form-inline mt-3">
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              id="movieName"
              placeholder="enter name"
              onChange={e =>
                MoviesStore.changeInput(e.target.value, e.target.id)
              }
            ></input>
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="number"
              className="form-control"
              id="movieYear"
              placeholder="enter year"
              onChange={e =>
                MoviesStore.changeInput(e.target.value, e.target.id)
              }
            ></input>
          </div>
          <div className="form-group">
            <select
              className="form-control"
              id="movieType"
              onChange={e =>
                MoviesStore.changeInput(e.target.value, e.target.id)
              }
            >
              <option value="movie">movie</option>
              <option value="series">series</option>
              <option value="episode">episode</option>
            </select>
          </div>
          <button
            className="btn btn-primary ml-2"
            onClick={MoviesStore.getMovies}
          >
            Get Movies
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
