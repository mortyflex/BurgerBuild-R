import React from "react";
import Aux from "../../hoc/Aux";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className="Content">{children}</main>
    </Aux>
  );
};

export default Layout;
