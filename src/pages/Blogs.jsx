import React from 'react';
import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { pathPrefix, showWip } from '../config';

import mdPosts from 'val-loader!../data/md_posts.js'; // eslint-disable-line
console.log(mdPosts);
const Entry = () => (
  <Container>
    <Row>
      {Object.entries(mdPosts)
        .filter(([_, { wip, type }]) => (showWip || !wip) && type === 'blog') // eslint-disable-line no-unused-vars
        .map(([key, mdPost]) => (
          <div key={key}><Link to={`${pathPrefix}/${mdPost.type}s/${key}`}>{mdPost.title}</Link></div>
        ))}
    </Row>
  </Container>
);

export default Entry;
