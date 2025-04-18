import React from "react";

export function ChooseTypeAcount() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-6">
            <div className="max-w-4xl w-full">
                <h1 className="text-3xl font-bold text-center text-blue-800 dark:text-blue-400 mb-8">
                    Escolha o tipo de conta
                </h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Client Account Option */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center">
                        <div className="w-24 h-24 mb-4 rounded-full bg-blue-50 dark:bg-blue-900 flex items-center justify-center">
                            <svg className="w-16 h-16 text-blue-600 dark:text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a5 5 0 015 5v2a5 5 0 01-10 0V7a5 5 0 015-5z" />
                                <path d="M19 16.3c0 2.13-2.58 3.86-7 3.86s-7-1.73-7-3.86" />
                                <circle cx="12" cy="9" r="3" />
                                <path d="M12 12c-2.4 0-5 1.34-5 3" />
                                <path d="M12 12c2.4 0 5 1.34 5 3" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Conta Cliente</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                            Acesse serviços e conecte-se com especialistas
                        </p>
                        <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 w-full">
                            Criar conta como cliente
                        </button>
                    </div>

                    {/* Specialist Account Option */}
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center">
                        <div className="w-24 h-24 mb-4 rounded-full bg-blue-50 dark:bg-blue-900 flex items-center justify-center">
                            <svg className="w-16 h-16 text-blue-600 dark:text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="7" />
                                <path d="M12 9v3l1.5 1.5" />
                                <path d="M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83" />
                                <path d="M3 12h3m15 0h-3M12 3v3m0 15v-3" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Conta Especialista</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                            Ofereça seus serviços e encontre clientes
                        </p>
                        <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 w-full">
                            Criar conta como especialista
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-300">
                        Já possui uma conta?{" "}
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                            Entrar
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChooseTypeAcount;
