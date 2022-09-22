import './App.css';
import { useState, useRef } from 'react';
import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  // todos -> dones로 item 이동
  const toggleTodo = (item) => {
    setDones((curArr) => [item, ...curArr]);
    deleteTodo(item.id);
  };

  return (
    <div className="container">
      <div className="input-box">
        <div className="input-box__title">👀투두리스트👀</div>
        <form className="input-box__content" onSubmit={createTodo} action="">
          <input
            className="input-box__input"
            onChange={insertTodo}
            value={todo}
            type="text"
            placeholder="할 일을 입력하세요"
          />
          <button>
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
        </form>
      </div>
      <div className="list-box">
        <div className="list-box__title">😩To Do ({todos.length})</div>
        <ul className="list-box__list">
          {''}
          {todos.map((item) => (
            <li key={item.id}>
              <div className="list-box__text" onClick={() => toggleTodo(item)}>
                {item.todo}
              </div>
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={() => deleteTodo(item.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="done-box">
        <div className="done-box__title">🥴Done ({dones.length})</div>
        <ul className="done-box__list">
          {''}
          {dones.map((item) => (
            <li key={item.id}>
              <div
                className="done-box__text"
                // onClick={() => toggleTodo(item)}
              >
                {item.todo}
              </div>
              <FontAwesomeIcon
                icon={faTrashCan}
                // onClick={() => deleteTodo(item.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
