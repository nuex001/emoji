import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    if (e.target.name.value !== "") {
      navigate(`search/${e.target.name.value}`);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <h1> &#128169; Emoji Search &#128169;</h1>
      <input type="text" name="name" placeholder="Search Emoji" />
    </form>
  );
}

export default Search;
