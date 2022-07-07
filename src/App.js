import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./routes/home";
import { Register } from "./routes/register"
import {Login} from "./routes/login"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Layout />}>
    |         <Route index element={<Home/>} />
            </Route>
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
