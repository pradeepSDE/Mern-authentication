import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

const Dashboard = () => {
 const {user} = useContext(UserContext);
 
  return (
    <div>
      <h1>DASHBOARD</h1>
      <h1>welcome {!!user && user.name}!!</h1>
    </div>
  )
}

export default Dashboard
