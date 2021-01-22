import React from 'react'
import './App.css'
const MyComponent = ({name,children}) =>  {

return(
    <div className ='react'>
        반갑노 이기 내이름은 {name}이다 이기야 <br/>
        children 값은 {children} 이다 이기
    </div>
);
};
MyComponent.defaultProps ={
    name: '세제귀동'
};

export default MyComponent;