import React,{useState, useEffect} from "react";
import {Container, Conteudo, Logo, BotaoAtualizar, BotaoAchar} from './styled'
import api from "../../apia";


export default ({ data, setModalStatus }) =>{
    const[id, setId] = useState("")
    const[listaId, setListaId] = useState([])
    const[isActive, setIsActive] = useState(false)
    const listaFiltrada = data.filter( valor => String(valor.id_despesa).includes(id))
    

    function handleId(e) {
        setId(e.target.value)
    }
    function handleList(){  
        if(listaFiltrada.length === 1 ){
        setListaId(listaFiltrada)
        setIsActive(true)
        setStatus({
            type:"",
            mensagem:""
        })
        }
        if(listaFiltrada.length != 1 && !validar() )return;
    }



    const [status, setStatus] = useState({
        type:'',
        mensagem:''
    });
    
    function validar(){
        if(listaFiltrada != 1) return setStatus({
            type: 'error',
            mensagem:'O campo id é obrigatorio'
        })
        
        return true;
    }



    function handleSubmit(e){
        e.preventDefault()


        const saveDataForm = true;  

        if(saveDataForm){
            setStatus({
                type: 'sucesso',
                mensagem: "" 
            });
            
            if(id){
                api.delete(`orcamento/${id}`);
            }
            setModalStatus(false)   
            }else{
                setStatus({
                    type:"error",
                    mensagem: "erro, o usuário nao foi encontrado"
                })
            }
            }
    

   
    return(
        <Container >
            <Logo src="/assets/logo_crosslife.png" /> 
            <input id = "id" placeholder = "Digite um id valido"  type= "number" value = {id} onChange={handleId}></input>

                {status.type === 'sucesso' ? <p style={{color: "green"}}></p>:""}
                {status.type === 'error' ? <p style={{color: "#ff0000"}}>{status.mensagem}</p>:""}

            <BotaoAchar active = {isActive} onClick= {handleList}>Encontrar</BotaoAchar>


            {listaId.map((orcamento) =>(
                <Conteudo>
                <h1>Excluir Orçamento</h1>
                <label htmlFor="nome">NOME DA DESPESA</label>
                <input id = "id" type= "text" value = {orcamento.nome_despesa}/>
                <label htmlFor="IDADE">VALOR DA DESPESA</label>
                <input id = "idade" type= "number" value = {orcamento.valor_despesa}/>
                <label htmlFor="CPF">DATA DE PAGAMENTO</label>
                <input id = "cpf" type= "text" value = {orcamento.data_pagamento}/>
                <label htmlFor="TELEFONE">OBSERVAÇÃO</label>
                <input id = "telefone" type= "text" value = {orcamento.observacao}/>
                </Conteudo>
            ))}
                <footer>
                <BotaoAtualizar onClick={handleSubmit} >excluir</BotaoAtualizar>
                </footer>
        </Container>

    );




}
