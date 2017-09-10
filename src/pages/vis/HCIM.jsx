import React from "react";
import { Container, Jumbotron, Row } from "reactstrap";
import Chart from "../../components/Chart";

const HCIM = props => (
  <Container fluid>
    <Jumbotron style={{ marginBottom: "1rem" }}>
      <h2>WIP: Explore Hardcore Ironman Deaths (from Runescape)</h2>
      <p className="lead">
        The data this is based on is pulled from the spreadsheet{" "}
        <a
          href="https://www.reddit.com/user/CaptainP"
          target="_blank"
          rel="noopener noreferrer"
        >
          CaptainP
        </a>{" "}
        provided on reddit after his own analyis of his scraped data.
      </p>
      <p>
        This includes over 10.5 thousand HCIM deaths from 18/11/2014 to
        2/09/2017.<br />
        If you're interested, you can view the reddit post and comments {}
        <a
          href="https://www.reddit.com/r/runescape/comments/6y0oit/i_used_an_html_parser_to_pull_all_105k_hcim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>.
      </p>
    </Jumbotron>
    <Row>
      <Chart
        field="Location"
        nullValue="Unknown"
        chartOptions={{ cap: 10, height: 400 }}
      />
      <Chart
        field="Death"
        nullValue="Unknown"
        chartOptions={{ cap: 10, height: 400 }}
      />
    </Row>
  </Container>
);

export default HCIM;
