import React from "react";
import Card from "./Card";
import emojipedia from "./emojipedia";

var number = Math.floor(Math.random() * 10);

export default function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia
          .filter((carding) => number % carding.id === 0)
          .map((carding) => (
            <Card
              key={carding.id}
              emoji={carding.emoji}
              name={carding.name}
              meaning={carding.meaning}
            />
          ))}
      </dl>
    </div>
  );
}
