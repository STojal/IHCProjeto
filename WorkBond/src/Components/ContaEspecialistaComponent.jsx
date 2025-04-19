import React from "react";
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react'

import Servicos from '../Data/Servicos.json';


export default function ContaEspecialistaComponent() {
    const [step, setStep] = useState(1);
    const [selectedWorkAreas, setSelectedWorkAreas] = useState([]);
    const [especialidade, seEspecialidade] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault(); // Stops the default reload behavior
        setStep(2)
    }

    var especiFilter = [];
    const toggleWorkArea = (area) => {
        if (selectedWorkAreas.includes(area)) {
            setSelectedWorkAreas(selectedWorkAreas.filter(item => item !== area));
            // remove as virgulas e busca as especialicizações dauelas areas
            var tempEsp = Servicos.filter(s => s.name?.includes(area.name) && s.name?.includes(','))
            // verifica se e igual 
            seEspecialidade(especialidade.filter(item => item.toString() !== tempEsp.map(s => s.name.split(',')[1]).toString()))
        } else {
            especiFilter.push(Servicos.includes(area))
            setSelectedWorkAreas([...selectedWorkAreas, area]);

            var tempEsp = Servicos.filter(s => s.name?.includes(area.name) && s.name?.includes(','))

            seEspecialidade([...especialidade, tempEsp.map(s => s.name.split(',')[1])])
        }
    };
    const filterServicos = Servicos.filter(
        s => !s.name?.toLowerCase().includes(',')
    );




    return (
        <>
            {
                step == 1 ? <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-6">
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
                    :
                    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-6">
                        <div className="max-w-4xl mx-auto p-6 my-8 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                            <form className="space-y-6">
                                {/* Personal Information */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="serviceArea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Zona de serviço:</label>
                                        <select
                                            id="serviceArea"
                                            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Selecionar zona</option>
                                            <option value="norte">Norte</option>
                                            <option value="centro">Centro</option>
                                            <option value="sul">Sul</option>
                                            <option value="ilhas">Ilhas</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Work Areas */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Selecionar Área de Trabalho</h3>

                                        <div className="flex flex-wrap gap-2">

                                            <div className="flex gap-2 flex-wrap">
                                                {filterServicos.map((area, i) => (
                                                    <button
                                                        key={i}
                                                        type="button"
                                                        className={`px-3 py-1 rounded-full text-sm transition ${selectedWorkAreas.includes(area)
                                                            ? 'bg-blue-600 text-white'
                                                            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                                                            }`}
                                                        onClick={() => toggleWorkArea(area)}
                                                    >
                                                        {area.name}
                                                    </button>

                                                ))}

                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Especialização</h3>

                                        <div className="flex flex-wrap gap-2">

                                            <div className="flex gap-2 flex-wrap">
                                                {especialidade.map((group, i) => (
                                                    group.map((area, k) =>
                                                        <button
                                                            key={`${i}-${k}`}
                                                            type="button"
                                                            className={`px-3 py-1 rounded-full text-sm transition ${selectedWorkAreas.includes(area)
                                                                ? 'bg-blue-600 text-white'
                                                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                                                                }`}
                                                            onClick={() => toggleWorkArea(area)}
                                                        >
                                                            {area}
                                                        </button>
                                                    )
                                                )

                                                )}

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Pricing and Availability */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preço/Hora:</label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                id="price"
                                                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 dark:text-gray-300">
                                                €
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="workDays" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Dias de trabalho:</label>
                                        <select
                                            id="workDays"
                                            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Selecionar dias</option>
                                            <option value="weekdays">Segunda a Sexta</option>
                                            <option value="weekends">Fins de semana</option>
                                            <option value="all">Todos os dias</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="availableHours" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Horário disponível:</label>
                                        <select
                                            id="availableHours"
                                            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Selecionar horário</option>
                                            <option value="morning">Manhã (8h-12h)</option>
                                            <option value="afternoon">Tarde (13h-17h)</option>
                                            <option value="evening">Noite (18h-22h)</option>
                                            <option value="flexible">Horário flexível</option>
                                        </select>
                                    </div>

                                    <div className="flex items-end justify-end">
                                        <button
                                            type="submit"
                                            className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                                        >
                                            Continuar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

            }
        </>

    );
}