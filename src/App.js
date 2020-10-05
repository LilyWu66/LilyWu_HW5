import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/header";
import TopContainer from "./component/Top_container/topContainer";
import AlbumContainer from "./component/Album_container/albumContainer";
import Card from "./component/Card/card";
import Footer from "./component/Footer/footer";
function App() {
  return (
    <>
      <Header />
      <TopContainer />
      <AlbumContainer />
      <Footer />
    </>
  );
}

export default App;
