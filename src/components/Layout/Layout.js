import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Calculate from "../Calculate/Calculate";
import Select from "../Select/Select";

export default function Layout({ modal, setModal, children }) {
  return (
    <>
      <Header modal={modal} setModal={setModal} />
      {/* <Calculate /> */}
      <Select />
      <Main>{children}</Main>
      <Footer modal={modal} setModal={setModal} />
    </>
  );
}
