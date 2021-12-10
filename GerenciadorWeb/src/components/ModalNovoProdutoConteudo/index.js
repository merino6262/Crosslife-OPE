import React,{useState} from "react";
import {Container, Conteudo, Logo, BotaoAtualizar} from './styled'
import api from "../../apia";


export default ({ setModalStatus }) =>{






    
    function handleNome(e) {
        setNome(e.target.value)
    }
    function handleQuantidade(e) {
        setQuantidade(e.target.value)
    }
    function handleObservacao(e) {
        setObservacao(e.target.value)
    }







    const[nome, setNome] = useState('')
    const[quantidade, setQuantidade] = useState('')
    const[observacao, setObservacao] = useState('')








    const [status, setStatus] = useState({
        type:'',
        mensagem:''
    });
    
    function validar(){
        if(!nome) return setStatus({
            type: 'error',
            mensagem:'O campo nome é obrigatorio'
        })
        if(!quantidade) return setStatus({
            type: 'error',
            mensagem:'O campo quantidade é obrigatorio'
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
            
        
            const novo = {
                "produto":nome,
                "qtd":quantidade,
                "observacao":observacao
            };
            api.post(`/produto`, novo);
    
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
                <Conteudo>
                <h1>Criação Novo Produto</h1>
                {status.type === 'sucesso' ? <p style={{color: "green"}}>{status.mensagem}</p>:""}
                {status.type === 'error' ? <p style={{color: "#ff0000"}}>{status.mensagem}</p>:""}
                <label htmlFor="nome">NOME</label>
                <input id = "id" type= "text" placeholder = "Nome do Produto" value = {nome} onChange={handleNome}/>
                <label htmlFor="IDADE">VALOR</label>
                <input id = "idade" type= "number" placeholder = "Quantidade do Produto" value = {quantidade} onChange={handleQuantidade}/>
                <label htmlFor="TELEFONE">OBSERVAÇÃO</label>
                <input id = "telefone" type= "text" placeholder = "Observação do Produto" value = {observacao} onChange={handleObservacao} />
                </Conteudo>
                <footer>
                <BotaoAtualizar onClick={handleSubmit}>Criar Novo Produto</BotaoAtualizar>
                </footer>
        </Container>

    );




}
