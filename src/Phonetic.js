import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  function playAudio() {
    let utterance = new SpeechSynthesisUtterance(props.result.word);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="Phonetic">
      <button onClick={playAudio} className="audio-button">
        🔊 Listen
      </button>
      <span className="text">/{props.phonetic}/</span>
    </div>
  );
}
