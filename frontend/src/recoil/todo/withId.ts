import { DefaultValue, selectorFamily } from "recoil";
import todoAtom from ".";
import { Todo } from "../../types/todo";

const withId = selectorFamily<Todo | undefined, string>({
  key: "todoWithId",
  get:
    (id) =>
    ({ get }) => {
      const todoList = get(todoAtom);
      const todo = todoList.find((todo) => todo.id === id);
      return todo;
    },
  set:
    (id) =>
    ({ get, set }, newValue) => {
      const todoList = get(todoAtom);
      const todoIndex = todoList.findIndex((todo) => todo.id === id);
      const newTodoList = [...todoList];

      // 상태가 설정되어 있지 않은 경우 newValue는 recoil DefaultValue의 instance이므로 예외처리 한다.
      if (newValue instanceof DefaultValue) {
        return newTodoList[todoIndex];
      }
      // newValue를 인자로 넘기지 않은 경우 예외처리 한다.
      if (newValue === undefined) {
        return newTodoList[todoIndex];
      }

      newTodoList[todoIndex] = newValue;
      set(todoAtom, newTodoList);
    },
});

export default withId;
