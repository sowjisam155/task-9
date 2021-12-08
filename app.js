import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  food: [
    {
      name: "reddy restaurant(chicken biryani)",
      rating: "5/5",
      feadback: "taste is to good"
    },
    { name: "zomato", 
    rating: "4.5/5", 
    feadback: "it's nice and food is very delicious" }
  ],

  travel: [
    {
      name: "hyd is the good place",
      rating: "5/5",
      feadback: "enjoyed a lot in that place"
    },
    {
      name: "banglore is one of the famous of temples",
      rating: "4.5/5",
      feadback: "this place we are enjyoed and learn something in place"
    }
  ],
  music: [
    {
      name: "S.P.ballu",
      rating: "4.5/5",
      feadback: "good singer in the world"
    },
    {
      name: "chithra",
      rating: "5/5",
      feadback: "good singer in femalevoiceses"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> my own genres </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid #D1D5DB",
                width: "50%",
                margin: "2rem 0rem",
                borderRadius: "2.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "larger" }}> {book.rating} </div>
              <div style={{ fontSize: "smaller" }}> {book.feadback} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
