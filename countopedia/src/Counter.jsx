import React from "react";
class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
   
  handlerAttack() {
    alert("Attack");
  }

  handlerDefence() {
    alert("Defend");
  }

  render() {
    return (
      <div className="row text-white">
        <h1>Counter: {this.state.count} </h1>
        <button onClick={this.handlerAttack} style={{ width: "200px" }}>
          +1
        </button>
        <button onClick={this.handlerDefence} style={{ width: "200px" }}>
          -1
        </button>
      </div>
    );
  }
}
export default Counter;
