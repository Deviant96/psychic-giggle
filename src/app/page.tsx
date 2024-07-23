"use client";

import Films from "@/components/Films";
import type { character } from "./utils/types";
import getPeople from "@/app/utils/getPeople";
import withAuth from "@/components/withAuth";
import { useEffect, useState } from "react";
// import { character } from './utils/types';

const Home: React.FC = () => {
  // const character: character = await getPeople(1);
  const [character, setCharacter] = useState<character>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPeople(1);
      setCharacter(res);
    };

    fetchData;
  }, []);

  return (
    <div className="container mx-auto">
      <header className="p-4 bg-gray-800 text-white">
        <h1>{character?.name}</h1>
      </header>
      <main>
        <Films />
      </main>
    </div>
  );
};

export default withAuth(Home);
