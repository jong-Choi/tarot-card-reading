import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>헤더입니다.</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
