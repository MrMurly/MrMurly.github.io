import { ChangeEvent, useState } from "react";
import "./App.css";
import ReactLogo from "./assets/react.svg";
import { Card, CardProps } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="font-mono text-white">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
