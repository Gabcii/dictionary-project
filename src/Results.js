import React from "react";
import Meaning from "./Meaning";
import "./Result.css";

export default function Results(props) {
  function playAudio() {
    let utterance = new SpeechSynthesisUtterance(props.result.word);
    window.speechSynthesis.speak(utterance);
  }

  if (props.result) {
    return (
      <div className="Results">
        <section>
          <div className="Result-wrapper">
            <h2>{props.result.word}</h2>
            <button onClick={playAudio} className="audio-button">
              🔊 Listen
            </button>
            {props.result.phonetic && (
              <div className="Phonetic">{props.result.phonetic}</div>
            )}
          </div>
        </section>
        {props.result.meanings &&
          props.result.meanings.map(function (meaning, index) {
            return (
              <section>
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              </section>
            );
          })}
      </div>
    );
  } else {
    return null;
  }
}
