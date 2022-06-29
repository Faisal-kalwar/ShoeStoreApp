import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Sections/Header";
import Section from "./components/Sections/Section";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Section />
      </Router>
    </div>
  );
}

export default App;
