import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Correction : 'createGlobalStyle' doit être importé entre accolades
import styled, { createGlobalStyle } from "styled-components";

import Home from "./pages/Home/";
import Survey from "./pages/Survey/";
import Header from "./components/Header";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";

// 1. Créer la racine de l'application.
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

// Création du style global
const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
      margin: 20;
    }
`;

// 2. Render l'application avec Router et les Routes.
root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      {/* Utilisation du composant GlobalStyle pour appliquer le style */}
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
