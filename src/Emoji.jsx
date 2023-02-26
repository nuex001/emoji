import React, { useRef } from "react";
import HTMLReactParser from "html-react-parser";
function Emoji({ mainEmoji, text }) {
  const ref = useRef();
  const copy = (e) => {
    navigator.clipboard.writeText(); //clears copy input
    navigator.clipboard.writeText(e.target.getAttribute("data-value")); // copies new value
    ref.current.classList.add("active");
    //Removes copy class name
    setTimeout(() => {
      ref.current.classList.remove("active");
    }, 1000);
  };
  return (
    <div className="emoji" onClick={copy} data-value={mainEmoji}>
      <div className="copyAlert" ref={ref}>
        Copied
      </div>
      {HTMLReactParser(`<span data-value=${mainEmoji}>${mainEmoji}</span>`)}
      {text}
    </div>
  );
}

export default Emoji;
