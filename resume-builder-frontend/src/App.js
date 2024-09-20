import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoogleLogin from "./components/GoogleLoginButton";
import FormPage from "./components/FormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<GoogleLogin />}
        />
        <Route
          path="/form"
          element={<FormPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
