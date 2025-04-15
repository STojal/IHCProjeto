import './ServicosPopulares.css';
import { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Servicos from '../Data/Servicos.json';
import { Link } from 'react-router-dom';

function ServicosPopulares() {
    const [toSearch, setToSearch] = useState('')
    const ServicosPopulares = [
        {
            nome: 'Limpeza Doméstica',
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
    const [show, setShow] = useState(false);
    const [servicoSelecionado, setServicoSelecionado] = useState(null);

    const handleClose = () => {
        setShow(false);
        setServicoSelecionado(null);
    };
    var servicoesFilteres = [];
    const handleShow = (servico) => {
        servicoesFilteres = Servicos.filter(
            servicochosse => servicochosse.name && console.log(servicochosse.name.toLowerCase()))
        console.log(Servicos)
        setServicoSelecionado(servico);
        setShow(true);
    };


    const filterServicos = Servicos.filter(
        servico =>
            servico.name &&
            servico.name.toLowerCase().includes(toSearch.toLowerCase())
    );



    return (
        <>
            <div className='ContainerInfo'>
                <h2>Bem-vindo ao WorkBond!</h2>
                <form>
                    <div className="search-container">
                        <input className='SearchBar' type="search" placeholder="Como podemos Ajudar" aria-label="Search" onChange={(e) => {
                            setToSearch(e.target.value);
                        }} />
                        <Button type="submit" className="BttSubmit">
                            <i className="fas fa-search"></i>

                        </Button>

                        {toSearch.length >= 3 && (
                            <div className="dropdown-suggestions">
                                <ul>

                                    {filterServicos.length > 0 ? filterServicos.map((servico, index) => (
                                        <Link className='links' to="/Request" key={index} state={{ nomeServico: servico.name }}
                                        > <li key={index}>{servico.name}</li></Link>
                                    )) : <li>Nothing found</li>}

                                </ul>
                            </div>)}
                    </div>

                </form>


                <div className="servicos-container" >
                    <h2>Serviços Populares</h2>
                    <div className="servicos-cards">
                        {ServicosPopulares.map((servico, index) => (
                            <div className="servico-card" key={index} onClick={() => handleShow(servico)}>
                                <img src={servico.imagem} alt={servico.nome} />
                                <div className="servico-info">
                                    <strong>{servico.nome}</strong>
                                    <a href="#">Ver serviço →</a>
                                </div>
                            </div >



                        ))}
                        {/* Modal único */}
                        {servicoSelecionado && (
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{servicoSelecionado.nome}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h6>Numero de funcionarios nesta categoria:</h6>
                                    <p>{servicoesFilteres.length}</p>

                                    <h6>Mais informação sobre: {servicoSelecionado.nome}</h6>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>Fechar</Button>
                                    <Button variant="primary" onClick={handleClose}>Confirmar</Button>
                                </Modal.Footer>
                            </Modal>
                        )}
                    </div>
                </div>
            </div>

        </>
    );

}


export default ServicosPopulares;