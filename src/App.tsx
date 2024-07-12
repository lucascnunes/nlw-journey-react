import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home";
import Details from "./pages/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/trips/:tripId",
    element: <Details />
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}