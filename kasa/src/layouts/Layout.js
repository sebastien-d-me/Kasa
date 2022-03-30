import React from "react"
import Header from "../layouts/Header/Header";
import "./Layout.css";
import Footer from "../layouts/Footer/Footer";

function Layout({children}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;