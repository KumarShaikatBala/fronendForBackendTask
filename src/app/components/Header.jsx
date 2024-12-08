"use client";
import React, {useContext, useState} from 'react';
import {ShoppingCart} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import {AuthContext, useAuth} from '@/context/AuthContext'
import MenuIcon from '@mui/icons-material/Menu';
import Loading from "@/app/components/common/Loading";
import LogoutIcon from '@mui/icons-material/Logout';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {cartItems} = useContext(AuthContext)
    const {user, logout, isLoading} = useAuth();
    const handleClick = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    return (
        <header
            className="flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50">
            <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
                <Link href="/" className="inline-block">
          Logo Here
                </Link>
                <div
                    id="collapseMenu"
                    className={`lg:ml-10 lg:block ${isMenuOpen ? 'block' : 'hidden'} max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
                >
                    <button
                        className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
                        onClick={handleClick}
                    >
                        <MenuIcon/>
                    </button>
                    <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3">
                        <li className="mb-6 hidden max-lg:block">
                            <Link href="/" className="inline-block">
01617777010
                            </Link>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3 px-3">
                            <Link href="/"
                                  className="text-[#007bff] hover:text-[#007bff] text-[15px] block font-semibold"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3 px-3">
                            <Link
                                href="/products"
                                className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
                            >
                                Products
                            </Link>
                        </li>
                        <li className="max-lg:border-b max-lg:py-3 px-3">

                            <Link href="/carts"
                                  className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold">
                                Shopping Cart
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-x-6 gap-y-4 ml-auto">
                    <div className="flex items-center space-x-8">
                        {cartItems && (
                            <Link href="/carts" className="relative">
                                <ShoppingCart className="text-[#007bff] text-2xl"/>
                                <span
                                    className="absolute -top-1 -right-1 bg-[#007bff] text-white rounded-full text-xs px-1"
                                >
                                    {cartItems.length}
                            </span>
                            </Link>
                        )}

                        {isLoading ? (
                            <Loading/>
                        ) : user ? (
                            <>
                                {user.role === 'admin' && (

                                <Link href="/user/dashboard"
                                      className="px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]"
                                >
                                    {user.name}    Dashboard
                                </Link>
                                )}
                                <Link href="/user/orders"
                                    className="px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]"
                                >
                                    {user.name} Orders List
                                </Link>




                                <button
                                    onClick={logout}
                                    className=" border px-2.5 py-1 flex items-center gap-2 rounded-md hover:text-red-600 text-baseblue text-center font-inter text-xs font-bold font-inter leading-normal sm:text-[11px]  xl:text-base"
                                >
                                     Logout
                                    < LogoutIcon/>
                                </button>


                            </>

                            ) : (




                        <Link href="/login"
                            className="px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]"
                        >
                            Sign In
                        </Link>
                    )}
                        <button id="toggleOpen" className="lg:hidden" onClick={handleClick}>
                            <MenuIcon/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;