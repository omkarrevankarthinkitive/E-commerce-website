import "./App.css";

//importing the Login page
import Login from "./pages/Login";

//importing signup page
import Signup from "./pages/Signup";

// importing home page
import Home from "./pages/Home";

//react router dom for navigating through pages
import { Route, BrowserRouter, Link, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
