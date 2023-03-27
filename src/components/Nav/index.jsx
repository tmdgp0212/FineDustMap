import React from "react";
import { NavLink } from "react-router-dom";
import { MdLocationPin, MdMap, MdBookmark } from "react-icons/md";
import * as S from "./style";

function Nav() {
  return (
    <S.Nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <MdLocationPin />
        <span>내 지역</span>
      </NavLink>
      <NavLink
        to="/all"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <MdMap />
        <span>전체보기</span>
      </NavLink>
      <NavLink
        to="/bookmark"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <MdBookmark />
        <span>즐겨찾기</span>
      </NavLink>
    </S.Nav>
  );
}

export default React.memo(Nav);
