import { useSelector } from "react-redux";
import DustCard from "../../components/DustCard";
import Loading from "../../components/Loading";
import * as S from "./style";

function AllCities() {
  const {
    loading,
    error,
    entities: cities,
  } = useSelector((state) => state.dust);

  if (loading) return <Loading />;
  return (
    <S.AllCities>
      {cities.map((city, idx) => (
        <DustCard key={idx} dustData={city} />
      ))}
    </S.AllCities>
  );
}

export default AllCities;
