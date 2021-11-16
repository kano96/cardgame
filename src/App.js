import React, { useState } from "react";
import "./App.css";
import images from "./Images";
import { shuffle } from "lodash";

function App() {
  const [cards, setCards] = useState(shuffle([...images, ...images]));

  return (
    <div className="App">
      <div className="board">
        {cards.map((card, index) => (
          <div className="card-outer">
            <div className="card">
              <div className="front">
                <img src={card} alt=""></img>
              </div>
              <div className="back"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
