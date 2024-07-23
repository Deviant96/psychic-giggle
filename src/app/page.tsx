"use client";

import Films from "@/components/Films";
import type { character } from "./utils/types";
import getPeople from "@/app/utils/getPeople";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getRandomNumber } from "@/app/utils/rand";
import LogoutButton from "@/components/LogoutButton";

const Home: React.FC = () => {
  const [character, setCharacter] = useState<character>();
  const peopleId = getRandomNumber();
  const router = useRouter();

  useEffect(() => {
    let isAuthenticated;
    if (typeof window !== "undefined") {
      isAuthenticated = localStorage.getItem("psychicGiggle_userSession");
    }

    if (!isAuthenticated) {
      router.replace("/login");
    }

    const fetchData = async () => {
      const res = await getPeople(peopleId);
      setCharacter(res);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <header className="p-4 bg-gray-800 text-white flex flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">{character?.name}</h1>
          <LogoutButton />
        </header>
        <main>
          <Films />
        </main>
      </div>
    </>
  );
};

export default Home;
