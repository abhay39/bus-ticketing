"use client"
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

export default function SignIn() {


  const [info, setInfo] = useState({
    email: '',
    password: '',
  })

  const [isLogging, setIsLogging] = useState<boolean>(false)


  const hanldeSubmit = async (e: any) => {
    e.preventDefault()
    setIsLogging(true)
    const api = process.env.NEXT_PUBLIC_API_URL;

    let res: any = await fetch(`${api}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: info.email,
        password: info.password
      })
    })

    const status = res.status;
    res = await res.json();
    if (status === 200) {
      toast(res.message, {
        type: "success"
      })
      localStorage.setItem("token", res.token);
      setInfo({
        email: '',
        password: '',
      })
      setTimeout(() => {
        window.location.href = "/"
      }, 2000)
    } else {
      toast(res.message, {
        type: "error"
      })
      setInfo({
        email: '',
        password: '',
      })
    }
    setIsLogging(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
        <form onSubmit={hanldeSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              value={info.email}
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              value={info.password}
              type="password"
              onChange={handleChange}
              name="password"
              id="password"
              required
              className="w-full px-3 py-2 mt-1 text-gray-900 border rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          {
            isLogging ? (<button disabled
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white bg-slate-950 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              <AiOutlineLoading3Quarters className=" animate-spin" /> loggin in
            </button>) : (<button
              type="submit"
              className="w-full px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Sign in
            </button>)
          }
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="text-teal-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
