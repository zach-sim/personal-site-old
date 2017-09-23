/* eslint react/forbid-prop-types: 0 */
/* eslint react/no-find-dom-node: 0 */
/* eslint react/no-string-refs: 0 */

import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import { Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';

export default class Chart extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    nullValue: PropTypes.string,
    legend: PropTypes.bool,
    field: PropTypes.string.isRequired,
    chartOptions: PropTypes.object,
    wrapperProps: PropTypes.object,
  };
  static defaultProps = {
    type: 'row',
    nullValue: '',
    legend: true,
    chartOptions: {},
    wrapperProps: {},
  };
  static contextTypes = {
    ndx: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    const dim = this.context.ndx.dimension((d) => {
      const output = d[this.props.field];

      if (output === null || output.length === 0) {
        return this.props.nullValue;
      }
      return output;
    });
    const group = dim.group();

    const chartFunc = window.dc[`${this.props.type}Chart`];

    const chart = chartFunc(findDOMNode(this.refs.el))
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
              {field}{' '}
              <Button size="sm" onClick={this.reset} className="reset" style={{ display: 'none' }}>
                reset
              </Button>
            </legend>
          )}
        </div>
      </Col>
    );
  }
}
