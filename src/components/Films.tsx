'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Film } from '@/app/utils/types';
import FilmListSkeleton from './FilmListSkeleton';
import FilmItem from './FilmItem';

const Films: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const res = await axios.get('https://swapi.dev/api/films/');
      setFilms(res.data.results);
    };

    fetchFilms();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-10 md:gap-4 md:py-20 md:px-10">
      {films.length < 1 ? (
        <FilmListSkeleton />
      ) : (
        <>
          {films.map((film, index) => (
            <FilmItem key={index} film={film} />
          ))}
        </>
      )}
      
    </div>
  );
};

export default Films;
