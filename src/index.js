import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/";
import Survey from "./pages/Survey/";
import Header from "./components/Header";

// On ajoute nos composants

import ClientForm from "./components/ClientForm";
import FreelanceForm from "./components/FreelanceForm";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/*<App />*/}
    {/*<Home />*/}
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />}>
          {/* Nous imbriquons nos composants dans survey */}
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
