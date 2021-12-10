import React,{useState, useEffect} from "react";
import {Container, Conteudo, Logo, BotaoAtualizar, BotaoAchar} from './styled'
import api from "../../apia";


export default ({ data, setModalStatus }) =>{
    const[id, setId] = useState("")
    const[listaId, setListaId] = useState([])
    const[isActive, setIsActive] = useState(false)
    const listaFiltrada = data.filter( valor => String(valor.id_aluno).includes(id))
    

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
                api.delete(`aluno/${id}`);
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


            {listaId.map((aluno) =>(
                <Conteudo>
                <h1>Excluir Aluno</h1>
                <label htmlFor="nome">NOME</label>
                <input id = "id" type= "text" value = {aluno.nome_aluno}/>
                <label htmlFor="IDADE">IDADE</label>
                <input id = "idade" type= "number" value = {aluno.idade}/>
                <label htmlFor="CPF">CPF</label>
                <input id = "cpf" type= "text" value = {aluno.cpf}/>
                <label htmlFor="TELEFONE">TELEFONE</label>
                <input id = "telefone" type= "text" value = {aluno.telefone}/>
                <label htmlFor="EMAIL">EMAIL</label>
                <input id = "email" type= "text" value = {aluno.email}/>
                </Conteudo>
            ))}
                <footer>
                <BotaoAtualizar onClick={handleSubmit} >excluir</BotaoAtualizar>
                </footer>
        </Container>

    );




}
