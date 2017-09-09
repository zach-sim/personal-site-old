import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { HCIM } from "./pages";
import Entry from "./pages/Entry";

import "bootswatch/superhero/bootstrap.css";
import "./index.css";

const App = props => (
  <BrowserRouter>
    <Layout>
      <Route path="/" exact component={Entry} />
      <Route path="/vis/hcim" component={HCIM} />
    </Layout>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
if (module.hot) {
  module.hot.accept(App, () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}
