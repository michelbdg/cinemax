import { useEffect, useState } from "react";
import "./styles.css";
//Import du logo pour interpolation dans jsx
import cinemaxLogo from "./assets/cinemax-lg.png";

// Nos composants
import Search from "./components/Search.js";
import Movies from "./components/Movies.js";

export default function App() {
  // OMDB API
  const API = "https://www.omdbapi.com/?i=tt3896198&apikey=dd3ad7fd";

  // States (Etats)
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // Fonction : searcMovies()
  const searchMovies = async (searchValue) => {
    // Fetch de l'API OMDB
    const response = await fetch(API + "&s" + searchValue);
    const data = await response.json();

    if (data.Search) {
      setMovies([]);
    }
    // Vérifier les infos reçu par l'API
    console.log(data);
  };

  //useEffect pour lancer la recherche des films
  useEffect(() => {
    searchMovies("Hunger Games");
  }, []);

  return (
    <div className="App">
      <header>
        <img src={cinemaxLogo} className="logo" alt="logo cinemax" />
        <Search
          search={search}
          setSearch={setSearch}
          searchMovies={searchMovies}
        />
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}
