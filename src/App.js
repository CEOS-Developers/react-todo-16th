import { useState, useRef } from 'react';
import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GlobalStyle from './styles/GlobalStyle';
import {
  Container,
  Title,
  Wrapper,
  Input,
  Btn,
  Text,
  DoneItem,
} from './styles/ContainerStyle';

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
      type: 'TODO',
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
  const deleteTodo = (delItem) => {
    const newTodos = todos.filter((item) => item.id !== delItem.id);
    setTodos(newTodos);
  };

  // done 삭제 이후 dones 배열 다시 만들기
  const deleteDone = (delItem) => {
    const newDones = dones.filter((item) => item.id !== delItem.id);
    setDones(newDones);
  };

  const toggleTodo = (item) => {
    if (item.type === 'TODO') {
      item.type = 'DONE';
      setDones((curArr) => [item, ...curArr]);
      deleteTodo(item);
    } else {
      item.type = 'TODO';
      setTodos((curArr) => [item, ...curArr]);
      deleteDone(item);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper input>
          <Title>👀투두리스트👀</Title>
          <form onSubmit={createTodo} action="">
            <Input
              onChange={insertTodo}
              value={todo}
              type="text"
              placeholder="할 일을 입력하세요"
            />
            <Btn>
              <FontAwesomeIcon icon={faCirclePlus} />
            </Btn>
          </form>
        </Wrapper>
        <Wrapper todo>
          <Title>😩To Do ({todos.length})</Title>
          <ul>
            {todos.map((item) => (
              <li key={item.id}>
                <Text onClick={() => toggleTodo(item)}>{item.todo}</Text>
                <Btn>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={() => deleteTodo(item)}
                  />
                </Btn>
              </li>
            ))}
          </ul>
        </Wrapper>
        <Wrapper done>
          <Title>🥴Done ({dones.length})</Title>
          <ul>
            {dones.map((item) => (
              <DoneItem key={item.id}>
                <Text onClick={() => toggleTodo(item)}>{item.todo}</Text>
                <Btn>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={() => deleteDone(item)}
                  />
                </Btn>
              </DoneItem>
            ))}
          </ul>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
