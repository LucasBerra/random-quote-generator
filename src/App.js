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

  (function generateQuote() {
    text = quotes[index]["text"];
    author = quotes[index]["author"];

    if (author === null) {
      author = "Unknown author";
    }
  })();

  const bgColors = [
    "rgb(161, 71, 71)",
    "rgb(161, 107, 71)",
    "rgb(161, 152, 71)",
    "rgb(137, 161, 71)",
    "rgb(111, 161, 71)",
    "rgb(71, 161, 119)",
    "rgb(71, 132, 161)",
    "rgb(71, 77, 161)",
    "rgb(125, 71, 161)",
    "rgb(161, 71, 149)",
    "rgb(161, 71, 108)",
    "rgb(95, 71, 161)",
    "rgb(161, 95, 156)",
    "rgb(65, 109, 61)",
  ];

  const changeBgColor = () => {
    let colorIndex = Math.floor(Math.random() * bgColors.length);
    let currentBgColor = bgColors[colorIndex];

    document.querySelector("body").style.transition = "background-color 400ms";
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
