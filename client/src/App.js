import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
// import SignIn from './pages/SignIn';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import axios from 'axios';
import {Toaster } from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './components/ProtectedRoutes';
axios.defaults.baseURL='https://mern-authentication-api-khaki.vercel.app/';
axios.defaults.withCredentials=true;
function App() {
  return (
    <UserContextProvider >
     <Navbar/>
     <Toaster position='top-center' toastOptions={{duration:2000}} />
     <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/signin" element={<SignIn/>}/> 
      <Route path="/signup" element={<SignUp/>}/> 
      {/* <Route path="/profile" element={<Dashboard/>}/>  */}
      <Route element={<ProtectedRoutes/>}>
        <Route path="/profile" element={<Dashboard/>} />
      </Route>
     </Routes>

    </UserContextProvider>
  );
}

export default App;
