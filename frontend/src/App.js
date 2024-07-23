import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/layout";
import "./styles/globals.css";

function App() {
  return (
    <Layout>
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </Layout>
  );
}

export default App;
