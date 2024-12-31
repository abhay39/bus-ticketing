"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

export default function SignUp() {

  const [info,setInfo]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const [isLogging,setIsLogging]=useState<boolean>(false)


  const hanldeSubmit=async(e:any)=>{
    e.preventDefault()
    setIsLogging(true)
    const api=process.env.NEXT_PUBLIC_API_URL;
    if(info.password!==info.confirmPassword){
      toast('Passwords and confirm password doesnt match',{
        type:"error"
      })

      return ;
    }

    let res:any= await fetch(`${api}/user/register-new-account`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:info.name,
        email:info.email,
        password:info.password
      })
    })

    const status=res.status;
    res=await res.json();
    if(status===201){
      toast(res.message,{
        type:"success"
      })
      localStorage.setItem("token",res.token);
      setInfo({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
      })
      setTimeout(()=>{
        window.location.href="/"
      },2000)
    }else{
      toast(res.message,{
        type:"error"
      })
      setInfo({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
      })
    }
    setIsLogging(false)
  }

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setInfo({...info,[e.target.name]:e.target.value})
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={hanldeSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
            value={info.name}
            onChange={handleChange}
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
            value={info.email}
            onChange={handleChange}
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
            value={info.password}
            onChange={handleChange}
              type="password"
              name="password"
              id="password"
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
            value={info.confirmPassword}
            onChange={handleChange}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          {
            isLogging ? (<button disabled
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white bg-slate-950 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            > 
              <AiOutlineLoading3Quarters className=" animate-spin" /> Registering account
            </button>) :(<button
            type="submit"
            className="w-full px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Sign Up
          </button>)
          }
          
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/log-in" className="text-teal-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
