import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Search";
import Face from "./Face";
import Hands from "./Hands";
import Heart from "./Heart";
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const [emojis, setEmojis] = useState([
    {
      name: "Grinning Face",
      emoji: "&#128512;",
      type: "face",
    },
    {
      name: "Face with Tears joy",
      emoji: "&#128514;",
      type: "face",
    },
    {
      name: "Smilling face with open and smilling Eyes",
      emoji: "&#128517;",
      type: "face",
    },
    {
      name: "Rolling on the floor Luaghing",
      emoji: "&#129315;",
      type: "face",
    },
    {
      name: "Smilling Face with smilling Eyes",
      emoji: "&#128522;",
      type: "face",
    },
    {
      name: "Hugging face",
      emoji: "&#129303;",
      type: "face",
    },
    {
      name: "Thinking Face",
      emoji: "&#129300;",
      type: "face",
    },
    {
      name: "Smiling face with sunGlass",
      emoji: "&#128526;",
      type: "face",
    },
    {
      name: "Smiling face with heart-eyes",
      emoji: "&#128525;",
      type: "face",
    },
    {
      name: "Face with rolling eyes",
      emoji: "&#128580;",
      type: "face",
    },
    {
      name: "Loudly crying face",
      emoji: "&#128557;",
      type: "face",
    },
    {
      name: "Angry",
      emoji: "&#128520;",
      type: "face",
    },
    {
      name: "See no evil",
      emoji: "&#128584;",
      type: "face",
    },
    {
      name: "Grinning face with smiles",
      emoji: "&#128513;",
      type: "face",
    },
    //
    // Hands
    {
      name: "Fixed Biceps",
      emoji: "&#128170;",
      type: "hand",
    },
    {
      name: "Selfie",
      emoji: "&#129331;",
      type: "hand",
    },
    {
      name: "Right Hand",
      emoji: "&#128073;",
      type: "hand",
    },
    {
      name: "Left Hand",
      emoji: "&#128072;",
      type: "hand",
    },
    {
      name: "Up Hand",
      emoji: "&#9757;",
      type: "hand",
    },
    {
      name: "Fvck U",
      emoji: "&#128405;",
      type: "hand",
    },
    {
      name: "Hands Down",
      emoji: "&#128071;",
      type: "hand",
    },
    {
      name: "Call me",
      emoji: "&#129305;",
      type: "hand",
    },
    {
      name: "raised hand",
      emoji: "&#128400;",
      type: "hand",
    },
    {
      name: "Ok hand",
      emoji: "&#128076;",
      type: "hand",
    },
    {
      name: "Thumbs up",
      emoji: "&#128077;",
      type: "hand",
    },
    {
      name: "Thumbs dowm",
      emoji: "&#128078;",
      type: "hand",
    },
    {
      name: "Kudos",
      emoji: "&#128074;",
      type: "hand",
    },
    {
      name: "please",
      emoji: "&#128591;",
      type: "hand",
    },
    //
    // Heart
    {
      name: "Sparkling heart",
      emoji: "&#128150;",
      type: "heart",
    },
    {
      name: "Two hearts",
      emoji: "&#128149;",
      type: "heart",
    },
    {
      name: "Blue Heart",
      emoji: "&#128154;",
      type: "heart",
    },
    {
      name: "Green heart",
      emoji: "&#128154;",
      type: "heart",
    },
    {
      name: "Yellow Heart",
      emoji: "&#128155;",
      type: "heart",
    },
    {
      name: "Black Heart",
      emoji: "&#128420;",
      type: "heart",
    },
    {
      name: "Heart with Ribbon",
      emoji: "&#128157;",
      type: "heart",
    },
    {
      name: "Revolving Hearts",
      emoji: "&#128158;",
      type: "heart",
    },
    {
      name: "Broken Heart",
      emoji: "&#128148;",
      type: "heart",
    },
    {
      name: "Heart with Arrow",
      emoji: "&#128152;",
      type: "heart",
    },
    {
      name: "Kiss Mark",
      emoji: "&#128139;",
      type: "heart",
    },
    {
      name: "Tongue",
      emoji: "&#128069;",
      type: "heart",
    },
    {
      name: "Growing Heart",
      emoji: "&#128151;",
      type: "heart",
    },
    {
      name: "Love Letter",
      emoji: "&#128140;",
      type: "heart",
    },
  ]);
  return (
    <BrowserRouter>
      <div className="container">
        <Search />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Face emojis={emojis} />} />
          <Route exact path="/hands" element={<Hands emojis={emojis} />} />
          <Route exact path="/hearts" element={<Heart emojis={emojis} />} />
          <Route
            exact
            path="/search/:name"
            element={<SearchBox emojis={emojis} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
