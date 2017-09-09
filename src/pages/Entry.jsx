import React from "react";
import { Container, Jumbotron } from "reactstrap";

const Entry = props => {
  const navEl = document.getElementsByTagName("nav")[0];
  let navHeight = 0;
  if (navEl) {
    navHeight = navEl.offsetHeight + 15;
  }
  return (
    <Container
      style={{
        height: `calc(100vh - ${navHeight}px)`,
        display: "flex",
        alignItems: "center"
      }}
    >
      <Jumbotron style={{ padding: "1rem 2rem" }}>
        <h2>Welcome to my site</h2>
        <p className="lead" style={{ margin: "1rem" }}>
          Apologies for how bare this site is at the moment.
        </p>
        <p style={{ margin: "1rem" }}>
          I'm currently working on adding my old projects to here as well
          planning content for a personal blog and tutorials which will fill
          this space.
        </p>
      </Jumbotron>
    </Container>
  );
};

export default Entry;
