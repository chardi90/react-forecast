import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form>
        <input
          type="search"
          name="search-input"
          placeholder="Enter a city..."
          className="search-input"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );
}
