import React from 'react';
import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { pathPrefix, showWip } from '../config';

import mdPosts from 'val-loader!../data/md_posts.js'; // eslint-disable-line

const Entry = () => (
  <Container>
    <Row>
      {Object.entries(mdPosts)
        .filter(([_, { wip, type }]) => (showWip || !wip) && type === 'project') // eslint-disable-line no-unused-vars
        .map(([key, mdPost]) => (
          <Col key={key}>
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>
                  <Link to={`${pathPrefix}/${mdPost.type}s/${key}`}>{mdPost.title}</Link>
                </CardTitle>
              </CardImgOverlay>
            </Card>
          </Col>
        ))}
    </Row>
  </Container>
);

export default Entry;
