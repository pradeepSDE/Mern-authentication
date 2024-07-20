import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {useNavigate} from "react-router-dom"
const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/signup", { name, email, password });
      if (data.error) {
        toast.error(data.error);
      }else{
        setData({})
        toast.success("account created successfully");
        navigate("/signin")

      }
    } catch (error) {}
  };
  return (
    <div className=" flex h-[100vh]    justify-center items-center">
      <div className="border-2 border-slate-300 justify-center items-center-sen rounded-lg p-10">
        <h1 className="font-bold flex justify-center m-2 p-2  text-2xl" >SignUp</h1>
      <form onSubmit={handleSignup} className="flex-col  ">
        <label className="font-semibold m-2  p-1" htmlFor="">Username</label>
        <input
        className="flex p-2 border-2 border-gray-300 rounded-2xl bg-slate-50 m-1 "
          type="text"
          name="name"
          placeholder="enter your name..."
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
          />
        <label className="font-semibold m-2  p-1" htmlFor="">E-mail</label>
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
        <label className="font-semibold m-2  p-1" htmlFor="">password</label>
        <input
         className="flex p-2 border-2 border-gray-300 rounded-2xl bg-slate-50 m-1 "
         type="password"
         name="pass"
         value={data.password}
         onChange={(e) => {
           setData({ ...data, password: e.target.value });
          }}
          />
        <button className="p-3 mt-5  w-full  font-semibold text-lg bg-indigo-500 hover:bg-indigo-600 text-white rounded-3xl border-2" type="submit">submit </button>
      </form>
          </div>
    </div>
  );
};

export default SignUp;
