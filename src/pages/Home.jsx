import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import Requist from "../Requist";

const Home = () => {
  return (
    <>
      <Main />
      <Row ID="1" title="upcoming" fetchURL={Requist.upcoming} />
      <Row ID="2" title="popular" fetchURL={Requist.Popular} />
      <Row ID="3" title="top rated" fetchURL={Requist.topRated} />
    </>
  );
};

export default Home;
