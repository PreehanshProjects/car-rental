import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import CarsPage from "../pages/CarsPage/CarsPage";
import MainLayout from "../layouts/Mainlayout";
import BookNowPage from "../pages/BookNowPage/BookNowPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/cars", element: <CarsPage /> },
      { path: "/booknow/:id", element: <BookNowPage /> },
    ],
  },
]);
