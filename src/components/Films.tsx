'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Film } from '@/app/utils/types';

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-20 px-10">
      {films.map((film, index) => (
        <div key={film.episode_id} className="min-h-[200px]">
          <div className="w-full relative h-full">
            <img
              src={`https://picsum.photos/200/100?random=${Math.random()}`}
              alt={`Movie poster`}
              className="object-cover h-full w-full rounded-lg"
            />
            <div className="z-20 absolute bottom-0 left-0 z-10 -translate-y-2/4 ms-4 flex flex-row gap-2">
              <h2 className="text-xl font-bold">{film.title}</h2>
              {index === 2 && (
                <span className="bg-yellow-500 rounded px-2 py-1 text-sm text-black font-bold">Exclusive</span>
              )}
            </div>
            <div className="w-full h-full absolute top-0 left-0 bg-dark-fade-in-bottom"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Films;
