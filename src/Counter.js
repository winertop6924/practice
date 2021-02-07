import { render } from "@testing-library/react";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; //state를 조회할때 this.state로 사용
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값:{fixedNumber}</h2>
        <button
          //onclick을 통해 버튼이클릭됬을때 호출할 함수 저장
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
