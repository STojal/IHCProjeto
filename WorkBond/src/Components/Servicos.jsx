import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Servicos from '../Data/Servicos.json';
import { Alert } from "@material-tailwind/react";

function ServicosPopulares() {
    const [toSearch, setToSearch] = useState('');
    const [show, setShow] = useState(false);
    const [servicoSelecionado, setServicoSelecionado] = useState(null);
    const [servicosFiltrados, setServicosFiltrados] = useState([]);
    const [alert, setAlert] = useState('')
    const location = useLocation()

    const ServicosPopulares = [
        {
            nome: 'Limpeza',
            imagem: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
        },
        {
            nome: 'Canalização',
            imagem: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png',
        },
        {
            nome: 'Eletricidade',
            imagem: 'https://cdn-icons-png.flaticon.com/512/2965/2965572.png',
        },
    ];
    useEffect(() => {
        if (location.state?.alerta) {
            setAlert(location.state.alerta);
            window.history.replaceState({}, document.title);
            const timer = setTimeout(() => setAlert(''), 3000);
            return () => clearTimeout(timer); // limpa o timeout
        }
    }, [location.state]);

    const handleShow = (servico) => {
        const filtrados = Servicos.filter(s =>
            s.name.toLowerCase().includes(servico.nome.toLowerCase())
        );
        setServicoSelecionado(servico);
        setServicosFiltrados(filtrados);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setServicoSelecionado(null);
    };

    const filterServicos = Servicos.filter(
        s => s.name?.toLowerCase().includes(toSearch.toLowerCase())
    );

    return (
        <>
            {alert && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md rounded-lg border-l-4 border-green-500 bg-green-100 px-4 py-3 text-green-800 shadow-md transition-all duration-300 ease-in-out animate-fade-in">
                    {alert}
                </div>
            )}
            <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-center">

                <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 drop-shadow mb-8">
                    Bem-vindo ao <span className="text-gray-900 dark:text-white">WorkBond</span>!
                </h2>

                <div className="flex justify-center mb-8">
                    <input
                        type="search"
                        placeholder="Como podemos ajudar?"
                        onChange={(e) => setToSearch(e.target.value)}
                        className="w-full max-w-md p-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none"
                    />
                    <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700">
                        🔍
                    </button>
                </div>

                {toSearch.length >= 3 && (
                    <div className="mb-4 text-left max-w-md mx-auto bg-white dark:bg-gray-800 p-4 rounded shadow">
                        <ul>
                            {filterServicos.length > 0 ? filterServicos.map((servico, i) => (
                                <li key={i} className="hover:underline">
                                    <Link to="/Request" state={{ nomeServico: servico.name }}>
                                        {servico.name}
                                    </Link>
                                </li>
                            )) : <li>Nenhum serviço encontrado</li>}
                        </ul>
                    </div>
                )}

                <h3 className="text-2xl font-semibold mb-4 dark:text-white" >Serviços Populares</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center px-20">
                    {ServicosPopulares.map((servico, i) => (
                        <div
                            key={i}
                            onClick={() => handleShow(servico)}
                            className="cursor-pointer bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition"
                        >
                            <img src={servico.imagem} alt={servico.nome} className="h-20 mx-auto mb-4" />
                            <strong className="block text-lg text-gray-800 dark:text-white">{servico.nome}</strong>
                            <span className="text-blue-500 hover:underline">Ver serviço →</span>
                        </div>
                    ))}
                </div>

                {/* MODAL */}
                {show && (
                    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50 flex items-center justify-center">
                        <div className="bg-white dark:bg-gray-700 rounded-lg w-full max-w-md p-6 shadow-lg relative">
                            <div className="flex items-center justify-between border-b pb-4 dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {servicoSelecionado?.nome}
                                </h3>
                                <button
                                    className="text-gray-400 hover:text-red-500 text-xl"
                                    onClick={handleClose}
                                >
                                    ×
                                </button>
                            </div>

                            <div className="py-4 text-left">
                                <p className="text-gray-700 dark:text-gray-300 mb-2">
                                    Funcionários nesta categoria: <strong>{servicosFiltrados.length}</strong>
                                </p>
                                <ul className="list-disc ml-5 space-y-1 text-gray-600 dark:text-gray-300">
                                    {servicosFiltrados.map((s, idx) => (
                                        <Link key={idx} to="/Request" state={{ nomeServico: s.name }}>
                                            <li>
                                                <input type="radio" id="job-3" name="job" value="job-3" className="hidden peer" />
                                                <label className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                                                    <div className="block">
                                                        <div className="w-full text-lg font-semibold">{s.name}</div>
                                                    </div>
                                                    <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"></svg>
                                                </label>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex justify-end gap-2 pt-4">

                                <button
                                    onClick={handleClose}
                                    className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ServicosPopulares;