import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Overview from "./components/Overview";
import "./index.css";
import PatientList from "./components/PatientLists";

const router = createBrowserRouter([
  {
    path: "/medspecter/",
    element: <Root/>,
    children: [
      {
        path:"overviews/:overviewId",
        element:<Overview/>
      },
      {
        path:"patientlists/:patientlistId",
        element:<PatientList/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
