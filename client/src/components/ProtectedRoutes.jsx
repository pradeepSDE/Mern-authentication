import { Outlet, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useContext } from 'react'
import { UserContext } from "../context/userContext";

const ProtectedRoutes = () => {
   const {user}= useContext(UserContext)
   const navigate = useNavigate()

   const token = localStorage.getItem('token')
   console.log(token)
   console.log(user)

  return (
    user? <Outlet/> : <Navigate to={'/signin'}/>
  )
}

export default ProtectedRoutes
