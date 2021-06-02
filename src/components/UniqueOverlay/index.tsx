import React from "react";

import { Container, Header, Logo, Burger } from "./styles";

const UniqueOverlay = () => {
  return (
    <Container>
      <Header>
        <Logo src="images/tesla-logo.png" alt="tesla logo"/>
        <Burger />
      </Header>
    </Container>
  );
};

export default UniqueOverlay;
