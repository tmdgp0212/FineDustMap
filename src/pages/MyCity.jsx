import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CardsContainer } from "../style/CardContainer";
import DustCard from "../components/DustCard";
import Loading from "../components/Loading";

function MyCity() {
  const { loading, error, entities } = useSelector((state) => state.dust);
  const { citiesData } = entities;
  const { myDistrict } = useSelector((state) => state.bookmark);
  const [savedMyCity, setSavedMyCity] = useState();

  useEffect(() => {
    setSavedMyCity(citiesData.find((city) => city.stationName === myDistrict));
  }, [myDistrict, citiesData]);

  if (loading) return <Loading />;
  if (error) return <p className="msg">Error! 다시 시도해주세요</p>;
  return (
    <CardsContainer>
      {savedMyCity ? (
        <DustCard dustData={savedMyCity} />
      ) : (
        <p className="msg">지역을 선택해주세요</p>
      )}
    </CardsContainer>
  );
}

export default MyCity;
