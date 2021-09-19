import React from "react";
import Cards from "./news-components/Cards";
import Buttongroup from "./news-components/Buttongroup";
import Container from "react-bootstrap/Container";

function News() {
  return (
    <>
      <Container className="mx-auto">
        <h1>News</h1>
        <Buttongroup />
        <Cards />
        <Buttongroup />
      </Container>
    </>
  );
}

export default News;
