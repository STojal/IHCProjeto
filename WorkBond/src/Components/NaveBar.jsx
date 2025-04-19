import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

export function NaveBar() {
    const [openNav, setOpenNav] = useState(false);
    const [hamburger, setHamburger] = useState(false)
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem("theme");
        return stored === "dark";
    });
    useEffect(() => {
        // Verifica logo no carregamento
        if (window.innerWidth >= 960) {
            setOpenNav(false);
            setHamburger(false);
        } else {
            setHamburger(true);
        }

        // Depois escuta redimensionamentos
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
                setHamburger(false);
            } else {
                setHamburger(true);
            }
        };

        window.addEventListener("resize", handleResize);

        // Limpeza do event listener ao desmontar
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-blue-gray-900 dark:text-gray-100">
            {/* Adiciona os teus links aqui 
            <li>
                <Link to="#" className="hover:underline">Blocks</Link>
            </li>
            */}
        </ul>
    );

    return (

        <Navbar className="sticky top-0 z-10 w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-white dark:bg-gray-900 shadow-md">
            <div className="flex items-center justify-between text-blue-gray-900 dark:text-white">
                <Link to='/' className="mr-4 cursor-pointer py-1.5 font-medium">
                    WorkBond
                </Link>
                {!hamburger ? <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-x-2">

                        <button className="bg-white text-black dark:bg-gray-800 dark:text-white px-4 py-2 rounded"
                            variant="outlined"
                            size="sm"
                        >
                            <Link to="/Loggin">Log In</Link>
                        </button>
                        <button className="bg-white text-black dark:bg-gray-800 dark:text-white px-4 py-2 rounded"
                            variant="gradient"
                            size="sm"
                        >
                            <Link to="/SignIn">Sign in </Link>
                        </button>
                        {/* Dark Mode Toggle */}
                        <button className="bg-white text-black dark:bg-gray-800 dark:text-white px-4 py-2 rounded"
                            size="sm"
                            variant="text"

                            onClick={() => setIsDark(!isDark)}
                        >
                            {isDark ? "☀️ Claro" : "🌙 Escuro"}
                        </button>

                    </div>
                    {/* Mobile icon */}

                </div> : <div className="flex items-center gap-x-2">
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </IconButton>
                </div>}

            </div>
            <Collapse open={openNav}>
                <div className="block lg:hidden px-4 pt-2">
                    {navList}
                    <div className="flex flex-col gap-2 pt-2">
                        <button className="bg-white text-black dark:bg-gray-800 dark:text-white px-4 py-2 rounded">
                            <Link to="/Loggin">Log In</Link>
                        </button>
                        <button className="bg-white text-black dark:bg-gray-800 dark:text-white px-4 py-2 rounded">
                            <Link to="/SignIn">Sign in</Link>
                        </button>
                        <button className="bg-white text-black dark:bg-gray-800 dark:text-white px-4 py-2 rounded"

                            size="sm"
                            variant="text"
                            onClick={() => setIsDark(!isDark)}
                        >
                            {isDark ? "☀️ Claro" : "🌙 Escuro"}
                        </button>
                    </div>
                </div>
            </Collapse>
        </Navbar>
    );
}

export default NaveBar;