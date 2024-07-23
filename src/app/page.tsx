"use client";

import Films from "@/components/Films";
import type { character } from "./utils/types";
import getPeople from "@/app/utils/getPeople";
import { useEffect, useState } from "react";
import { getRandomNumber } from "@/app/utils/rand";
import LogoutButton from "@/components/LogoutButton";
import Modal from "@/components/Modal";
import LoginForm from "@/components/LoginForm";

const Home: React.FC = () => {
  const [character, setCharacter] = useState<character>();
  const [authenticated, setAuthenticated] = useState<boolean>();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const peopleId = getRandomNumber();

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
  }, []);

  const openSignInModal = () => setIsSignInModalOpen(true);
  const closeSignInModal = () => setIsSignInModalOpen(false);

  return (
    <>
      <div className="container mx-auto">
        <header className="p-4 bg-gray-800 text-white flex flex-row justify-between items-center">
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
          <Films />
        </main>
        <Modal isOpen={isSignInModalOpen} onClose={closeSignInModal} title="Sign In">
          <LoginForm />
        </Modal>
      </div>
    </>
  );
};

export default Home;
