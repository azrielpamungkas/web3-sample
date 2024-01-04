import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Vote from "./components/Vote";

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
        // {
        //   path: "about",
        //   element: <About />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
