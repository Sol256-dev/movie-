import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Home, { fetchData } from "./routes/Home";
import Movies from "./routes/Movies";
import Tvshows from "./routes/Tvshows";
import Error from "./routes/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} loader={fetchData} />
      <Route path="/movies/" element={<Movies />} />
      <Route path="/tvshows/" element={<Tvshows />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
