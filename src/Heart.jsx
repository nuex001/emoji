import React from "react";
import Emoji from "./Emoji";
function Heart({ emojis }) {
  return (
    <div className="row">
      {emojis &&
        emojis.map((emoji, idx) => {
          if (emoji.type === "heart") {
            return (
              <Emoji key={idx} mainEmoji={emoji.emoji} text={emoji.name} />
            );
          }
        })}
    </div>
  );
}

export default Heart;
