import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  function playAudio() {
    let utterance = new SpeechSynthesisUtterance(props.result.word);
    window.speechSynthesis.speak(utterance);
  }
  console.log(props.data);
  if (props.result) {
    return (
      <div className="Results">
        <h2>{props.result.word}</h2>
        <button onClick={playAudio}>🔊 Listen</button>
        {props.result.phonetic && (
          <div className="Phonetic">{props.result.phonetic}</div>
        )}
        {props.result.meanings &&
          props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
      </div>
    );
  } else {
    return null;
  }
}
