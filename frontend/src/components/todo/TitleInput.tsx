import { useRecoilState } from "recoil";
import { withId } from "../../recoil/todo";
import { ChangeEventHandler } from "react";

const TitleInput = ({ id }: { id: string }) => {
  const [todo, setTodo] = useRecoilState(withId(id));
  if (!todo) return <></>;

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const title = e.target.value;
    setTodo({
      ...todo,
      title,
    });
  };

  return <input type="text" value={todo.title} onChange={onChangeHandler} />;
};

export default TitleInput;
