import { NavLink } from "react-router-dom";
import {
  MdLocationPin,
  MdMap,
  MdBookmarkBorder,
  MdBookmark,
} from "react-icons/md";
import * as S from "./style";

function Nav() {
  return (
    <S.Nav>
      <NavLink to="/">
        <MdLocationPin />
        <span>내 지역</span>
      </NavLink>
      <NavLink to="/all">
        <MdMap />
        <span>전체보기</span>
      </NavLink>
      <NavLink to="/bookmark">
        <MdBookmark />
        <span>즐겨찾기</span>
      </NavLink>
    </S.Nav>
  );
}

export default Nav;
