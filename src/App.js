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
      <button onClick={newQuote}>generate quote</button>
    </>
  );
};

export default App;
