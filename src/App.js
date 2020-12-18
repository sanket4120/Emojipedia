import React, { useState } from "react";
import { directory } from "./directory";
import "./styles.css";

export default function App() {
  const emojis = Object.keys(directory);

  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Meaning will be shown here...");

  const handleInputEmoji = (e) => {
    const input = e.target.value;
    if (input) {
      if (input in directory) {
        showMeaning(input);
      } else {
        setEmoji("");
        setMeaning("not recognised try to search different emoji 🧐");
      }
    } else {
      setEmoji("");
      setMeaning("Meaning will be shown here...");
    }
  };

  const showMeaning = (emoji) => {
    setEmoji(emoji);
    setMeaning(directory[emoji]);
  };

  return (
    <div className="App">
      <h1>Emojipedia📙📙</h1>
      <p>Click on emoji to know it's meaning OR </p>
      <input
        placeholder="Search for an emoji here..."
        onChange={handleInputEmoji}
      />
      <div className="message">
        <h2>{emoji}</h2>
        <h2>{meaning}</h2>
      </div>
      <div className="directory">
        {emojis.map((emoji, index) => (
          <span
            className="emoji"
            key={index}
            onClick={() => showMeaning(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
