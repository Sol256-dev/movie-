const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <div className="card-details">
        <img src={`https://image.tmdb.org/t/p/w500/${props.poster}`} alt="" srcset="" />
      </div>
    </div>
  );
};

export default MovieCard;
