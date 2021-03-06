import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb.js"
import MovieRow from "./components/MovieRow.js"
import FeaturedMovie from "./components/FeaturedMovie.js";
import Header from "./components/Header.js";
import "./App.css"


function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackheader] = useState(false);

  useEffect(() => {
    const loadAll = async () =>{
      //pegando lista total
      let list =  await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o filme em destaque
      let originals = list.filter(p => p.slug === "originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo);
    }
    loadAll();
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackheader(true)
      }else{
        setBlackheader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

  }, [])

  return (
    <div className="App">
    <Header black={blackHeader}/>
    {featuredData && <FeaturedMovie item={featuredData}/>}
      <section className="lists">
        {movieList.map((item, key)=>(
          <div>
            <MovieRow key={key} title={item.title} items={item.items}/>
          </div>
        ))}
      </section>
      <footer>
        <p>Feito com André Pires de Santis</p>
        Dados fornecidos pelo themovieDB.web
      </footer>
      <div className="loading">
          <img src="https://tenor.com/view/netflix-netflix-startup-netflix-logo-startup-logo-gif-18131525" alt="logo gif"></img>
      </div>
    </div>
  );
}

export default App;
