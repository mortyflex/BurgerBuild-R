import React from "react";
import Aux from "../../hoc/Aux";

import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = ({ children }) => {
  return (
    <Aux>
      <Toolbar />
      <main className="Content">{children}</main>
    </Aux>
  );
};

export default Layout;
