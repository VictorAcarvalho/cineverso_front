/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Swal from 'sweetalert2';
import { getAllMovies, searchMoviesByParams } from '../../services/api';
import { Movie, MovieSearchParams } from '../../types/movies.types';
import MovieBox from '../../components/movieBox/MovieBox';
import styles from './HomePage.module.css';
import SearchInput from '../../components/searchInput/SearchInput';

const HomePage: React.FC = () => {

  const [movies, setMovies] = useState(Array<Movie>);
  //const[user,setUser] = useState('');

  useEffect(() => {
    const handleData = async () => {
      try {
        const moviesResponse = await getAllMovies();

        setMovies(moviesResponse);

      } catch (error: any) {
        Swal.fire({
          title: 'Ops!',
          text: error.message,
          icon: 'error'
        })
      }
    };

    handleData();

  }, []);
  
  const handleSearchMovies = async (title: string, director: string, genre: string, actor: string) => {
    try {
      const searchParams: MovieSearchParams = { title, director, genre, actor };
      const searchResponse = await searchMoviesByParams(searchParams); 
      setMovies(searchResponse); 
    } catch (error: any) {
      Swal.fire({
        title: 'Erro na Busca',
        text: 'Não foi possível realizar a busca.',
        icon: 'error',
      });
    }
  };


  return (
    <>
      <Header />
      <SearchInput onSearch={handleSearchMovies} /> 
      <div className={styles.collumContainer}>
        <ul className={styles.rowContainer}>
          {
            movies.map((movie) => (
              <MovieBox key={movie.movieId} {...movie}/>
            ))
          }
        </ul>
      </div>

    </>
  );
};

export default HomePage;