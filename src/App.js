/*https://github.com/winertop6924/practice.gitS */
import React from "react";
import MyComponent from "./MyComponent";
const App = () => {
  return (
    <MyComponent name="아오" 좋아하는숫자={2}>
      세제귀모링
    </MyComponent>
  );
};
/*src\MyComponent.js
  Line 15:13:  Typo in static class property declaration  react/no-typos

Search for the keywords to learn more about each error.
오류 해결-> name을 바꿀것 바로해결됨 */
export default App;
