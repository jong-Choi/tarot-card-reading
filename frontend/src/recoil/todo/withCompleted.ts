import { selector } from "recoil";
import todoAtom from "./atom";
import { TodoList } from "../../types/todo";

/**
 * todoWithCompleted 선택기는 todoAtom에서 가져온 todo 리스트 중에서 완료된 todo만 필터링하여 반환합니다.
 * @param {RecoilValueReadOnly<TodoList>} param0 - Recoil의 get 메서드를 사용하여 다른 Recoil 상태의 값을 읽습니다.
 * @returns {Todo[]} - 완료된 todo 리스트
 */
const todoWithCompleted = selector<TodoList>({
  key: "todoWithCompleted",
  get: ({ get }) => {
    const todoList = get(todoAtom);
    return todoList.filter((todo) => !!todo.isDone);
  },
});

export default todoWithCompleted;
