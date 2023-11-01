import Portfolio from "./Pages/Portfolio";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  // create router (I thought make more than one site)
  {
    path: "/", // main path is Portfolio page
    element: <Portfolio />,
  },
]);

const App = () => {
  // create App element
  return <RouterProvider router={router} />; // return Router provider with the router
};

export default App; // return
