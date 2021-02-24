/*https://github.com/winertop6924/practice.gitS */
import React, { Component } from "react";
import Counter from "./Counter";
import MyComponent from "./MyComponent";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}
export default App;
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />

//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨밑으로
//         </button>

//         <button onClick={() => this.scrollBox.console.log("hello")}>log</button>
//       </div>
//     );
//   }
// }

// const App = () => {
//   return <Say />;
// };
// const App = () => {
//   return <Counter> </Counter>;
// };
/*src\MyComponent.js
  Line 15:13:  Typo in static class property declaration  react/no-typos

Search for the keywords to learn more about each error.
오류 해결-> name을 바꿀것 바로해결됨 */
