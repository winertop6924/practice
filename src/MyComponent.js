import React, { Component } from "react";
import "./App.css";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    //state의 초깃값 설정
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state; //state를 조회할때 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          //onclick을 통해 버튼이클릭됬을때 호출할 함수 저장
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default MyComponent;
