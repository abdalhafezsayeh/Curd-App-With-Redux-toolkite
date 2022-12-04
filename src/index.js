import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Step (1) import BrowserRouter And Provider From react Router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
// Its LayOut all WebSite
import RootLayOut from "./pages/RootLayOut";
// pages
import Add from "./pages/Add";
import Edite from "./pages/Edite";
import Details from "./pages/Details";
import ErorrPage from "./pages/ErorrPage";
// components
import Postes from "./components/Postes";
import {store} from "../src/state/store";
import Index from "./pages/Index";

// Step (2) Create Function Of Array Start Routes
const router = createBrowserRouter([
  // Start Object One
  {
    path: "/",
    element: <RootLayOut />,
    errorElement: <ErorrPage />,
    children: [
      { index: true, element: <Index /> },
      { path: "add/post", element: <Add /> },
      { path: "post/:id/edite", element: <Edite /> },
      {
        path: "post/:id/details",
        element: <Details />,
        loader: ({ params }) => {
          // console.log(isNaN(params.id))
          if (isNaN(params.id)) {
            throw new Response("Bad Request", {
              status: 400,
              statusText: "Please Insert Number Or Corccet ID",
            });
          }
        },
      },
    ],
  },
  // End Object One
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* provider Redux toolkit */}
    <Provider store={store}>
      {/* Step (3) Create Provider Lisener */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
