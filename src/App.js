import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Em alta" fetchUrl={requests.fetchTrending} />
      <Row title="Melhores avaliados" fetchUrl={requests.fetchTopRated} />
      <Row title="Filmes de ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comédia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Filmes românticos" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
