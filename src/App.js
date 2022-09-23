import React from "react";
import InputBox from "./component/InputBox";

function App() {
  return (
    <div class="container">
      <InputBox />
      <div class="box">
        <h2>📝 할 일 목록 📝</h2>
        <ul class="list" id="todo-list"></ul>
      </div>
      <div class="box">
        <h2>💙 완료 목록 💙</h2>
        <ul class="list" id="done-list"></ul>
      </div>
    </div>
  );
}

export default App;
