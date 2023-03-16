import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from '../Main/Main'
import Calculate from "../Calculate/Calculate";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Calculate />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
