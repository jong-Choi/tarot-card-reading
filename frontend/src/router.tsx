import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Profiles from "./pages/Profiles";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profiles",
        element: <Profile />,
        children: [
          {
            path: ":id",
            element: <Profiles />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

{
  /* <Routes>
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/profiles" element={<Profiles />}>
    <Route path=":id" element={<Profile />} />
  </Route>
</Route>
<Route path="*" element={<NotFound />} />
</Routes> */
}
