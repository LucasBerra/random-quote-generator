import "./App.css";
import { quotes } from "./quotes";
import { useState } from "react";

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
  let [index, setIndex] = useState(randomIndex());
  const newQuote = () => {
    setIndex((index = randomIndex()));
  };

  let text;
  let author;

  const generateQuote = () => {
    text = quotes[index]["text"];
    author = quotes[index]["author"];

    if (author === null) {
      author = "Unknown author";
    }
  };

  generateQuote();

  const bgColors = [
    "rgb(172, 80, 80)",
    "rgb(197, 113, 64)",
    "rgb(177, 159, 59)",
    "rgb(120, 168, 74)",
    "rgb(74, 168, 82)",
    "rgb(53, 163, 121)",
    "rgb(59, 160, 155)",
    "rgb(59, 94, 160)",
    "rgb(73, 74, 165)",
    "rgb(111, 82, 167)",
    "rgb(143, 59, 160)",
    "rgb(160, 59, 106)",
  ];
  const changeBgColor = () => {
    let colorIndex = Math.floor(Math.random() * bgColors.length);
    let currentBgColor = bgColors[colorIndex];

    document.querySelector("body").style.backgroundColor = currentBgColor;
  };

  return (
    <>
      <div id="quote-container">
        <div id="quote-text">
          <span>"</span>
          <p>
            <em>{text}</em>
          </p>
          <span>"</span>
        </div>
        <h3>- {author}</h3>
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

export default App;
