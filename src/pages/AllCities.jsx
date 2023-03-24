import { useSelector } from "react-redux";
import DustCard from "../components/DustCard";
import Loading from "../components/Loading";
import { CardsContainer } from "../style/CardContainer";

function AllCities() {
  const { loading, error, entities } = useSelector((state) => state.dust);
  const { citiesData } = entities;

  if (loading) return <Loading />;
  if (error) return <>Error! 다시 시도해주세요</>;
  return (
    <CardsContainer>
      {citiesData.map((city, idx) => (
        <DustCard key={idx} dustData={city} />
      ))}
    </CardsContainer>
  );
}

export default AllCities;
