import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './Signup'
import Login from './Login'
import NoPage from './Error'
import Home from '../views/Home'
import Navbar from './Navbar'
const Main = () => {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NoPage />}></Route>
    </Routes>
      </BrowserRouter>
      </>
  )
}
export default Main
