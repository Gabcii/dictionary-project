import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResult(response.data);
  }
  function search() {
    let apiKey = "3986b1bo304da0tf76e74d198cd0536a";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleSearch(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word are you looking for? </h1>
          <div className="Dictionary-wrapper">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleSearch}
                defaultValue={props.defaultKeyword}
              ></input>
            </form>
            <div className="hint">suggested words:</div>
          </div>
        </section>
        <Results result={result} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
