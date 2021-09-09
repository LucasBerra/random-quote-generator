import "./App.css";
import { useState } from "react";
import { quotes } from "./quotes";
import { bgColors } from "./colors";

const App = () => {
  return (
    <main>
      <h1>- Quote Generator -</h1>
      <div id="card-target">
        <Cards />
      </div>
    </main>
  );
};

const Cards = () => {
  // function to pick a random index from the quotes array
  const randomIndex = () => {
    return Math.floor(Math.random() * quotes.length);
  };

  // sets index variable to use in Cards component
  const [index, setIndex] = useState(randomIndex());
  const newQuote = () => {
    setIndex(randomIndex());
  };

  return (
    <>
      <div id="quote-container">
        <div id="quote-text">
          <span>"</span>
          <p>
            <em>{quotes[index]["text"]}</em>
          </p>
          <span>"</span>
        </div>
        <h3>- {quotes[index]["author"] || "Unknown author."}</h3>
      </div>
      <button
        onClick={() => {
          newQuote();
          changeBgColor();
        }}
      >
        generate quote
      </button>
    </>
  );
};

const changeBgColor = () => {
  const colorIndex = Math.floor(Math.random() * bgColors.length);
  const currentBgColor = bgColors[colorIndex];

  document.querySelector("body").style.transition = "background-color 450ms";
  document.querySelector("body").style.backgroundColor = currentBgColor;
};

export default App;
