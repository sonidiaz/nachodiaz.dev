import React from 'react';
import Home from '../src/Pages/Home';
import { jsx, Global } from "@emotion/core";
import {Helmet} from "react-helmet";

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
          <title>Nacho Díaz | Developer</title>
      </Helmet>
      <Home/>
    </>
  );
}

export default App;
