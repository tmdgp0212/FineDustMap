import { useEffect, useState } from "react";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  removeBookmark,
} from "../../store/bookmarkReducer/bookmark";
import * as S from "./style";

const dustGrade = function (dustData) {
  switch (dustData.pm10Grade) {
    case "1":
      return { gradeNum: "blue", gradeStr: "좋음" };
    case "2":
      return { gradeNum: "green", gradeStr: "보통" };
    case "3":
      return { gradeNum: "yellow", gradeStr: "한 때 나쁨" };
    case "4":
      return { gradeNum: "orange", gradeStr: "나쁨" };
    case "5":
      return { gradeNum: "red", gradeStr: "매우 나쁨" };
    default:
      return { gradeNum: "gray", gradeStr: "알 수 없음" };
  }
};

function DustCard({ dustData }) {
  const dispatch = useDispatch();

  const { bookmark } = useSelector((state) => state.bookmark);
  const [isBookmark, setIsBookmark] = useState(false);

  const onClick = () => {
    setIsBookmark(!isBookmark);
    if (!isBookmark) {
      dispatch(
        addBookmark({
          bookmark: {
            sidoName: dustData.sidoName,
            stationName: dustData.stationName,
          },
        })
      );
    } else {
      dispatch(
        removeBookmark({
          bookmark: {
            sidoName: dustData.sidoName,
            stationName: dustData.stationName,
          },
        })
      );
    }
  };

  useEffect(() => {
    bookmark.map((item) => {
      if (
        item.sidoName === dustData.sidoName &&
        item.stationName === dustData.stationName
      ) {
        setIsBookmark(true);
      }
    });
  }, []);

  return (
    <S.DustCard grade={dustGrade(dustData).gradeNum}>
      <div className="location">
        <h2>{dustData.stationName}</h2>
        <span>{dustData.sidoName}</span>
      </div>
      <div className="result">
        <div className="grade">{dustGrade(dustData).gradeStr}</div>
        <p>미세먼지 : {dustData.pm10Value}㎍/㎥</p>
        <p>초미세먼지 : {dustData.pm25Value}㎍/㎥</p>
      </div>
      <p className="data-time">{dustData.dataTime} 기준</p>
      <div className="bookmark" onClick={onClick}>
        {isBookmark ? <MdBookmark /> : <MdBookmarkBorder />}
      </div>
    </S.DustCard>
  );
}

export default DustCard;
