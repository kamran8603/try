import React, { useEffect, useState } from "react";
import "./Final.css";
import Searchh from "./Searchh";

// const apiKey = "2f5fdf1f9e4a2bcfe4838d5103115f87";
const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjVmZGYxZjllNGEyYmNmZTQ4MzhkNTEwMzExNWY4NyIsInN1YiI6IjY0YWMwNzk1M2UyZWM4MDBhZjdlNzcwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tDNQMZ3Aom8kismpaVBY7N-Y7sTO870TKI62QiQ661k";

const posterPathBase = "https://image.tmdb.org/t/p/w500";

const getTopMovies = () => {
  const url =
     "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
      const options = {
      method: "GET",
      headers: {
      accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => json);
};


const getMoviesByGenre = (genre) => {
  const url =
     "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres="+genre;
      const options = {
      method: "GET",
      headers: {
      accept: "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => json);
};




//for popular movies


const popular = ()=>{
  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + accessToken
  }
};

 return fetch(url, options)
  .then(res => res.json())
  .then((json)=>json)

}

// For top rated movies

const  topRatedMovies = ()=>{
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=hindi&page=2';
    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: "Bearer "+ accessToken
  },
};
return fetch(url, options)
.then((res)=>res.json())
.then((json)=>json);

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
}

function Final() {
  // const url = "https://dummyapi.online/api/movies";
  const [data, setData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");



  const handleSearch = (searchQuery) => {
    console.log(searchQuery);
  const url =
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query="+searchQuery;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjVmZGYxZjllNGEyYmNmZTQ4MzhkNTEwMzExNWY4NyIsInN1YiI6IjY0YWMwNzk1M2UyZWM4MDBhZjdlNzcwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tDNQMZ3Aom8kismpaVBY7N-Y7sTO870TKI62QiQ661k",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((response) => {
      setData(response.results);
    })
    .catch((err) => console.error("error:" + err));
  };



  const showMovies = (genre) => {
    getMoviesByGenre(genre).then((response) => {
      setData(response.results);
    });
  }


  const latest = ()=> {
    topRatedMovies().then(response=>{
      setData(response.results);
    });
  }


  const pop =()=>{
    popular().then(response=>{
      setData(response.results)
    })
  }


  useEffect(() => {
    getTopMovies().then((response) => {
      setData(response.results);
    });
  }, []);



  return (
    <div className="main_container">
      <div className="header_part">
        <img
          alt="logo"
          className="logo"
          src="https://img.freepik.com/premium-vector/search-movie-logo-template-design_20029-921.jpg?w=2000"
        />

        <Searchh onSearch={handleSearch} />
      </div>
      <div className="btn">
      <button className="button_latest" onClick={() => showMovies('16')}>Anime</button>
        <button className="button_latest" onClick={()=>latest()}>Latest</button>
        <button onClick={()=>pop()}>popular</button>
      </div>
      <div className="container">
        
        {data.map((item) => (
          <div className="card" key={item.id}>
            <img
              className="card-image"
              src={posterPathBase + item.poster_path}
              alt={item.title}
            />
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-rating">{item.rating}</p>
              <a
                className="card-link"
                href={item.imdb_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                IMDB Link
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <button onClick={handleNext}>Next</button> */}
    </div>
  );
}

export default Final;
