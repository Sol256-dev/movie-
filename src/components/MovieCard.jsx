const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <div className="card-details">
        <img src={props.poster} alt="" srcset="" />
      </div>
    </div>
  );
};

export default MovieCard;
