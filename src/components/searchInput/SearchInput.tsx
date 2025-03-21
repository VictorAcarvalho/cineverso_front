import React, { useState } from 'react';
import style from './SearchInput.module.css';

interface SearchInputProps {
  onSearch: (title: string, director: string, genre: string, actor: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [title, setTitle] = useState<string>('');
  const [director, setDirector] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [actor, setActor] = useState<string>('');

  const handleSearch = () => {
    onSearch(title, director, genre, actor);
  };

  return (
    <div className={style.container}>
      <div className={style.rowWrapper}>
        <input
          type="text"
          placeholder="Busque por título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Busque por diretor"
          onChange={(e) => setDirector(e.target.value)}
          value={director}
        />
        <input
          type="text"
          placeholder="Busque por gênero"
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        />
        <input
          type="text"
          placeholder="Busque por ator"
          onChange={(e) => setActor(e.target.value)}
          value={actor}
        />
        <button onClick={handleSearch} type="submit">
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
