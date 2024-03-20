import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import TravelTracker from "./components/TravelTracker/TravelTracker";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import NavigationBar from "./components/NavigationBar";
import GetCountries from "./components/TravelTracker/scripts/GetCountries";
import PackingHelper from "./components/PackingHelper/PackingHelper";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavigationBar />
        <App />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "tic-tac-toe",
    element: (
      <>
        <NavigationBar />
        <TicTacToe />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "travel-tracker",
    element: (
      <>
        <NavigationBar />
        <TravelTracker data={GetCountries()} />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "packing-helper",
    element: (
      <>
        <NavigationBar />
        <PackingHelper />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
