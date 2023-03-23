import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
      {cities.map((city, idx) => (
        <div key={idx}>{city.stationName}</div>
      ))}
    </S.AllCities>
  );
}

export default AllCities;
