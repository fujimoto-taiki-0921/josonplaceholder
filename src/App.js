import axios from "axios";
import React from "react";

export default function App() {
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
    });
  };

  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/3").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
}
