import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import {PeliculasCard } from "./PeliculasCard.jsx";
import { getGenre } from "../utils/generocall.js";
import Button from 'react-bootstrap/Button';

import { Spinner } from "../Components/Spinner";

export const Genero =( {genero, setGenero, selectedGenre, setSelectedGenre }) => {
    
    const { genresId } = useParams() ;
    const [cargando,setCargando]= useState(true);
    const [ genres, setGenres] = useState(null);
    
          useEffect(() => {
    setCargando(true)
    getGenre(``).then((data) => {
      setGenres(data.genres);
    /*    console.log(setPelicula); */
    setCargando(false)
    });
  }, []);
       if(cargando){
    return <Spinner/>
  }
   const addGenre = genre => {
      setSelectedGenre([...selectedGenre, genre]);
      setGenero(genero.filter(g=> g.id !== genero.id))
   }

   return (
        <>
        {selectedGenre.map((genre) => 
        <div>
            <h1 color="red">soy un </h1> 
        </div>)}
        {genres.map((genre) => 
        <div>
            <Button 
            variant="primary"
            onClick={addGenre}>{genre.name}
            </Button>
             <h2>{genre.name}</h2>
        </div>)};
        </>
    );
  };




    