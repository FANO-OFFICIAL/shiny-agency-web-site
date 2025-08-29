import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/";
import Survey from "./pages/Survey/";
import Header from "./components/Header";
import Error from "./components/Error";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </StrictMode>
);
