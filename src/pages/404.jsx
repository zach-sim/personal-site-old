import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

const PageNotFound = () => (
  <Container>
    <Jumbotron>
      <h2>Error 404: Page Not Found</h2>
      <p className="lead">
        The page you are looking for might have been removed, had its name changed or is temporarily
        unavailable.
      </p>
    </Jumbotron>
  </Container>
);

export default PageNotFound;
