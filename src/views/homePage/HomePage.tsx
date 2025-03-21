import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Swal from 'sweetalert2';
import { getAllMovies } from '../../services/api';
import { Movie } from '../../types/movies.types';
import MovieBox from '../../components/movieBox/MovieBox';

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



  return (
    <>
      <Header />
      <div>
        <ul>
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