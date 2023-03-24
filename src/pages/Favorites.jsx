import React from "react";
import { useSelector } from "react-redux";
import { CardsContainer } from "../style/CardContainer";

function Favorites() {
  const { bookmark } = useSelector((state) => state.bookmark);
  return <CardsContainer>Favorites</CardsContainer>;
}

export default Favorites;
