import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Event from '../pages/Event';
import Login from "../pages/Login";

const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.auth)
  
  return ( 
    isAuth ? 
    <Routes>
      <Route path="/" element={<Event />}/> 
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
   : 
    <Routes>
      <Route path="/login" element={<Login />}/> 
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
