import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Vote from "./components/Vote";
import Voter from "./components/Voter";
import About from "./components/About";
import Statistic from "./components/Statistic";
import AddCandidate from "./components/AddCandidate";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Vote />,
        },
        {
          path: "/voting",
          element: <Voter />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/statistic",
          element: <Statistic />,
        },
        {
          path: "/dashboard",
          element: <AddCandidate />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
