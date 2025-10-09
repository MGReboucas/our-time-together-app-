import React from "react";
import "./Header.css";

export default function Header() {
  const names = "Bia & Matheus";
  const startDates = "17.10.1017";
  return (
    <>
      <header className="header-app">
        <div>
          <h1 className="header-title">{names}</h1>
          <p className="header-subtitle">Juntos desde {startDates}</p>
        </div>
        <div>
          <p className="header-message0">Onde tudo começou</p>
          <p className="header-message1">Nosso tempo nunca para de crescer!</p>
        </div>
      </header>
    </>
  );
}
