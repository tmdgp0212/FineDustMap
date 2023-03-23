import React, { useEffect } from "react";
import * as S from "./style";

function DustCard({ dustData }) {
  const dustGrade = function () {
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

  return (
    <S.DustCard grade={dustGrade().gradeNum}>
      <div className="location">
        <h2>{dustData.stationName}</h2>
        <span>{dustData.sidoName}</span>
      </div>
      <div className="result">
        <div className="grade">{dustGrade().gradeStr}</div>
        <p>미세먼지 농도 : {dustData.pm10Value}㎍/㎥</p>
        <p>오존 농도 : {dustData.o3Value}㎍/㎥</p>
      </div>
      <p className="data-time">{dustData.dataTime} 기준</p>
    </S.DustCard>
  );
}

export default DustCard;
