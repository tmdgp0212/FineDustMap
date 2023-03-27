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
    dispatch(getBookmarkData(bookmark));
  }, [bookmark]);

  if (loading) return <Loading />;
  return (
    <CardsContainer>
      {bookmarkData.length > 0 ? (
        bookmarkData.map((city, idx) => <DustCard key={idx} dustData={city} />)
      ) : (
        <p className="msg">즐겨찾기가 없습니다</p>
      )}
    </CardsContainer>
  );
}

export default Favorites;
