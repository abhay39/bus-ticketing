"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "./MainProvider"
import { toast } from "react-toastify"

let allLinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Book Tickets",
    link: "/book-tickets"
  },
  {
    name: "Add Bus",
    link: "/add-bus"
  },
  {
    name: "Show Booked Tickets",
    link: "/show-booked-tickets"
  },
  {
    name: "About Us",
    link: "/about-us"
  },
  {
    name: "Contact Us",
    link: "/contact-us"
  },
]

const Navbar = () => {

  const theme: any = useContext(ThemeContext);
  const token = localStorage.getItem("token");

  const getUserInfo=async()=>{
    const api=process.env.NEXT_PUBLIC_API_URL;
    let res= await fetch(`${api}/user/get-details-of-current-user/${token}`);
    res=await res.json();
    theme.setUserInfo(res)
  }
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (token) {
      getUserInfo();
    }
  },[])
  
  // Filter the links
  allLinks = !token
    ? allLinks.filter(
      (link) =>
        link.name !== "Booked Tickets" && link.name !== "Book Tickets" && link.name !== "Show Booked Tickets" && link.name !== "Add Bus"
    )
    : allLinks;

  allLinks = theme.userInfo.isAdmin===false
    ? allLinks.filter(
      (link) =>
        link.name !== "Add Bus"
    )
    : allLinks;


  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      theme.setThemeClass(storedTheme === "light" ? "light-theme" : "dark-theme");
    }
  }, []);

  const [showNav, setShowNav] = useState<boolean>(false);
  const [showNavMd, setShowNavMd] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div className={`shadow-md z-50 lg:px-16 sticky top-0 py-4 md:px-8 px-4 ${theme.themeClass === 'light-theme' ? 'bg-white' : 'bg-black'} `}>
      <div className=" flex items-center justify-between ">
        <Link href={"/"} className=" font-bold text-2xl hover:text-blue-400 duration-300 transition-all">BookMySpot</Link>

        <nav className=" flex items-center gap-3">
          <ul className=" hidden text-sm text-center lg:flex  gap-4 items-center">
            {
              allLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className={`${pathname === item.link ? 'font-bold' : ""}`} href={item.link}>{item.name}</Link>
                  </li>
                )
              })
            }
          </ul>
          <div className=" flex gap-3">

            <div className=" hidden md:flex gap-3 text-sm">
              {
                token ? (<Link onClick={() => {
                  localStorage.removeItem('token');
                  toast.success("logged out successfully!!!")
                  window.location.reload();
                }} href={"/"} className=" bg-[#db0522] p-2 rounded-md text-white px-3 text-center">Log out</Link>
                ) : (<>
                  <Link onClick={() => {
                    setShowNav(!showNav)
                  }} href={"/log-in"} className=" bg-[#EDFFFE] p-2 rounded-md text-[#3e7a77] px-3 text-center">Log in</Link>
                  <Link onClick={() => {
                    setShowNav(!showNav)
                  }} href={"/sign-up"} className=" bg-[#00A19A] p-2 rounded-md text-white px-3 text-center">Sign up</Link></>)
              }
            </div>
            <button onClick={() => {
              setShowNav(!showNav)
            }} className=" cursor-pointer p-1 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 md:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <button onClick={() => {
              setShowNavMd(!showNavMd)
            }} className=" cursor-pointer p-1 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 lg:hidden hidden md:flex">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <button className=" px-2 py-2 bg-slate-200 text-black rounded-full">
            {
              theme.themeClass === 'light-theme' ? (<svg onClick={() => {
                localStorage.setItem("theme", "dark");
                theme.setThemeClass("dark-theme");
              }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />

              </svg>)
                :
                (<svg onClick={() => {
                  localStorage.setItem("theme", "light");
                  theme.setThemeClass("light-theme");
                }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
                )
            }


          </button>
        </nav>
      </div>
      {
        showNav && (
          <div className=" md:hidden duration-1000 animated">
            <ul className=" text-sm  transition-all mt-4 flex flex-col w-full gap-4 items-center  ">
              {
                allLinks.map((item, index) => {
                  return (
                    <li onClick={() => {
                      setShowNav(!showNav)
                    }} key={index} className={` w-full ${pathname === item.link ? 'font-bold' : ""}`}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  )
                })
              }
            </ul>
            <div className=" flex mt-3 gap-10 text-sm">
              {
                token ? (<Link onClick={() => {
                  localStorage.removeItem('token');
                  toast.success("logged out successfully!!!")
                  window.location.reload();
                }} href={"/"} className=" bg-[#db0522] p-2 rounded-md text-white px-3 text-center">Log out</Link>
                ) : (<>
                  <Link onClick={() => {
                    setShowNav(!showNav)
                  }} href={"/log-in"} className=" bg-[#EDFFFE] p-2 rounded-md text-[#3e7a77] px-3 text-center">Log in</Link>
                  <Link onClick={() => {
                    setShowNav(!showNav)
                  }} href={"/sign-up"} className=" bg-[#00A19A] p-2 rounded-md text-white px-3 text-center">Sign up</Link></>)
              }
            </div>
          </div>)
      }
      {
        showNavMd && (
          <div className=" md:flex hidden duration-1000 animated lg:hidden">
            <ul className=" text-sm  transition-all mt-4 flex flex-col w-full gap-4 items-center ">
              {
                allLinks.map((item, index) => {
                  return (
                    <li onClick={() => {
                      setShowNavMd(!showNavMd)
                    }} key={index} className={` w-full ${pathname === item.link ? 'font-bold' : ""}`}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>)
      }
    </div>
  )
}

export default Navbar