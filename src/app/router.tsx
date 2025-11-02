import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import CarsPage from "../pages/CarsPage/CarsPage";
import MainLayout from "../layouts/Mainlayout";
import BookNowPage from "../pages/BookNowPage/BookNowPage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/cars", element: <CarsPage /> },
      { path: "/booknow/:id", element: <BookNowPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);
