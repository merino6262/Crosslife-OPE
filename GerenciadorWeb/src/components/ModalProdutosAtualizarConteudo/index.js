import React,{useState} from "react";
import {Container, Conteudo, Logo, BotaoAtualizar} from './styled'
import api from "../../apia";


export default ({ data, target, setModalStatus }) =>{

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


    const listaFiltrada = data.filter( valor => String(valor.id_produto).includes(target))
    console.log(listaFiltrada)

    const id = listaFiltrada.map((valor)=>(
        valor.id_produto
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
            const atualizar = {
                "produto":nome,
                "qtd":quantidade,
                "observacao":observacao
            };
            if(id){
                api.put(`produto/${id}`, atualizar);
            }
            setModalStatus(false);  
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
            {listaFiltrada.map((produto) =>(
                <Conteudo>
                <h1>{produto.produto}</h1>
                {status.type === 'sucesso' ? <p style={{color: "green"}}>{status.mensagem}</p>:""}
                {status.type === 'error' ? <p style={{color: "#ff0000"}}>{status.mensagem}</p>:""}
                <label htmlFor="nome">PRODUTO</label>
                <input id = "id" type= "text" placeholder = {produto.produto} value = {nome} onChange={handleNome}/>
                <label htmlFor="IDADE">QUANTIDADE</label>
                <input id = "idade" type= "number" placeholder = {produto.qtd} value = {quantidade} onChange={handleQuantidade}/>
                <label htmlFor="CPF">OBSERVAÇÃO</label>
                <input id = "telefone" type= "text" placeholder = {produto.observacao} value = {observacao} onChange={handleObservacao} />
                </Conteudo>
            ))}
                <footer>
                <BotaoAtualizar onClick={handleSubmit} >atualizar</BotaoAtualizar>
                </footer>
        </Container>

    );




}
