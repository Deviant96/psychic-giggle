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
import { PiGps } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { BsInstagram, BsTelephone, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";
import { RiFacebookCircleFill } from "react-icons/ri";
import { CiGps } from "react-icons/ci";
import { FaLocationPin } from "react-icons/fa6";

const Home: React.FC = () => {
  const [character, setCharacter] = useState<character>();
  const [authenticated, setAuthenticated] = useState<boolean>();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const peopleId = getRandomNumber();
  const [films, setFilms] = useState<Film[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
      <div className="bg-[#041836] relative">
        <header
          className="md:absolute top-0 left-0 w-full z-[11]"
        >
        <nav className="md:shadow-lg bg-[#041836] md:my-4 md:mx-8 rounded-xl md:shadow-none">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center">
                <button
                  className="md:hidden text-gray-500 focus:outline-none"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
                <div className="text-lg font-bold text-[#ffb400] ml-2 md:ml-0">{character?.name}</div>
              </div>
              <div className="hidden md:flex space-x-4">
                <a href="#" className="text-[#ffb400] hover:text-[#ffb400]">Home</a>
                <a href="#" className="text-[#ffb400] hover:text-[#ffb400]">About</a>
                <a href="#" className="text-[#ffb400] hover:text-[#ffb400]">Services</a>
                <a href="#" className="text-[#ffb400] hover:text-[#ffb400]">Contact</a>
              </div>
              <div>
                {authenticated ? 
                  (<LogoutButton />)
                  :
                  <button onClick={openSignInModal} className="bg-[#ffb400] text-black font-bold px-6 py-2 rounded-full">
                    Sign In
                  </button>
                }
              </div>
            </div>
          </div>
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} px-2 pb-3 space-y-1`}>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Services</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </nav>
        </header>
        <main className="m-4 md:m-0">
          <Hero slides={heroFilms} />
          <Films />
        </main>
        <footer className="w-full">
          <div className="bg-[#ffb400] px-4 py-6 text-black rounded-t-2xl block md:hidden">
            <h4 className="text-xl font-bold text-center mt-4">{character?.name}</h4>
            <div className="mt-8">
              <h5 className="mb-2 font-bold">Follow us</h5>
              <ul className="flex flex-row gap-4 text-[#bb6002]">
                <li><RiFacebookCircleFill className="text-3xl"/></li>
                <li><BsInstagram className="text-3xl"/></li>
                <li><BsTiktok className="text-3xl"/></li>
                <li><BsTwitter className="text-3xl"/></li>
                <li><BsYoutube className="text-3xl"/></li>
              </ul>
            </div>
            <div className="mt-8">
              <h5 className="mb-2 font-bold">Contact us</h5>
              <ul className="flex flex-col gap-4 text-[#bb6002] font-bold">
                <li className="flex flex-row items-center gap-2"><MdEmail className="text-xl text-white" /> Email to desktopip@mail.com</li>
                <li className="flex flex-row items-center gap-2"><BsTelephone className="text-xl text-white" /> Call us at 0123456789</li>
              </ul>
            </div>
            <div className="mt-8">
              <h5 className="mb-2 font-bold">Address</h5>
              <div className="flex flex-row items-center gap-2 text-[#bb6002] font-bold"><FaLocationPin className="text-xl text-white" /> Address</div>
            </div>

          </div>
          <div className="bg-blue-800 px-10 py-6 text-center text-white font-bold"> Copyright &copy; 2024 DesktopIP </div>
        </footer>
        <Modal isOpen={isSignInModalOpen} onClose={closeSignInModal} title="Sign In">
          <LoginForm />
        </Modal>
      </div>
    </>
  );
};

export default Home;
