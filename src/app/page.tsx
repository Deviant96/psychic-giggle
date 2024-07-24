"use client";

import Films from "@/components/Films";
import type { character, Film } from "./utils/types";
import getPeople from "@/app/utils/getPeople";
import { useEffect, useState } from "react";
import { getRandomNumber } from "@/app/utils/rand";
import LogoutButton from "@/components/LogoutButton";
import Modal from "@/components/Modal";
import LoginForm from "@/components/LoginForm";
import Hero from "@/components/Hero";
import axios from "axios";

const Home: React.FC = () => {
  const [character, setCharacter] = useState<character>();
  const [authenticated, setAuthenticated] = useState<boolean>();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const peopleId = getRandomNumber();
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAuthenticated(!!localStorage.getItem("psychicGiggle_userSession"));
    }

    if (!authenticated) {
    }

    const fetchData = async () => {
      const res = await getPeople(peopleId);
      setCharacter(res);
    };

    fetchData();

    const fetchFilms = async () => {
      const res = await axios.get('https://swapi.dev/api/films/');
      setFilms(res.data.results);
    };

    fetchFilms();
  }, []);

  const openSignInModal = () => setIsSignInModalOpen(true);
  const closeSignInModal = () => setIsSignInModalOpen(false);

  const heroFilms: Film[] = films.slice(0, 5);

  return (
    <>
      <div className="">
        <header className="px-10 py-6 bg-blue-900 text-white flex flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">{character?.name}</h1>
          {authenticated ? 
          (<LogoutButton />)
          :
          <button onClick={openSignInModal} className="bg-[#ffb400] text-black font-bold px-6 py-2 rounded-full">
            Sign In
          </button>
          }
        </header>
        <main>
          <Hero slides={heroFilms} />
          <Films />
        </main>
        <footer className="bg-blue-800 w-full px-10 py-6">
          <div className="text-center font-bold"> Copyright &copy; 2024 DesktopIP </div>
        </footer>
        <Modal isOpen={isSignInModalOpen} onClose={closeSignInModal} title="Sign In">
          <LoginForm />
        </Modal>
      </div>
    </>
  );
};

export default Home;
