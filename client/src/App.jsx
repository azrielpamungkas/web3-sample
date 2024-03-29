import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/HomePage";
import AboutPage from './components/AboutPage';
import StatisticPage from './components/StatisticPage';
// import Vote from "./components/Vote";
import VoteForm from "./components/VoteForm";
import AddCandidate from "./components/AddCandidate";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/voting",
          element: <VoteForm/>,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/statistic",
          element: <StatisticPage/>
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
