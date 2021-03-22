import React from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";

const App = () => (
  <div className="App">
    <Header title="Iron Films" subtitle="React component state tutorial" />
    <Movies />
  </div>
);

export default App;
