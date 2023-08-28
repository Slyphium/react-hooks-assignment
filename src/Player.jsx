import React from "react";
import { useState } from "react";
function Player({name}) {

  let [score, setscore] = useState(0);
  function increment() {
    setscore (score+1)
  };
  function decrement() {
    if (score > 0) {
    setscore (score-1)
    }
  }
  return (
    <div className="container-fluid border border-dark p-3 m-3">
      <div className="row justify-content-center" >
        {name}
        <h2 className="text-center"></h2>
      </div>
      <div className="row justify-content-center">
        <p className="text-center fs-3">{score}</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Add increment event handler */}
          <button className="btn btn-outline-primary w-100" onClick = {increment}>Add Point +</button>
        </div>
        <div className="col-md-6">
          {/* Add decrement event handler */}
          <button className="btn btn-outline-danger w-100" onClick = {decrement}>
            Remove Point -
          </button>
        </div>
      </div>
    </div>
  );
}
export default Player;
