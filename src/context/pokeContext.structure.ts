import React from "react";

export interface IPokeContext {
  loading: boolean;
  pokeName: string;
  setPokeName: any;
  pokeImg: string;
  setPokeImg: any;
  pokeType: string;
  setPokeType: any;
  pokemonList: any;
}

export interface IProps {
  children: React.ReactNode;
}
