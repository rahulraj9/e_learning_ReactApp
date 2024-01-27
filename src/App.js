import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses.jsx";
import CourseDetails from "./Pages/CourseDetails/CourseDetails.jsx";
import StartLearning from "./Pages/StartLearning/StartLearning.jsx";
import Chapter from "./components/Chapter/Chapter.jsx";
import ErrorHandling from "./Pages/ErrorHandling/ErrorHandling.jsx";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      errorElement:<ErrorHandling/>,
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
              index: true,
              element: <Courses />,
            },
            {
              path: ":id",
              element: <CourseDetails />,
            },
          ],
        },
        {
          path: "/:id/:courseDetails/learning",
          element: <StartLearning />,
          children: [
            {
              path: "chapter/:chapter",
              element: <Chapter />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
