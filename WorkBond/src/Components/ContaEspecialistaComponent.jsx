import React from "react";
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react'



export default function ContaEspecialistaComponent() {
    const [step, setStep] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault(); // Stops the default reload behavior
        setStep(2)
    }

    return (
        <>
            {
                step == 1 && <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-6">
                    <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            {/* Left Side - Icon */}
                            <div className="flex flex-col items-center justify-center md:w-1/3">
                                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                                    <svg className="w-full h-full text-blue-600 dark:text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="7" />
                                        <path d="M12 9v3l1.5 1.5" />
                                        <path d="M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83" />
                                        <path d="M3 12h3m15 0h-3M12 3v3m0 15v-3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                                    Criar conta como especialista
                                </h2>

                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            E-mail
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Confirmar password
                                        </label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    <button
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 mt-4"
                                        type="submit"
                                    >
                                        Continuar
                                    </button>
                                </form>

                                <div className="mt-6 text-center">
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Já possui uma conta?{" "}
                                        <Link to='/Loggin' className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                            Entrar
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    );
}