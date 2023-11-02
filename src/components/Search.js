import React from "react";

const Search = ({ search, setSearch, searchMovies }) => {
  const handleSubmit = (e) => {
    // on récupère la valeur
    e.preventDefault();
    // on affect la valeure à la fonction de recherche
    searchMovies(search);
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quel films recherchez-vous ?"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Rechercher</button>
      </form>
    </div>
  );
};

export default Search;
