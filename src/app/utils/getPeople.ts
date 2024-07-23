"use server";

import axios from "axios";

const getPeople = async (id: number) => {
  const res = await axios.get(`https://swapi.dev/api/people/${id}`);
  const character = res.data;

  return character;
};

export default getPeople;
