import React, { Component } from "react";
import Loading from "react-loading-animation";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      console.log("component", component);
      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? (
        <C {...this.props} />
      ) : (
        <Loading width="300px" height="300px" />
      );
    }
  }

  return AsyncComponent;
}
