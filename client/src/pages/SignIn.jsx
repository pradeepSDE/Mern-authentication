import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
const SignIn = () => {
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext)
  const [data, setData] = useState({
    // name:'',
    email: "",
    password: "",
  });
  const handleSignin = async (e) => {
    e.preventDefault();
    // console.log(data)
    const { email, password } = data;
    try {
      const { data } = await axios.post("/signin", { email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
       await axios.get('/profile', { withCredentials: true } ).then(({data}) => {
          console.log(data)
            setUser(data);
       });
       
        toast.success(data.message);
        setData({});
        
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (user) { // Assuming 'user' holds the current user state which is updated by setUser
      navigate("/profile");
    }
  }, [user]); 
  return (
    <div className=" flex h-[100vh]    justify-center items-center">
      <div className="border-2 border-slate-300 justify-center items-center rounded-lg p-10">
        <h1 className="font-bold m-2 p-2 flex justify-center text-2xl mb-5">LogIn</h1>
        <hr  className="p-2"/>
        <form onSubmit={handleSignin} className="flex-col  ">
          <label htmlFor="" className="font-semibold m-2  p-1">
            E-mail
          </label>
          <input
            className="flex p-2 border-2 border-gray-300 rounded-2xl bg-slate-50 m-1 "
            type="email"
            name="email"
            placeholder="xyz@gmail.com"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <label htmlFor="" className="font-semibold m-2  p-1">
            Password
          </label>
          <input
            className="flex p-2 border-2 border-gray-300 rounded-2xl bg-slate-50 m-1 "
            type="password"
            name="pass"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
          <button
            type="submit"
            className="p-3 mt-5  w-full bg-indigo-500 font-semibold text-lg text-white rounded-3xl"
          >
            {" "}
            submit{" "}
          </button>
          <hr className="m-5 " />
          <h3 className="text-lg mt-5 justify-center p-1 flex " >New User? <Link className="text-md  text-indigo-500 ml-1.5 font-semibold" to={'/signup'}> Signup</Link></h3>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
