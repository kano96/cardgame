import React, { useState } from "react";
import "./App.css";
import images from "./Images";
import { shuffle } from "lodash";

function App() {
  const [cards, setCards] = useState(shuffle([...images, ...images]));
  const [clicks, setClicks] = useState(0);
  const [activeCards, setActiveCards] = useState([]);
  const [won, setWon] = useState(false);
  const [matches, setMatches] = useState([]);

  function flipCard(index) {
    if (won) {
      setCards(shuffle([...images, ...images]));
      setMatches([]);
      setWon(false);
      setClicks(1);
    }
    if (activeCards.length === 0) setActiveCards([index]);
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondIndex = index;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatches([...matches, firstIndex, secondIndex]);
        if (matches.length === cards.length) {
          setWon(true);
        }
      }
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
    setClicks(clicks + 1);
  }

  return (
    <div className="App">
      <div className="board">
        {cards.map((card, index) => {
          const flipped =
            activeCards.indexOf(index) !== -1 || matches.indexOf(index) !== -1;
          return (
            <div
              className={"card-outer " + (flipped ? "flipped" : "")}
              key={index}
              onClick={() => flipCard(index)}
            >
              <div className="card">
                <div className="front">
                  <img src={card} alt=""></img>
                </div>
                <div className="back"></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="stats">
        {won && (
          <div>
            Congrats, you won the game!
            <br />
          </div>
        )}
        Clicks: {clicks} <br />
        Found pairs: {matches.length / 2}
      </div>
    </div>
  );
}

export default App;
