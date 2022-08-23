import React from "react"
import LogIn from "./components/login"
import SignUp from "./components/sign"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={<LogIn/>}/>
    </Routes>
  </BrowserRouter>
  );
}

