import React, { Component } from "react";
class ScrollBox extends Component {
  scrollToBottom = () => {
    //const { clienHeight, scrollHeight } = this.box;
    const scrollHeight = this.box.scrollHeight;
    const clienHeight = this.box.clientHeight;
    this.box.scrollTop = scrollHeight - clienHeight;
    console.log(scrollHeight, clienHeight, this.box.scrollTop);
  };
  //비구조화 사용시 값을 못읽으므로 구조화를 사용할 것-강승호도 모름

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white,black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
export default ScrollBox;
