import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Server from "../Server";
import * as S from "./style";

function Layout() {
  return (
    <div>
      <Outlet />
      <Nav />
      {/* <Server /> */}
    </div>
  );
}

export default Layout;
