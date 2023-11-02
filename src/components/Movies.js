import React from "react";

const Movies = ({ movies }) => {
  //lien IMDB
  const imdb = "https://imdb.com/title/";

  return (
    <div className="movies">
      {movies.map((movie) => (
        <div className="movie" key={movie.imdbId}>
          <div className="movie-info">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://placehold.co/300x450/000000/FFF?text=Non+disponible"
              }
              alt={movie.Title}
            />
            <h3>{movie.Title}</h3>
            <p>
              Voir les détails{" "}
              <a href={imdb + movie.imdbId} target="_blank">
                IMDB
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
