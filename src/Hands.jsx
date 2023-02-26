import React from "react";
import Emoji from "./Emoji";
function Hands({ emojis }) {
  return (
    <div className="row">
      {emojis &&
        emojis.map((emoji, idx) => {
          if (emoji.type === "hand") {
            return (
              <Emoji key={idx} mainEmoji={emoji.emoji} text={emoji.name} />
            );
          }
        })}
    </div>
  );
}

export default Hands;
