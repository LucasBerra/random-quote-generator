import "./App.css";
import { useState, useEffect } from "react";
import { bgColors } from "./colors";

// quotes API
const url = "https://type.fit/api/quotes";

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

  // initializes quotes variable
  const [quotes, setQuotes] = useState([
    {
      text: " ",
      author: " ",
    },
  ]);

  // initializes quotes' index variable
  const [index, setIndex] = useState(randomIndex());
  const newQuote = () => {
    setIndex(randomIndex());
  };

  // fetch quotes API
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.log("An error occured: ", error));
  }, []);

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
