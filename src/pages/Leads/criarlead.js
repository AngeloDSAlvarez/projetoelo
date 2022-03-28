import React from "react"; 
import logo from "../imagens/logo.jpg"

var arrayDados = new Array()
var arrayValues = new Array()
var id = 1
var dados = new Array()
//SALVAR DADOS NO 'PRODUTO'
function salvar(){
    let produto  = lerDados();

    if (validaCampos(produto)){
        adicionar(produto)
        getValues()
        listaTabela()
        arrayValues = getValues()
    }
    
    
}
var teste = 1
//ADICIONAR VALORES NO ARRAY
function adicionar(produto){
    arrayDados.push(produto);
    id++
    
}

//RECEBER DADOS DOS INPUTS
function lerDados(){
    
    let produto = {}

    produto.id = id
    produto.nome = document.getElementById('nomeLead').value
    produto.telefone = document.getElementById('telefoneLead').value
    produto.email = document.getElementById('emailLead').value
    
    localStorage.setItem(id, JSON.stringify(produto))

    return produto
}

//VALIDAR SE TODOS OS CAMPOS ESTÃO PREENCHIDOS
function validaCampos(produto){
    let msg = '';

    if(produto.nome == ''){
        msg += 'Informe o nome\n'
    }
    if(produto.telefone == ''){
        msg += 'Informe o telefone\n'
    }
    if(produto.email == ''){
        msg += 'Informe o email\n'
    }
    if(msg!= ''){
        alert(msg)
        return false
    }else{
        return true
    }
}





//LISTAR NOVA LEAD NA TABELA
function listaTabela(){
    let tbody = document.getElementById('tbody');
    
    tbody.innerText = ''

    for (let i = 0; i < arrayDados.length; i++) {
        let tr = tbody.insertRow();
        dados = JSON.parse(localStorage.getItem(i+1))

        let td_potencial = tr.insertCell() 
        let td_confirmados = tr.insertCell()
        let td_agendados = tr.insertCell()
       
        td_potencial.innerText = dados.nome + '\n' + dados.telefone + '\n' + dados.email
        
    } 
}
    
    

    function getValues() {
        let pacote = document.querySelectorAll('[name=checkOportunidades]:checked');
        let values = []
        for (var i = 0; i < pacote.length; i++) {
          // utilize o valor aqui, adicionei ao array para exemplo
          values.push(pacote[i].value);
        }
        return values
      }

const Page = () => {
    
    //SELECIONAR TODAS CHECKBOX
    function selectAll(){
        let checkOportunidades = document.getElementsByName('checkOportunidades');
        let checkOportunidadesLen = checkOportunidades.length;

        for (var x=0; x< checkOportunidadesLen; x++){
            checkOportunidades[x].checked=!checkOportunidades[x].checked
        }
    }


    
      
    return (
        <div id="divCriarLead">
                    <img src={logo} className="logoLeads"/>
                    <h3>Nova Lead</h3>
                    <div className="clear" />

                    <div id='caixasCriarLead'>
                        
                        <div className='caixasLoginLead'>  
                            <p>Nome *</p>
                            <input className='inputLogin' type={'text'} placeholder='Nome' id='nomeLead'></input>
                        </div>
                        
                        <div className='caixasLoginLead'>
                            <p>Telefone *</p>
                            <input className='inputLogin' type={'text'} placeholder='Telefone' id='telefoneLead'></input>
                        </div>

                        <div className='caixasLoginLead'>
                            <p>Email *</p>
                            <input className='inputLogin' type={'text'} placeholder='Endereço de Email' id='emailLead'></input>
                        </div>
          
                    </div>

                    <div id="caixaOportunidades">
                        <p>Oportunidades *</p>
                        <table border="1px" className="tabelaCriaLead">
                            <thead>
                                <tr>
                                    <th className="colunaCheckBox">
                                        <input 
                                        type="checkbox"
                                        onChange={selectAll}
                                        
                                        ></input>
                                    </th>
                                    <th className="colunaOportunidades">Oportunidades</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="linhaUm">
                                    <th>
                                        <input 
                                        type="checkbox"
                                        name="checkOportunidades"
                                        value="RPA"
                                        ></input>
                                    </th>
                                    <th>RPA</th>
                                </tr>
                                <tr className="linhaDois">
                                    <th>
                                        <input 
                                        type="checkbox"
                                        name="checkOportunidades"
                                        value="Produto Digital"
                                        ></input>
                                    </th>
                                    <th>Produto Digital</th>
                                </tr>
                                <tr className="linhaUm">
                                    <th>
                                        <input 
                                        type="checkbox"
                                        name="checkOportunidades"
                                        value="Analytics"
                                        ></input>
                                    </th>
                                    <th>Analytics</th>
                                </tr>
                                <tr className="linhaDois">
                                    <th>
                                        <input 
                                        type="checkbox" 
                                        name="checkOportunidades"
                                        value="BPM"
                                        ></input>
                                    </th>
                                    <th>BPM</th>
                                </tr>
                            </tbody>
                            
                        </table>

                        <button id="botaoCriarLead" onClick={salvar} >Criar Lead</button>
                    </div>
                   
                    


                </div>
    )
}

export default Page