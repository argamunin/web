import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./components/layout/layout.jsx";
import "./styles/globals.css";

function App() {
  return (
    <Layout>
      <div className="App">
        <Router basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </Layout>
  );
}

export default App;
