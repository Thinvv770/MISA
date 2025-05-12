import React from "react";
import Header from "../components/layout/Header";

const LayoutDefault = ({ children }) => (
  <React.Fragment>
    <Header className="invert-color" navPosition="right" />
    <main className="site-content">{children}</main>
  </React.Fragment>
);

export default LayoutDefault;
