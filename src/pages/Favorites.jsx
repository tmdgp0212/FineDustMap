import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DustCard from "../components/DustCard";
import Loading from "../components/Loading";
import { getBookmarkData } from "../store/dustReducer/dust";
import { CardsContainer } from "../style/CardContainer";

function Favorites() {
  const { entities, loading } = useSelector((state) => state.dust);
  const { bookmarkData } = entities;
  const { bookmark } = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bookmark.length > 0) {
      dispatch(getBookmarkData(bookmark));
    }
  }, []);

  useEffect(() => {
    console.log(bookmarkData);
  }, [bookmarkData]);

  if (loading) return <Loading />;
  return (
    <CardsContainer>
      {bookmarkData &&
        bookmarkData.map((city, idx) => <DustCard key={idx} dustData={city} />)}
    </CardsContainer>
  );
}

export default Favorites;
