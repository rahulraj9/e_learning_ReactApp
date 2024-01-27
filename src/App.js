import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses.jsx";
import CourseDetails from "./Pages/CourseDetails/CourseDetails.jsx";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        {
          // path: "",
          index: true,
          element: <Home />,
        },
        {
          path: "/courses",
          children: [
            {
              index:true,
              element:<Courses/>,
            },
            {
              path: ":id",
              element: <CourseDetails />,
            },
          ],
        },
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
