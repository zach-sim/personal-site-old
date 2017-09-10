import React, { PureComponent } from "react";
import { findDOMNode } from "react-dom";
import { Col, Button } from "reactstrap";
import PropTypes from "prop-types";

export default class Chart extends PureComponent {
  constructor(props) {
    super(props);

    this.reset = this.reset.bind(this);
  }
  static contextTypes = {
    ndx: PropTypes.object.isRequired
  };

  static defaultProps = {
    type: "row",
    nullValue: "",
    legend: true
  };

  static propTypes = {
    type: PropTypes.string,
    nullValue: PropTypes.string,
    legend: PropTypes.bool,
    field: PropTypes.string.isRequired,
    chartOptions: PropTypes.object,
    wrapperProps: PropTypes.object
  };

  componentDidMount() {
    var dim = this.context.ndx.dimension(d => {
      let output = d[this.props.field];

      if (output === null || output.length === 0) {
        return this.props.nullValue;
      } else return output;
    });
    var group = dim.group();

    var chart = window.dc
      [`${this.props.type}Chart`](findDOMNode(this.refs.el))
      .dimension(dim)
      .group(group);

    if (this.props.chartOptions) {
      chart.options(this.props.chartOptions);
    }

    chart.render();
    this.chart = chart;
  }

  reset() {
    this.chart.filterAll().redrawGroup();
  }

  render() {
    const { field, legend, wrapperProps } = this.props;
    return (
      <Col {...wrapperProps}>
        <div ref="el">
          {legend && (
            <legend>
              {field}{" "}
              <Button
                size="sm"
                onClick={this.reset}
                className="reset"
                style={{ display: "none" }}
              >
                reset
              </Button>
            </legend>
          )}
        </div>
      </Col>
    );
  }
}
