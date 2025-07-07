import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  const [city, setCity] = useState("Manchester");

  return (
    <div className="App container">
      <header className="App-header">
        <Header city={city} setCity={setCity} />
      </header>
      <section>
        <Weather city={city} setCity={setCity} />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
