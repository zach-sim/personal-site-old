import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const MD = md => () => (
  <Container>
    <Row>
      <Col dangerouslySetInnerHTML={{ __html: md.body }} />
    </Row>
  </Container>
);

export default MD;
