import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Especialistas from '../Data/Especialistas.json'

function ReqBody() {
    const [userStep, setUserStep] = useState(1)
    const location = useLocation()
    const navigate = useNavigate()
    const nomeServico = location.state?.nomeServico
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [morada, setMorada] = useState('')
    const [moradaError, setMoradaError] = useState('')
    const [contactoTipo, setContactoTipo] = useState('')
    const [contactoValor, setContactoValor] = useState('')
    const [contactoError, setContactoError] = useState('')
    const [DescricaoError, setDescricaoError] = useState('')
    const [descricao, setDescricao] = useState('')
    const [selectedEspecialistas, setSelectedEspecialistas] = useState({});


    useEffect(() => {
        if (!nomeServico) navigate('/')
    }, [nomeServico, navigate])

    const filterEspecialistas = nomeServico
        ? Especialistas.filter(e =>
            e.especialidade?.toLowerCase().includes(nomeServico.toLowerCase())
        )
        : []

    const handleSubmit = () => {
        // formulario checking 
        let error = false
        if (userStep === 1) {
            if (!name.trim()) {
                setNameError('O nome é obrigatório')
                error = true
            }
            if (!morada) {
                setMoradaError('A morada é obrigatória')
                error = true
            }
            if (!contactoTipo) {
                setContactoError('O contacto é obrigatório')
                error = true
            }
            if (contactoTipo === 'telefone') {
                const phoneRegex = /^[0-9]{9}$/
                if (!phoneRegex.test(contactoValor)) {
                    setContactoError('Número de telefone inválido.')
                    error = true
                }
            } else if (contactoTipo === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(contactoValor)) {
                    setContactoError('Email inválido.')
                    error = true
                }
            }
        }
        if (userStep === 2) {
            if (!descricao) {
                setDescricaoError('A descrição é obrigatória')
                error = true
            }
        }
        if (!error) setUserStep(userStep + 1)
    }
    const toggleEspecialista = (id) => {
        // ativar e desativar especialistas
        setSelectedEspecialistas((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleSend = () => {
        console.log(typeof (selectedEspecialistas))
        var t = selectedEspecialistas;
        // vai por cada especialista selecionado e guarda na localStorage

        Object.keys(selectedEspecialistas).forEach((esp) => {
            if (selectedEspecialistas[esp])
                localStorage.setItem(
                    'Send' + esp,
                    JSON.stringify({
                        Id: esp,
                        Name: name,
                        Morada: morada,
                        ContactTipo: contactoTipo,
                        Contact: contactoValor,
                        Descricao: descricao
                    })
                );
        })
        navigate('/', {
            state: { alerta: 'Pedido submetido com sucesso!' }
        });

    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
            <aside className="w-full lg:w-1/4 p-4 space-y-4">
                {[1, 2, 3].map(step => (
                    <div
                        key={step}
                        className={`flex justify-between items-center p-4 rounded-lg border ${userStep >= step
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                            }`}
                    >
                        <div>
                            <strong>Step {step}</strong>
                            <p className="text-sm">
                                {step === 1 && 'Insert your info'}
                                {step === 2 && `Problema ${nomeServico}`}
                                {step === 3 && 'Procurar Profissional'}
                            </p>
                        </div>
                        <span className="w-8 h-8 flex items-center justify-center rounded-full border bg-white text-black dark:text-black">
                            {step}
                        </span>
                    </div>
                ))}

                <div className="flex gap-2 justify-between">
                    {userStep > 1 && (
                        <button
                            onClick={() => setUserStep(userStep - 1)}
                            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400 dark:hover:bg-gray-500"
                        >
                            ← Back
                        </button>
                    )}
                    {userStep === 3 ? (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={(e) => handleSend()}>
                            Enviar
                        </button>

                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Next →
                        </button>
                    )}
                </div>
            </aside>

            <main className="w-full lg:w-3/4 p-4">
                <h3 className="text-2xl font-bold mb-4">Complete the following fields</h3>

                <nav className="flex space-x-2 mb-4">
                    <button className={`px-4 py-2 rounded ${userStep === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Personal Info</button>
                    <button className={`px-4 py-2 rounded ${userStep === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Problem</button>
                    <button className={`px-4 py-2 rounded ${userStep === 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Procurar Profissional</button>
                </nav>

                {userStep === 1 && (
                    <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Nome</label>
                                <input
                                    className="w-full mt-1 p-2 rounded border dark:bg-gray-900 dark:border-gray-700"
                                    value={name}
                                    onChange={e => {
                                        setName(e.target.value)
                                        setNameError('')
                                    }}
                                />
                                {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Morada</label>
                                <select
                                    className="w-full mt-1 p-2 rounded border dark:bg-gray-900 dark:border-gray-700"
                                    value={morada}
                                    onChange={e => {
                                        setMorada(e.target.value)
                                        setMoradaError('')
                                    }}
                                >
                                    <option value="" disabled>Seleciona...</option>
                                    <option value="lisboa">Lisboa</option>
                                    <option value="porto">Porto</option>
                                    <option value="coimbra">Coimbra</option>
                                </select>
                                {moradaError && <p className="text-red-500 text-sm">{moradaError}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Tipo de Contacto</label>
                                <select
                                    className="w-full mt-1 p-2 rounded border dark:bg-gray-900 dark:border-gray-700"
                                    value={contactoTipo}
                                    onChange={e => {
                                        setContactoTipo(e.target.value)
                                        setContactoValor('')
                                        setContactoError('')
                                    }}
                                >
                                    <option value="" disabled>Seleciona...</option>
                                    <option value="telefone">Telefone</option>
                                    <option value="email">Email</option>
                                </select>
                            </div>
                            {contactoTipo && (
                                <div>
                                    <label className="block text-sm font-medium">{contactoTipo === 'telefone' ? 'Número de Telemóvel' : 'Email'}</label>
                                    <input
                                        type={contactoTipo === 'email' ? 'email' : 'tel'}
                                        className="w-full mt-1 p-2 rounded border dark:bg-gray-900 dark:border-gray-700"
                                        value={contactoValor}
                                        onChange={e => {
                                            setContactoValor(e.target.value)
                                            setContactoError('')
                                        }}
                                    />
                                    {contactoError && <p className="text-red-500 text-sm">{contactoError}</p>}
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {userStep === 2 && (
                    <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Descrição</label>
                            <textarea
                                className="w-full mt-1 p-2 rounded border dark:bg-gray-900 dark:border-gray-700"
                                value={descricao}
                                onChange={e => {
                                    setDescricao(e.target.value)
                                    setDescricaoError('')
                                }}
                            />
                            {DescricaoError && <p className="text-red-500 text-sm">{DescricaoError}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Disponibilidade</label>
                            <select className="w-full mt-1 p-2 rounded border dark:bg-gray-900 dark:border-gray-700" defaultValue="">
                                <option value="" disabled>Seleciona...</option>
                                <option value="manha">Manhã</option>
                                <option value="tarde">Tarde</option>
                                <option value="noite">Noite</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Upload de ficheiros</label>
                            <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                        </div>
                    </section>
                )}

                {userStep === 3 && (
                    <section className="overflow-x-auto">
                        <table className="min-w-full table-auto text-sm text-left mt-4 bg-white dark:bg-gray-800 shadow-md rounded overflow-hidden">
                            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white">
                                <tr>
                                    <th className="px-4 py-2">Pessoa</th>
                                    <th className="px-4 py-2">Especialidade</th>
                                    <th className="px-4 py-2">Preço</th>
                                    <th className="px-4 py-2">Avaliação</th>
                                    <th className="px-4 py-2">Área</th>
                                    <th className="px-4 py-2">Inf</th>
                                    <th className="px-4 py-2">Pedido</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterEspecialistas.map((esp, i) => (
                                    < tr key={i} className="border-t dark:border-gray-700" >
                                        <td className="px-4 py-2">{esp.pessoa}</td>
                                        <td className="px-4 py-2">{esp.especialidade}</td>
                                        <td className="px-4 py-2">{esp.preco}€</td>
                                        <td className={`px-4 py-2 ${esp.avaliacao < 3 ? 'text-red-500' : 'text-green-500'}`}>{esp.avaliacao}</td>
                                        <td className="px-4 py-2">{esp.area}</td>
                                        <td className="px-4 py-2">-</td>
                                        <td className="px-4 py-2">
                                            <button
                                                className={`text-lg ${selectedEspecialistas[esp.id] ? 'text-green-600' : 'text-gray-400'} hover:scale-110 transition`}
                                                onClick={() => toggleEspecialista(esp.id)}
                                            >
                                                {selectedEspecialistas[esp.id] ? '✅' : '❌'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                <tr className="border-t dark:border-gray-700">
                                    <td className="px-4 py-2">Todos</td>
                                    <td className="px-4 py-2">{nomeServico}</td>
                                    <td className="px-4 py-2"> €€€</td>
                                    <td className={`px-4 py-2    'text-green-500'`}>.</td>
                                    <td className="px-4 py-2">.</td>
                                    <td className="px-4 py-2">.</td>
                                    <td className="px-4 py-2">
                                        <button className="text-blue-600 hover:underline">📩</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                )}
            </main>
        </div >
    )
}

export default ReqBody
