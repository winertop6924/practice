import React from 'react'
import './App.css'
const MyComponent =props =>{
return <div className="react">안녕 세제귀 나는 {props.name}이다 이기야
<br/>
children 값은 {props.children} 이다
</div>
};
MyComponent.defaultProps ={
    name: '세제귀동'
};

export default MyComponent;