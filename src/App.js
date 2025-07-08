import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  const [city, setCity] = useState("Manchester");
  const [unit, setUnit] = useState("celsius");

  return (
    <div className="App container">
      <header className="App-header">
        <Header city={city} setCity={setCity} unit={unit} setUnit={setUnit} />
      </header>
      <section>
        <Weather city={city} setCity={setCity} unit={unit} />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
