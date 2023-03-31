import React from "react";
import attack from "./images/attack.png";
import defense from "./images/defense.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handlerAttack = this.handlerAttack.bind(this);
    this.handlerDefence = this.handlerDefence.bind(this);
    this.state = {
      count: 0,
    };
  }
  handlerAttack() {
    this.setState((previuosState) => ({
      count: previuosState.count + 1,
    }))
  }
  handlerDefence() {
    this.setState((previousState) => ({
      count: previousState.count - 1,
    }))
  }
  render() {
    return (
      <div className="row text-white">
        <h1>Game Score: {this.state.count}</h1>
        <p>You win at +10 points and lose at -10 point!</p>
        <p>Last Play: </p>
        <p>Game Status: </p>
        <div className="col-6 col-md-3 offset-md-3">
          <img style={{
            width: "90%",
            cursor: "pointer",
            border: "1px solid green"
          }} 
          className="p-4 rounded"
          src={attack} alt="attack lolgo" onClick={this.handlerAttack}></img>
        </div>
        <div className="col-6 col-md-3 offset-md-3">
          <img style={{
            width: "90%",
            cursor: "pointer",
            border: "1px solid green"
            }}
            className="p-4 rounded"
            src={defense} alt="defense lolgo" onClick={this.handlerDefence}></img>
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button className="btn btn-secondary w-100 mt-2">Random Play</button>
          <br/>
          <button className="btn btn-warning w-100 mt-2">Reset</button>
        </div>
      </div>
    );
  }
}
export default Counter;
