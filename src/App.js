import React from 'react';
import Home from '../src/Pages/Home';
import Book from '../src/Pages/Book';
import Header from '../src/component/Header';
import { Global } from "@emotion/core";
import {Helmet} from "react-helmet";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Global 
        styles={{
          "body": {
            margin: 0
          }
        }}
      />
      <Helmet>
          <meta charSet="utf-8" />
          <title>Nacho Díaz colaborador en equipos de desarrollo tecnológico</title>
      </Helmet>

      <Router>
        <Switch>
           <Route exact path="/">
              <Header/>
              <Home />
          </Route>
           <Route exact path="/book">
              <Header/>
              <Book />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
