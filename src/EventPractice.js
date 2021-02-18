// import React, { useState } from "react";

// const Eventpractice = () => {
//   const [username, setUsername] = useState("");
//   const [messge, setMessge] = useState("");
//   const onChangeUsername = (e) => setUsername(e.target.value);
//   const onChangeMessage = (e) => setMessge(e.target.value);
//   const onClick = () => {
//     alert(username + ":" + messge);
//     setUsername("");
//     setMessge("");
//   };
//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick();
//     }
//   };
//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         type="next"
//         name="username"
//         placeholder="사용자명"
//         value={username}
//         onChange={onChangeUsername}
//       />
//       <input
//         type="text"
//         name="messge"
//         placeholder="아무거나 입력해 보세요"
//         value={messge}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//       <button onClick={onClick}>확인</button>
//     </div>
//   );
// };

// export default Eventpractice;
