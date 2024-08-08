import React from "react";
import { StyledLayout } from "./layout.styled";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
};

export default Layout;
