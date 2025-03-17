import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ContextProvider } from "./components/ContextProvider";
import Root from "./routes/root";
import Overview from "./components/oveview/Overview";
import "./index.css";
import PatientList from "./components/patient/PatientLists";
import Analysis from "./components/analysis/Analysis";
import AIdiag from "./components/aidiagnosis/AI-Diagnosis";
import Analytics from "./components/analytics/Analytics";
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
      },
      {
        path:"analysis/:analysisId",
        element:<Analysis/>
      },
      {
        path:"aidiagnosis/:aidiagnosisId",
        element:<AIdiag/>
      },
      {
        path:"analytics/:analyticsId",
        element:<Analytics/>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
     <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
