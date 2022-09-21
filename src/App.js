import { useState, useRef } from 'react';

function App() {
  // todo item, todo 배열, done 배열
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);

  // todo item의 id값 정해주기
  const todoId = useRef(0);

  // input으로 받은 값 todo에 넣어주기
  const insertTodo = (e) => {
    setTodo(e.target.value);
  };

  const createTodo = (e) => {
    e.preventDefault();
    // input값이 없으면 경고창
    if (todo === '') {
      alert('할 일을 입력해 주세요!');
      return;
    }

    // todo에 id값 부여
    const newTodo = {
      id: todoId.current,
      todo,
    };

    // id값 1 증가
    todoId.current += 1;

    // todos 배열에 새로운 todo 담기
    setTodos((curArr) => [newTodo, ...curArr]);

    // input값을 저장하는 todo 초기화
    setTodo('');
  };

  // todo 삭제 이후 todos 배열 다시 만들기
  const deleteTodo = (delId) => {
    const newTodos = todos.filter((item) => item.id !== delId);
    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        <div>👀투두리스트👀</div>
        <form onSubmit={createTodo} action="">
          <input
            onChange={insertTodo}
            value={todo}
            type="text"
            placeholder="할 일을 입력하세요"
          />
          <button>+</button>
        </form>
      </div>
      <div>
        <div>😩To Do</div>
        <ul>
          {''}
          {todos.map((item) => (
            <li key={item.id} onClick={() => deleteTodo(item.id)}>
              {item.todo}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div>🥴Done</div>
        <ul></ul>
      </div>
    </div>
  );
}

export default App;
