import React, { useState } from "react";
import Emoji from "./Emoji";
function Face({ emojis }) {
  return (
    <div className="row">
      {emojis &&
        emojis.map((emoji, idx) => {
          if (emoji.type === "face") {
            return (
              <Emoji key={idx} mainEmoji={emoji.emoji} text={emoji.name} />
            );
          }
        })}
    </div>
  );
}

export default Face;
