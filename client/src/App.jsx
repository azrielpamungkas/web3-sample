import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/HomePage";
import VoteForm from "./components/VoteForm";
import AboutPage from './components/AboutPage';
import StatisticPage from './components/StatisticPage';

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
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
