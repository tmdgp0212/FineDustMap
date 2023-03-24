import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  changeCityAll,
  changeMydist,
} from "../../store/bookmarkReducer/bookmark";
import { getDustData } from "../../store/dustReducer/dust";
import * as S from "./style";

const cityArr = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "경기",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
  "세종",
];

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { entities: cities } = useSelector((state) => state.dust);
  const { myCity, myDistrict, cityAll } = useSelector(
    (state) => state.bookmark
  );
  const [cityAllOpt, setCityAllOpt] = useState(cityAll);
  const [myCityOpt, setMyCityOpt] = useState(myCity);
  const [district, setDistrict] = useState(myDistrict);
  const [districts, setDistricts] = useState();

  const changeCityAllInput = (e) => {
    const value = e.target.value;
    setCityAllOpt(value);
    dispatch(getDustData(value));
    dispatch(changeCityAll({ city: value }));
  };

  const changeMyCityInput = (e) => {
    const value = e.target.value;
    setMyCityOpt(value);
    dispatch(getDustData(value));
  };

  const changeDistrict = (e) => {
    setDistrict(e.target.value);
    dispatch(changeMydist({ myCity: myCityOpt, myDistrict: e.target.value }));
  };

  const loadData = () => {
    if (location.pathname === "/") {
      dispatch(getDustData(myCity));
    } else if (location.pathname === "/all") {
      dispatch(getDustData(cityAll));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [location]);

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
      <div className="options">
        {location.pathname === "/all" && (
          <select onChange={changeCityAllInput} value={cityAllOpt}>
            {cityArr.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
        )}

        {location.pathname === "/" && (
          <>
            <select onChange={changeMyCityInput} value={myCityOpt}>
              {cityArr.map((city, idx) => (
                <option key={idx} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <select onChange={changeDistrict} value={district}>
              <option value="none">선택해주세요</option>
              {districts &&
                districts.map((dist, idx) => (
                  <option key={idx} value={dist}>
                    {dist}
                  </option>
                ))}
            </select>
          </>
        )}
      </div>
    </S.Header>
  );
}

export default Header;
