import { useRecoilState } from "recoil";
import todoAtom from "../../recoil/todo/atom";
import { Todo } from "../../types/todo";

const TodoPage = () => {
  const [todoList, setTodoList] = useRecoilState(todoAtom);

  const onAdd = () => {
    const newData: Todo = {
      id: String(todoList.length + 1),
      isDone: false,
      title: "새 할일",
    };
    setTodoList([...todoList, newData]);
  };

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div key={todo.id} style={{ display: "flex" }}>
            <div>{todo.id}</div>
            <div>{todo.isDone}</div>
            <div>{todo.title}</div>
          </div>
        );
      })}
      <button type="button" onClick={onAdd}>
        새 할일 추가하기
      </button>
    </div>
  );
};

export default TodoPage;
