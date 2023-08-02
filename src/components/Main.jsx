import axios from "axios";
import React, { useState } from "react";
import Requist from "../Requist";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useState(() => {
    axios.get(Requist.upcoming).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //   console.log(movie);

  const tranceCharecter = (str,num) => {

    if(str?.length>num){
      return str.slice(0,num) + "..."
    }else{
      return str;
    }
      
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
        />

        <div className="absolute w-full top-[30%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-4xl font-bold">{movie?.title}</h1>
          <div className="my-5">
            <button className="border text-black bg-gray-300 py-2 px-4 border-gray-300">
              Play
            </button>
            <button className="border  py-2 px-4 border-gray-300 ml-4">
              Watch leter
            </button>
          </div>
          <p className="text-gray-400">Release: {movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {tranceCharecter(movie?.overview,150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
