import React from "react";
import { Container, Jumbotron } from "reactstrap";

const Entry = props => {
  const navEl = document.getElementsByTagName("nav")[0];
  let navHeight = 46 + 15; // Default height of navbar.
  if (navEl) {
    // The nav element doesn't exist when this is being rendered
    // TODO: fix this
    navHeight = navEl.offsetHeight + 15;
  }
  return (
    <Container
      style={{
        height: `calc(100vh - ${navHeight}px)`,
        display: "flex",
        alignItems: "baseline"
      }}
    >
      <Jumbotron>
        <h2>Welcome to my site</h2>
        <p className="lead">
          Apologies for how bare this site is at the moment.
        </p>
        <p>
          I'm currently working on adding my old projects to here as well
          planning content for a personal blog and tutorials which will fill
          this space.
        </p>
      </Jumbotron>
    </Container>
  );
};

export default Entry;
