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
import { Link } from "react-router-dom";
import { path_prefix, show_wip } from "../config";

/* eslint-disable import/no-webpack-loader-syntax */
import md_posts from "val-loader!../data/md_posts.js";
/* eslint-enable import/no-webpack-loader-syntax */

const Entry = props => {
  return (
    <Container>
      <Row>
        {Object.entries(md_posts)
          .filter(
            ([_, { wip, type }]) => (show_wip || !wip) && type === "project"
          )
          .map(([key, md_post]) => (
            <Col key={key}>
              <Card inverse>
                <CardImg
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                  alt="Card image cap"
                />
                <CardImgOverlay>
                  <CardTitle>
                    <Link to={`${path_prefix}/${md_post.type}s/${key}`}>
                      {md_post.title}
                    </Link>
                  </CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Entry;
