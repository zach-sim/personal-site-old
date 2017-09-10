import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { HCIM, MarkdownPage, PageNotFound } from "./pages";
import Entry from "./pages/Entry";

import "bootswatch/superhero/bootstrap.css";
import "./index.css";

const App = props => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/personal-site" exact component={Entry} />
        <Route path="/personal-site/vis/hcim" component={HCIM} />
        <Route
          path="/personal-site/projects/:name"
          component={MarkdownPage("project")}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
if (module.hot) {
  module.hot.accept(App, () => {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
}
