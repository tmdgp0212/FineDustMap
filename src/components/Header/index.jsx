import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getDustData } from "../../store/dustReducer/dust";
import * as S from "./style";

function Header() {
  const {
    loading,
    error,
    entities: cities,
  } = useSelector((state) => state.dust);
  const [city, setCity] = useState("서울");
  const [districts, setDistricts] = useState();
  const location = useLocation();
  const dispatch = useDispatch();

  const changeCity = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    dispatch(getDustData(city));
  }, [city]);

  useEffect(() => {
    setDistricts(cities.map((city) => city.stationName));
  }, [cities]);

  return (
    <S.Header>
      <div className="title">
        <h1>FineDust Map</h1>
        <div className="logo">
          <img src="assets/dust.png" alt="" />
        </div>
      </div>
      {location.pathname !== "/bookmark" && (
        <div className="options">
          <select onChange={changeCity}>
            <option value={"서울"}>서울</option>
            <option value={"부산"}>부산</option>
            <option value={"대구"}>대구</option>
            <option value={"인천"}>인천</option>
            <option value={"광주"}>광주</option>
            <option value={"대전"}>대전</option>
            <option value={"울산"}>울산</option>
            <option value={"경기"}>경기</option>
            <option value={"충북"}>충북</option>
            <option value={"충남"}>충남</option>
            <option value={"전북"}>전북</option>
            <option value={"전남"}>전남</option>
            <option value={"경북"}>경북</option>
            <option value={"경남"}>경남</option>
            <option value={"제주"}>제주</option>
            <option value={"세종"}>세종</option>
          </select>

          {location.pathname === "/" && (
            <select>
              {districts &&
                districts.map((dist, idx) => (
                  <option key={idx} value={dist}>
                    {dist}
                  </option>
                ))}
            </select>
          )}
        </div>
      )}
    </S.Header>
  );
}

export default Header;
