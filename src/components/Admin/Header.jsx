import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import {
    CloudArrowUpIcon,
    HomeIcon,
    UserIcon,
    ArrowUpOnSquareStackIcon,
    PlusIcon, 
    BackwardIcon
  } from "@heroicons/react/24/outline";


const Header = () => {

    let { user, logoutUser } = useContext(AuthContext)

    const navigate = useNavigate()

    function home() {
        navigate("home");
    }  

    function addapp() {
        navigate("add-app")
    }
  return (
    <div className="flex w-full">
            {/* <div className="flex flex-col h-screen p-3 bg-blue-900 shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        {user && 
                            <h2 className="text-xl font-bold text-white"> Hello,{user.username}</h2>
                        }
                    </div>
                    
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    <span className="text-gray-100" onClick={home}>Home</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        />
                                    </svg>
                                    <span className="text-gray-100" onClick={addapp}>Add App</span>
                                </a>
                            </li>
                            
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    <span onClick={logoutUser} className="text-gray-100">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
             <div className="flex flex-col mt-5 h-screen p-3 bg-gray-300 w-60">
                <div className="space-y-3">
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                        
                            <li>
                                <Button onClick={home} variant="gradient" className="flex mt-8 ml-4 mr-4 rounded-none w-36 bg-white text-indigo-700 border-indigo-700 items-center gap-3">
                                    <HomeIcon strokeWidth={2}  className="h-5 w-5" /> Home
                                </Button>
                            </li>
                            <li>
                                <Button onClick={addapp} variant="gradient" className="flex mt-8 ml-4 mr-4 rounded-none w-36 bg-white text-indigo-700 border-indigo-700 items-center gap-3">
                                    <PlusIcon strokeWidth={2}  className="h-5 w-5" />Add App
                                </Button>
                            </li>
                            <li>
                                <Button onClick={logoutUser} variant="gradient" className="flex mt-8 ml-4 mr-4 rounded-none w-36 bg-white text-indigo-700 border-indigo-700 items-center gap-3">
                                    <BackwardIcon strokeWidth={2}  className="h-5 w-5" />Logout
                                </Button>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container w-[210rem]">
                <Outlet></Outlet>
            </div>
        </div>
  )
}

export default Header