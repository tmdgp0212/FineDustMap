import React from "react";
import * as S from "./style";

function Loading() {
  return (
    <S.Loading>
      <div className="loading-icon">
        <img src="/assets/loading.gif" alt="loading" />
      </div>
    </S.Loading>
  );
}

export default Loading;
