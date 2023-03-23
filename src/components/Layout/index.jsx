import { Outlet } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";
import * as S from "./style";

function Layout() {
  return (
    <S.Layout>
      <Header />
      <Outlet />
      <Nav />
    </S.Layout>
  );
}

export default Layout;
