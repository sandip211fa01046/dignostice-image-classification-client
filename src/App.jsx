import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Diagnose from "./component/Diagnose";


const App = () => {
  return (
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Home />} />
          <Route path="/testing" element={<Diagnose />} />
        </Routes>
      </Router>

  );
};

export default App;
