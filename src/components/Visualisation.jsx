/* eslint import/no-webpack-loader-syntax: off */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import crossfilter from "crossfilter2";
import dc from "expose-loader?dc!dc";
import Loading from "react-loading-animation";

import "dc/dc.css";
import "./chart.css";

const Vis = (data, Charts) => {
  return class Visualisation extends PureComponent {
    constructor() {
      super();

      this.state = { loading: true };
      this.ndx = {};
      this.resize = this.resize.bind(this);
    }

    static childContextTypes = {
      ndx: PropTypes.object.isRequired
    };

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
        return <Charts />;
      }
    }
  };
};

export default Vis;
