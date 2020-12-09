import React, { useState } from "react";
import "./style.css";
import { emojiDictionary } from "./symbols-database.js";
import image from "./image.png";

export default function App() {
  const emojis = Object.keys(emojiDictionary);

  const [meaning, setmeaning] = useState("e.g - 💡 light bulb");
  const [showemoji, setshowemoji] = useState("");

  function emojiinputhandler(event) {
    var useremoji = event.target.value;
    let meaning = emojiDictionary[useremoji];

    if (useremoji in emojiDictionary) {
      setmeaning(meaning);
      setshowemoji(useremoji);
    } else {
      setmeaning("Sorry, this symbol is not in our database. And may be it is not a emoji");
    }
  }

  function emojiclickhandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
    setshowemoji(emoji);
  }

  return (
    <div
      className="App"
      style={{
        background: "linear-gradient(to right, #4ac29a, #bdfff3)",
        borderRadius: "1rem",
        padding: "1rem"
      }}
    >
      <h1
        style={{
          backgroundColor: "#b2fefa",
          border: "2px solid ",
          borderRadius: "5px",
          width: "100%",
          margin: "0 auto",
          padding: "1rem"
        }}
      >
        💛 — ✅ Home of Symbol Meanings
      </h1>
      <div>
        <img
          style={{
            maxWidth: "700px",
            width: "90%",
            margin: "2rem",
            borderRadius: "0.8rem"
          }}
          src={image}
          alt="emoji-image"
        />
      </div>

      <input
        style={{
          padding: "1rem",
          margin: "2rem auto 1rem auto ",
          width: "100%",
          maxWidth: "45rem",
          borderRadius: "0.5rem",
          border: "2px solid #000",
          backgroundColor: "#B0F8E9",
          display: "flex"
        }}
        placeholder="Search your symbol"
        onChange={emojiinputhandler}
      />
      <h2>Meaning will go here 👇</h2>
      <h2
        style={{
          backgroundColor: "#b2fefa",
          borderRadius: "10px",
          maxWidth: "30rem",
          width: "70%",
          margin: "1rem  auto 1rem auto",
          color: "#000",
          padding: "0.5rem",
          lineHeight: "1.5"
        }}
      >
        {showemoji} {meaning}
      </h2>

      <p style={{ color: "#000" }}>
        Select any symbol from the below list - Heart emojis, clocks, arrows,
        signs and shapes.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "row wrap",
          width: "80%",
          margin: "1rem auto"
        }}
      >
        {emojis.map((emoji) => {
          return (
            <span
              className="emoji"
              key={emoji}
              onClick={() => emojiclickhandler(emoji)}
              style={{
                padding: "10px",
                fontSize: "2rem",
                cursor: "pointer",
                border: "1px solid",
                borderRadius: "5px",
                boxShadow: "0 2px 4px #000",
                margin: "1rem"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>

      <div
        style={{
          border: "2px solid #000",
          borderRadius: "0.5rem",
          maxWidth: "500px",
          width: "80%",
          margin: "2rem auto 1rem auto",
          padding: "1rem"
        }}
      >
        <h3>Contact  me:</h3>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexFlow: "row wrap"
          }}
        >
          <li>
            <a href="https://github.com/Mandeepsinghmar" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/themandeepsinghmar/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/mandeep_singh_9" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
        <p> Made with 💛 by mandeep singhmar</p>
      </div>
    </div>
  );
}
