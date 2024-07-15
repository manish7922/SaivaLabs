import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";

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
      children: [
        { path: "about", element: <About /> },
        { path: "services", element: <Services /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}
