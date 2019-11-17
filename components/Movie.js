const Movie = props => {
  return (
    <li className="list-group-item">
      <p>{props.movie.Title}</p>
      <p>{props.movie.Year}</p>
      <img style={{ height: "200px" }} src={props.movie.Poster}></img>
    </li>
  );
};
export default Movie;
