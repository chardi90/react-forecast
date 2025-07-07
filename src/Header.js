import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="box">
      <form>
        <input
          type="search"
          name="search-input"
          placeholder="Type a city..."
          className="search-input"
          autoComplete="off"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </header>
  );
}
