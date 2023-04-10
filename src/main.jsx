import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main";
import ErrorPage from "./Components/ErrorPage";
import Statistics from "./Components/Statistics";
import AppliedJobs from "./Components/AppliedJobs";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import ViewDetails from "./Components/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
        loader: () => fetch("/features.json"),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "details/:id",
        element: <ViewDetails />,
        loader: () => fetch("/features.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
