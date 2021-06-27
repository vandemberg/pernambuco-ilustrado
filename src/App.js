import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./style/global";
import Routes from "./Routes";

function App() {
  return (
    <>
      <GlobalStyle />

      <Routes />
    </>
  );
}

export default App;
