import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home/Home";
import { colors, fontSizes } from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: Open-sans, sans-serif;
    font-size: ${fontSizes.md};
    color: ${colors.darkBlue};
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/user" element={<div>user page</div>} />
          <Route path="/wishlist" element={<div>wishlist</div>} />
        </Routes>
      </BrowserRouter>
      <div className="App"></div>
    </>
  );
};
export default App;