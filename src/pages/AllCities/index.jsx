import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DustCard from "../../components/DustCard";
import { getDustData } from "../../store/dustReducer/dust";
import * as S from "./style";

function AllCities() {
  const {
    loading,
    error,
    entities: cities,
  } = useSelector((state) => state.dust);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDustData());
  }, []);

  useEffect(() => {
    console.log(cities);
  }, [cities]);

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
