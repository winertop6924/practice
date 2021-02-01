import React from "react";
import "./App.css";
import PropTypes from "prop-types";
const MyComponent = ({ name, 좋아하는숫자, children }) => {
  return (
    <div className="react">
      반갑구마잉 내이름은 {name}이지라 <br />
      children 값은 {children} 이다잉 -광주ver-
      <br />
      제가 좋아하는 숫자는 {좋아하는숫자}입니다.
    </div>
  );
};
MyComponent.defaultProps = {
  name: "세제귀동",
};
MyComponent.PropTypes = {
  name: PropTypes.string,
  좋아하는숫자: PropTypes.number.isRequired,
};

export default MyComponent;
