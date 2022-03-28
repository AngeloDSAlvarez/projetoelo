import React from "react";

import logo from "../imagens/logo.jpg"

//ARMAZENAMENTO NO LOCAL
const inserirDataLocal = () => {

    //RECUPERAÇÃO DOS DADOS DAS CAIXAS DE TEXTO
    var user = document.getElementById('usuario').value
    var senha = document.getElementById('senha').value
    var senhaConfirmacao = document.getElementById('senhaConfirmacao').value
  
    //DECLARAÇÃO DE VALIDAÇÃO DE SENHA
    var validaNumero = /([0-9])/;
      var validaAlfa = /([a-zA-Z])/;
      var validaEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
  
    //VALIDAÇÃO DOS REQUISITOS DA SENHA
    if (user.length<6){
      //RETORNA SE TIVER MENOS DE 6 DÍGITOS
      alert('Usuario precisa ter pelo menos 6 dígitos!') 
    }else if (senha.length<8){ 
        //RETORNA SE A SENHA TIVER MENOS DE 8 DÍGITOS
        alert('A senha precisa ter 8 dígitos') 
      }else if(senha!==senhaConfirmacao){
        //RETORNA SE AS SENHAS NÃO FOREM IGUAIS
        alert('As senhas não são iguais')
      }else if(validaNumero.test(senha) && validaAlfa.test(senha) && validaEspeciais.test(senha)){ //VALIDÃO REQUISITOS DA SENHA
        //INSERIR DADOS NO LOCAL STORAGE
        localStorage.setItem(user, user)
        localStorage.setItem(senha, senha)
        window.location.href = "../leads";
      }else{
        //RETORNA SE A SENHA NÃO TEM OS REQUISITOS
        alert('A senha precisa ter no minimo: 1 letra, 1 número e 1 caracter especial!')
      }
  }

const Page = () => {
    return (
        <div id='telaLogin'>
            <img src={logo} className="logoPrincipal"/>

            <div id='espacoLogin'>
            
                <div className='caixasLogin'>  
                <p>Usuário *</p>
                <input className='inputLogin' type={'text'} placeholder='Usuário' id='usuario'></input>
                </div>

                <div className='caixasLogin'>
                <p>Senha *</p>
                <input className='inputLogin' type={'password'} placeholder='********' id='senha'></input>
                </div>

                <div className='caixasLogin'>
                <p>Confirme sua senha *</p>
                <input className='inputLogin' type={'password'} placeholder='********' id='senhaConfirmacao'></input>
                </div>

                <div>
                <button onClick={inserirDataLocal}   className='caixaBotao'>REGISTRAR</button>
                </div>


            


            </div>
        </div>
    )
}

export default Page;