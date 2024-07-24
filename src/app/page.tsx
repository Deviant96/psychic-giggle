"use client";

import Films from "@/components/Films";
import type { character, Film } from "./utils/types";
import getPeople from "@/app/utils/getPeople";
import { useEffect, useState } from "react";
import { getRandomNumber } from "@/app/utils/rand";
import Modal from "@/components/Modal";
import LoginForm from "@/components/LoginForm";
import Hero from "@/components/Hero";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  const [character, setCharacter] = useState<character>();
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const peopleId = getRandomNumber();
  const [films, setFilms] = useState<Film[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAuthenticated(!!localStorage.getItem("psychicGiggle_userSession"));
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
      <div className="bg-[#041836] relative">
        <Header
          character={character}
          authenticated={authenticated}
          openSignInModal={openSignInModal}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <main className="m-4 md:m-0">
          <Hero slides={heroFilms} />
          <Films />
        </main>
        <Footer character={character} />
        <Modal isOpen={isSignInModalOpen} onClose={closeSignInModal} title="Sign In">
          <LoginForm />
        </Modal>
      </div>
    </>
  );
};

export default Home;
