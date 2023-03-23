import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import * as S from "./style";

function Layout() {
  return (
    <S.Layout>
      <Outlet />
      <Nav />
    </S.Layout>
  );
}

export default Layout;
