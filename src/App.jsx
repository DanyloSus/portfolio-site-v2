import Portfolio from "./Pages/Portfolio";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
