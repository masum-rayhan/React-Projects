import React from 'react';
class Counter extends React.Component {

handlerAttack(){
  alert("Attack")
}

handlerDefence(){
  alert("Defend")
}

  render() {
    return (
      <div className='row text-white'>
        <h1>Counter: </h1>
        <button onClick={this.handlerAttack} style={{width:"200px"}}>+1</button>
        <button onClick={this.handlerDefence} style={{width:"200px"}}>-1</button>
      </div>
    );
  }
}
export default Counter;