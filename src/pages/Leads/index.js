import React from "react";
import logo from "../imagens/logo.jpg";
import Modal from "react-modal";
import Criarlead from "./criarlead"
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'



const customStyles = {
    content:{
        top: '10%',
        left: '23%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate (-50%, -50%)',
    }
}

Modal.setAppElement('#root');


const Page = () => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(){
        setIsOpen (true);
    }

    

    function closeModal(){
        setIsOpen(false);
    }

     

    return (
        <div id="telaLead">

            <img src={logo} className="logoLeads" />
            <h3>Painel de Leads</h3>
            
            <div className="clear"/>



            <button 
                onClick={openModal} 
                id="botaoNovaLead"
            >Nova Lead (+)
            </button>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <Criarlead/>
  
            </Modal>


            
            <div id="tabela">
                    <table border="3px" className="tabelaLead">
                        <thead>
                            <tr className="cabecarioTabela">
                                <th>Cliente em Potencial</th>
                                <th>Dados Confirmados</th>
                                <th>Reuniões Agendadas</th>
                            </tr>
                        </thead>

                        <tbody id="tbody" className="tbodyTeste">

                        </tbody>
                    </table>
                </div>

        </div>
    )
}

export default Page;