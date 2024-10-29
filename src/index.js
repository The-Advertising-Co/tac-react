// React Required
import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";

import { routes } from "./routes";

// Create Import File
import "./index.scss";

import PageScrollTop from "./component/PageScrollTop";

import error404 from "./elements/error404";

// Blocks Layout
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <PageScrollTop>
          <Switch>
            {routes.map((route) => (
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/${route.path}`}
                key={route.path}
                component={route.component}
              />
            ))}

            <Route component={error404} />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
serviceWorker.register();
