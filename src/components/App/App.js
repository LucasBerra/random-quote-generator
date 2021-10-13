import "./App.css";
import { useState, useEffect } from "react";
import { bgColors } from "../../data/colors";

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
  const [quotes, setQuotes] = useState([]);

  // initializes quotes' index variable
  const [index, setIndex] = useState(randomIndex());
  const newQuote = () => {
    setIndex(randomIndex());
  };

  // fetch quotes API
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setIsLoading(false);
      })
      .catch((error) => console.log("An error occured: ", error));
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  // change bg color on re-render
  useEffect(() => {
    if (!isLoading) {
      changeBgColor();
    }
  }, [index]);

  return (
    <>
      <div id="quote-container">
        <div id="quote-text">
          <span>"</span>
          <p>
            <em>{isLoading || quotes[index]["text"]}</em>
          </p>
          <span>"</span>
        </div>
        <h3>- {isLoading || quotes[index]["author"] || "Unknown author."}</h3>
      </div>
      <button onClick={newQuote}>generate quote</button>
    </>
  );
};

const changeBgColor = () => {
  const colorIndex = Math.floor(Math.random() * bgColors.length);
  const newBgColor = bgColors[colorIndex];

  document.querySelector("body").style.transition = "background-color 450ms";
  document.querySelector("body").style.backgroundColor = newBgColor;
};

export default App;
