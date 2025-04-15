import { useState } from 'react'
import {
  HashRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Overview from "./components/oveview/Overview";
import PatientList from "./components/patient/PatientLists";
import Analysis from "./components/analysis/Analysis";
import AIdiag from "./components/aidiagnosis/AI-Diagnosis";
import Analytics from "./components/analytics/Analytics";
import { ContextProvider } from "./components/ContextProvider";
import { Navigate } from 'react-router-dom';
import ScrollToTop from './components/scrolltotop';


function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <ScrollToTop/>
      <ContextProvider>
        <Routes>
            <Route path="/" element={<Root />}>
            <Route index element={<Navigate to="overviews/1" />} />
              <Route path="overviews/:overviewId" element={<Overview />} />
              <Route path="patientlists/:patientlistId" element={<PatientList />} />
              <Route path="analysis/:analysisId" element={<Analysis />} />
              <Route path="aidiagnosis/:aidiagnosisId" element={<AIdiag />} />
              <Route path="analytics/:analyticsId" element={<Analytics />} />
            </Route>
        </Routes>
      </ContextProvider>
  </HashRouter>
  )
}

export default App
