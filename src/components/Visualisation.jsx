/* eslint class-methods-use-this: off */
/* eslint react/no-did-mount-set-state: off */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import crossfilter from 'crossfilter2';
import dc from 'expose-loader?dc!dc'; // eslint-disable-line
import Loading from 'react-loading-animation';

import 'dc/dc.css';
import './chart.css';

const Vis = (data, Charts) =>
  class Visualisation extends PureComponent {
    static childContextTypes = {
      ndx: PropTypes.object.isRequired,
    };
    constructor() {
      super();

      this.state = { loading: true };
      this.ndx = {};
    }

    getChildContext() {
      return { ndx: this.ndx };
    }

    componentDidMount() {
      console.time('ndx');
      window._data = data;
      this.ndx = crossfilter(data);
      console.timeEnd('ndx');
      this.setState({ loading: false });
      window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
      dc.chartRegistry.clear();
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
      }
      return <Charts />;
    }
  };

export default Vis;
