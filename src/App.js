
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Home from './Pages/Home/Home'
import Courses from './Pages/Courses/Courses.jsx'
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Nav/> ,
      children: [
        {
          // path: "",
          index: true,
          element: <Home />,
        },
        {
          path:"/courses",
          element:<Courses/>
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <Nav/>
      <Home/>
      <Courses/> */}
    </>
  );
}
