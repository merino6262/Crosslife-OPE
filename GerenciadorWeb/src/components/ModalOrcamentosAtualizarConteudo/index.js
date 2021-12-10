import React,{useState} from "react";
import {Container, Conteudo, Logo, BotaoAtualizar} from './styled'
import api from "../../apia";
import InputMask from 'react-input-mask'


export default ({ data, target, setModalStatus }) =>{

    function handleNome(e) {
        setNome(e.target.value)
    }
    function handleDespesa(e) {
        setValorDespesa(e.target.value)
    }
    function handleDataPagamento(e) {
        setDataPagamento(e.target.value)
    }
    function handleObservacao(e) {
        setObservacao(e.target.value)
    }








    const[nome, setNome] = useState('')
    const[valorDespesa, setValorDespesa] = useState('')
    const[dataPagamento, setDataPagamento] = useState('')
    const[observacao, setObservacao] = useState('')


    const listaFiltrada = data.filter( valor => String(valor.id_despesa).includes(target))
    console.log(listaFiltrada)

    const id = listaFiltrada.map((valor)=>(
        valor.id_despesa
    ))






    const [status, setStatus] = useState({
        type:'',
        mensagem:''
    });
    
    function validar(){
        if(!nome) return setStatus({
            type: 'error',
            mensagem:'O campo nome é obrigatorio'
        })
        if(!valorDespesa) return setStatus({
            type: 'error',
            mensagem:'O campo valor despesa é obrigatorio'
        })
        if(!dataPagamento) return setStatus({
            type: 'error',
            mensagem:'O campo data pagamento é obrigatorio'
        })
        if(!observacao) return setStatus({
            type: 'error',
            mensagem:'O campo observacao é obrigatorio'
        })

        return true;
    }
    



    function handleSubmit(e){
        e.preventDefault()


        if(!validar()) return;


        const saveDataForm = true;  

        if(saveDataForm){
            setStatus({
                type: 'sucesso',
                mensagem: "Usuario cadastrado com sucesso!" 
            });
            const atualizar = {
                "nome_despesa":nome,
                "valor_despesa":valorDespesa,
                "data_pagamento":dataPagamento,
                "observacao":observacao
                };
                if(id){
                    api.put(`orcamento/${id}`, atualizar);
                }
                setModalStatus(false)   
            }else{
                setStatus({
                    type:"error",
                    mensagem: "erro, o usuário nao foi cadastrado com sucesso"
                })
            }
            }

    
   
    return(
        <Container >
            <Logo src="/assets/logo_crosslife.png" /> 
            {listaFiltrada.map((orcamento) =>(
                <Conteudo>
                {status.type === 'sucesso' ? <p style={{color: "green"}}>{status.mensagem}</p>:""}
                {status.type === 'error' ? <p style={{color: "#ff0000"}}>{status.mensagem}</p>:""}
                <h1>{orcamento.nome_despesa}</h1>
                <label htmlFor="nome">NOME</label>
                <input id = "id" type= "text" placeholder = {orcamento.nome_despesa} value = {nome} onChange={handleNome}/>
                <label htmlFor="IDADE">VALOR</label>
                <input id = "idade" type= "number" placeholder = {orcamento.valor_despesa} value = {valorDespesa} onChange={handleDespesa}/>
                <label htmlFor="CPF">DATA-PAGAMENTO</label>
                <InputMask mask="9999-99-99" id = "cpf" type= "text" placeholder = {orcamento.data_pagamento} value = {dataPagamento} onChange={handleDataPagamento}/>
                <label htmlFor="TELEFONE">OBSERVAÇÃO</label>
                <input id = "telefone" type= "text" placeholder = {orcamento.observacao} value = {observacao} onChange={handleObservacao} />
                </Conteudo>
            ))}
                <footer>
                <BotaoAtualizar onClick={handleSubmit} >atualizar</BotaoAtualizar>
                </footer>
        </Container>

    );




}
