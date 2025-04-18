import React from "react";

export function LogIn() {
    return (
        <div className="min-h-screen w-full bg-white dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                        Iniciar Sessão
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Acede à tua conta WorkBond
                    </p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="exemplo@email.com"
                            className="w-full p-2.5 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                            Palavra-passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full p-2.5 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-gray-600 dark:text-gray-300">
                            <input
                                type="checkbox"
                                className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            Lembrar-me
                        </label>
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                            Esqueci-me da senha
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                        Entrar
                    </button>

                    <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                        Ainda não tens conta?{" "}
                        <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                            Criar conta
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
