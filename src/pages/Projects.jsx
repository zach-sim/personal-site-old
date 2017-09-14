import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle
} from "reactstrap";
import md_posts from "../data/md_posts";

const Entry = props => {
  const navEl = document.getElementsByTagName("nav")[0];
  let navHeight = 46 + 15; // Default height of navbar.
  if (navEl) {
    // The nav element doesn't exist when this is being rendered
    // TODO: fix this
    navHeight = navEl.offsetHeight + 15;
  }
  return (
    <Container>
      <Row>
        {Object.values(md_posts).map(md_post => (
          <Col>
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>{md_post.title}</CardTitle>
              </CardImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Entry;
