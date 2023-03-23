import { useSelector } from "react-redux";
import DustCard from "../../components/DustCard";
import * as S from "./style";

function AllCities() {
  const {
    loading,
    error,
    entities: cities,
  } = useSelector((state) => state.dust);

  return (
    <S.AllCities>
      <S.CityList>
        {cities.map((city, idx) => (
          <DustCard key={idx} dustData={city} />
        ))}
      </S.CityList>
    </S.AllCities>
  );
}

export default AllCities;
