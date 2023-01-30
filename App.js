import React from "react";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import SignInForm from "./components/SignIn";
import SignUpForm from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="register" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm == "login" ? (
        <SignInForm onFormSwitch={toggleForm} />
      ) : (
        <SignUpForm onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
*/
