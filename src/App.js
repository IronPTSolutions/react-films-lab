import React, { Component, Fragment } from "react";

import FilmList from "./components/films/FilmList";
import Header from "./components/misc/Header";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FilmList />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
