import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./style";

function Nav() {
  return (
    <S.Nav>
      <NavLink to="/">내 지역</NavLink>
      <NavLink to="/all">전체보기</NavLink>
      <NavLink to="/bookmark">즐겨찾기</NavLink>
    </S.Nav>
  );
}

export default Nav;
