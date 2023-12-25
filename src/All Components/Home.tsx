// import React from 'react'

import { useContext } from "react";
import CreateUser from "./User/CreateUser";
import { contextApi } from "../Context/Context";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const {user,uname,setUname} = useContext(contextApi);

  const handleContinue = ()=>{
   setUname(true);
   navigate("/menu")
  }
  return (
    <div className="sm:text-xl md:text-2xl text-center my-4 sm:my-10">
      <h1 className="hover:text-yellow-600 transition-colors duration-200">
        The best pizza.
      </h1>
      <br />
      <h1 className="hover:text-yellow-600 transition-colors duration-200 mt-[-0.7rem]">
       
        Straight out of the oven, straight to you.
      </h1>
    {
      !uname ? <CreateUser/> : (
        <button className="btn" onClick={handleContinue}>Complete your order, {user}</button>
      )
    }
      </div>
  );
};

export default Home;
