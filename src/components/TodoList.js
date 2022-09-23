import { faCirclePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Title,
  Wrapper,
  Input,
  Btn,
  Text,
  DoneItem,
  List,
} from '../styles/ContainerStyle';

const TodoList = ({
  todo,
  todos,
  dones,
  insertTodo,
  createTodo,
  toggleTodo,
  deleteTodo,
  deleteDone,
}) => {
  return (
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
        <List>
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
        </List>
      </Wrapper>
      <Wrapper done>
        <Title>🥴Done ({dones.length})</Title>
        <List>
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
        </List>
      </Wrapper>
    </Container>
  );
};

export default TodoList;
