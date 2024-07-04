import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
export default function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
      children: [{ path: "about", element: <About /> }],
    },
  ];
  const router = createBrowserRouter(routes);
  return (
    <div className="">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}
