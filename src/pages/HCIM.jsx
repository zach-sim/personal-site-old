import React, { PureComponent } from "react";
import data from "../data/rs_hcim.json";
import { Container, Jumbotron, Row } from "reactstrap";
import crossfilter from "crossfilter2";
import PropTypes from "prop-types";
import Chart from "../components/Chart";
import dc from "dc";
import Loading from "react-loading-animation";

export default class HCIM extends PureComponent {
  constructor() {
    super();

    this.state = { loading: true };
    this.ndx = {};
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    console.time("ndx");
    this.ndx = crossfilter(data);
    console.timeEnd("ndx");
    this.setState({ loading: false });
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  getChildContext() {
    return { ndx: this.ndx };
  }

  resize() {
    // TODO: maybe throttle this
    dc.disableTransitions = true;
    dc.renderAll();
    dc.disableTransitions = false;
  }

  render() {
    if (this.state.loading) {
      return <Loading width="300px" height="300px" />;
    } else {
      return (
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
    }
  }
}
HCIM.childContextTypes = {
  ndx: PropTypes.object.isRequired
};
