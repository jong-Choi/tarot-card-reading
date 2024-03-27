import { atom } from "recoil";
import { TodoList } from "../../types/todo";

const todoAtom = atom<TodoList>({
  key: "todo",
  default: [
    {
      id: "1",
      isDone: true,
      title: "리코일 공부하기",
    },
  ],
});

export default todoAtom;
