import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import SubjectDetails from "./pages/SubjectDetails";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/subjects" element={<Subjects />} />

        <Route path="/subject/:subjectName" element={<SubjectDetails />} />

        <Route path="/test/:subjectName/:level" element={<TestPage />} />

        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
