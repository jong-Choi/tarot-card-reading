import { NavLink } from "react-router-dom";

const user = {
  name: "김복남",
  age: 32,
};

function Home() {
  return (
    <div>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "activated-link" : "")}
        style={({ isActive }) => (isActive ? { color: "gray" } : {})}
      >
        홈으로 이동하기
      </NavLink>
    </div>
  );
}

export default Home;
