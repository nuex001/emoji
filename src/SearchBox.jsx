import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Emoji from "./Emoji";
function SearchBox({ emojis }) {
  const navigate = useNavigate();
  let { name } = useParams();
  if (!name) {
    navigate(-1);
  }
  const [filteredRes, setFilteredRes] = useState();
  useEffect(() => {
    const results = emojis.filter((emoji) =>
      emoji.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredRes(results);
  }, [navigate]);
  return (
    <div className="row">
      {filteredRes &&
        filteredRes.map((emoji) => (
          <Emoji mainEmoji={emoji.emoji} text={emoji.name} />
        ))}
    </div>
  );
}

export default SearchBox;
