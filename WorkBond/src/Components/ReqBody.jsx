import './ReqBody.css'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Especialistas from '../Data/Especialistas.json';


function ReqBody() {
    const [userStep, setUserStep] = useState(1)
    const location = useLocation();
    const navigate = useNavigate();
    const nomeServico = location.state?.nomeServico;
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('');
    const [morada, setMorada] = useState('');
    const [moradaError, setMoradaError] = useState('');
    const [contactoTipo, setContactoTipo] = useState('');
    const [contactoValor, setContactoValor] = useState('');
    const [contactoError, setContactoError] = useState('');
    const [DescricaoError, setDescricaoError] = useState('');
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        if (!nomeServico) {
            navigate('/');
        }
    }, [nomeServico, navigate]);

    const filterEspecialistas = nomeServico
        ? Especialistas.filter(
            especialista =>
                especialista.especialidade &&
                especialista.especialidade.toLowerCase().includes(nomeServico.toLowerCase())
        )
        : [];
    const handleSubmit = () => {
        var error = false;
        if (userStep == 1) {
            if (!name.trim()) {
                setNameError('O nome é obrigatório');
                error = true;
            }
            if (!morada) {
                setMoradaError('A morada é obrigatória');
                error = true;
            }
            if (!contactoTipo) {
                setContactoError('O contacto é obrigatório');
                error = true;
            }
            if (contactoTipo === "telefone") {
                const phoneRegex = /^[0-9]{9}$/;
                if (!phoneRegex.test(contactoValor)) {
                    setContactoError('Número de telefone inválido (deve ter 9 dígitos).');
                    error = true;
                }
            } else if (contactoTipo === "email") {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(contactoValor)) {
                    setContactoError('Email inválido.');
                    error = true;
                }

            }

        }
        if (userStep == 2) {
            if (!descricao) {
                setDescricaoError('A descrição é obrigatória')
                error = true;
            }
        }
        if (!error) {
            setUserStep(userStep + 1)

        }



    }

    return (
        <div className="multi-step-container">
            {/* Sidebar de passos */}
            <aside className="steps-sidebar">
                <div className="step active">

                    <div>
                        <strong>Step 1</strong>
                        <p>Insert your info</p>
                    </div>
                    <span className="circle">1</span>
                </div>
                {userStep > 1 ? <div className="step active">

                    <div>
                        <strong>Step 2</strong>
                        <p>Problema {nomeServico}</p>
                    </div>
                    <span className="circle">2</span>
                </div> : <div className="step">

                    <div>
                        <strong>Step 2</strong>
                        <p>Problema {nomeServico}</p>
                    </div>
                    <span className="circle">2</span>
                </div>}
                {userStep > 2 ? <div className="step active">

                    <div>
                        <strong>Step 3</strong>
                        <p>Procurar Profissional</p>
                    </div>
                    <span className="circle">3</span>
                </div> : <div className="step">

                    <div>
                        <strong>Step 3</strong>
                        <p>Procurar Profissional</p>
                    </div>
                    <span className="circle">3</span>
                </div>}
                {userStep == 3 ? <div className='buttonsJoin'>
                    <button onClick={() => { if (userStep > 1) setUserStep(userStep - 1) }}> → Back Step</button>
                    <Link to='/'><button > → Submit</button></Link>

                </div> : <div className='buttonsJoin'>

                    <button onClick={() => { if (userStep > 1) setUserStep(userStep - 1) }}> → Back Step</button>
                    <button onClick={(e) => handleSubmit()}> Next Step →</button>
                </div>}

            </aside>

            {/* Conteúdo central */}
            <main className="step-content">
                <h3>Complete the following fields</h3>

                {/* Tabs */}
                {/* Caso 1  */}
                {userStep == 1 && <><nav className="tabs">
                    <button className="active">Personal Info</button>
                    <button>Problem</button>
                    <button>Procurar profissional</button>
                </nav>

                    {/* Formulário */}
                    <section className="form-card">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="nome">Nome</label>
                                <input id="nome" placeholder="Name" value={name} onChange={(e) => {
                                    setName(e.target.value);
                                    setNameError('');
                                }} />
                                {nameError && <small className="error">{nameError}</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="morada">Morada</label>
                                <select
                                    value={morada}
                                    onChange={(e) => {
                                        setMorada(e.target.value);
                                        setMoradaError('');
                                    }}
                                >
                                    <option value="" disabled>Select an option...</option>
                                    <option value="lisboa">Lisboa</option>
                                    <option value="porto">Porto</option>
                                    <option value="coimbra">Coimbra</option>
                                </select>
                                {moradaError && <small className="error">{moradaError}</small>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="contacto-tipo">Tipo de Contacto</label>
                                <select
                                    id="contacto-tipo"
                                    value={contactoTipo}
                                    onChange={(e) => {
                                        setContactoTipo(e.target.value);
                                        setContactoValor('');
                                        setContactoError('');
                                    }}
                                >
                                    <option value="" disabled>Seleciona uma opção...</option>
                                    <option value="telefone">Telefone</option>
                                    <option value="email">Email</option>
                                </select>
                                {contactoError && !contactoValor && <small className="error">{contactoError}</small>}
                            </div>

                            {contactoTipo && (
                                <div className="form-group">
                                    <label htmlFor="contacto">{contactoTipo === 'telefone' ? 'Número de Telemóvel' : 'Email'}</label>
                                    <input
                                        id="contacto"
                                        type={contactoTipo === 'email' ? 'email' : 'tel'}
                                        placeholder={contactoTipo === 'email' ? 'exemplo@email.com' : '912345678'}
                                        value={contactoValor}
                                        onChange={(e) => {
                                            setContactoValor(e.target.value);
                                            setContactoError('');
                                        }}
                                    />
                                    {contactoError && <small className="error">{contactoError}</small>}
                                </div>
                            )}
                        </div>


                        <p className="auto-fill-note">
                            Entra na conta: Preenche automaticamente com os dados
                        </p>
                    </section></>}
                {/*Caso 2*/}
                {userStep == 2 && <><nav className="tabs">
                    <button >Personal Info</button>
                    <button className="active">Problem</button>
                    <button>Procurar profissional</button>
                </nav>

                    <section className="form-card">
                        <h4>Problema </h4>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="descricao">Descrição</label>
                                <textarea id="descricao" placeholder="Write a long text here..." value={descricao}
                                    onChange={(e) => {
                                        setDescricao(e.target.value);
                                        setDescricaoError('');
                                    }} />
                                {DescricaoError && <small className="error">{DescricaoError}</small>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="disponibilidade">Disponibilidade</label>
                                <select id="disponibilidade" defaultValue="">
                                    <option value="" disabled>Select an option...</option>
                                    <option value="manha">Manhã</option>
                                    <option value="tarde">Tarde</option>
                                    <option value="noite">Noite</option>
                                </select>
                                <small>Required</small>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-upload">
                                <label htmlFor="file-upload" className="upload-button">
                                    ⬇️ Upload Files
                                </label>
                                <input id="file-upload" type="file" style={{ display: 'none' }} />
                                <p className="upload-info">Nothing selected.</p>
                            </div>
                        </div>
                    </section>
                </>}
                {/*Caso de uso3 */}
                {userStep == 3 && <><nav className="tabs">
                    <button >Personal Info</button>
                    <button >Problem</button>
                    <button className="active">Procurar profissional</button>
                </nav>
                    <section className="tabela-pedidos">
                        <table>
                            <thead>
                                <tr>
                                    <th>Pessoa</th>
                                    <th>Especialidade</th>
                                    <th>Preço</th>
                                    <th>Avaliação</th>
                                    <th>Área</th>
                                    <th>Inf</th>
                                    <th>Enviar pedido</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterEspecialistas.map((especialista, index) => (
                                    <tr key={index}>
                                        <td>{especialista.pessoa}</td>
                                        <td><span className="tag">{especialista.especialidade}</span></td>
                                        <td><span className="price">{especialista.preco}</span></td>
                                        {especialista.avaliacao < 3 ? <td><span className="rating bad">{especialista.avaliacao}</span></td> : <td><span className="rating good">{especialista.avaliacao}</span></td>}
                                        <td><span className="area">{especialista.area}</span></td>
                                        <td><span className="tag neutral">*</span></td>
                                        <td>
                                            <button className="send-button" title="Enviar pedido">
                                                <i className="fab fa-telegram-plane"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="6"><strong>Enviar para todos</strong></td>
                                    <td>
                                        <button className="send-button" title="Enviar pedido">
                                            <i className="fab fa-telegram-plane"></i>
                                        </button>
                                    </td>
                                </tr>


                            </tfoot>
                        </table>
                    </section></>}



            </main>
        </div>
    );


}
export default ReqBody;