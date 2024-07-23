'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Film {
  episode_id: number;
  title: string;
  opening_crawl: string;
}

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {films.map((film) => (
        <div key={film.episode_id} className="p-4 border border-gray-300">
          <h2 className="text-xl font-bold">{film.title}</h2>
          <p>{film.opening_crawl}</p>
        </div>
      ))}
    </div>
  );
};

export default Films;
