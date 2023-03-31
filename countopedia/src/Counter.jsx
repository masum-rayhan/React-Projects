import React from "react";
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
