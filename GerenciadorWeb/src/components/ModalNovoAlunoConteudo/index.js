import React,{useState} from "react";
import {Container, Conteudo, Logo, BotaoAtualizar} from './styled'
import api from "../../apia";
import InputMask from 'react-input-mask'


export default ({ setModalStatus }) =>{
    const[nome, setNome] = useState('')
    const[idade, setIdade] = useState('')
    const[cpf, setCpf] = useState('')
    const[telefone, setTelefone] = useState('')
    const[email, setEmail] = useState('')
    const[nomeFiltrado, setNomeFiltrado] = useState(false)
    const[cpfFiltrado, setCpfFiltrado] = useState(false)
    const[telefoneFiltrado, setTelefoneFiltrado] = useState(false)
    const[emailFiltrado, setEmailFiltrado] = useState(false)




    function handleNome(e) {
        setNome(e.target.value)
        setNomeFiltrado(nome.includes(" "))
    }
    function handleIdade(e) {
        setIdade(e.target.value)
    }
    function handleCpf(e) {
        setCpf(e.target.value)
        setCpfFiltrado(cpf.includes("-")&& cpf.includes("_"))
    }
    function handleTelefone(e) {
        setTelefone(e.target.value)
        setTelefoneFiltrado(telefone.includes("-")&& telefone.includes("_"))
    }
    function handleEmail(e) {
        setEmail(e.target.value)
        setEmailFiltrado(email.includes("@"))
    }






    const [status, setStatus] = useState({
        type:'',
        mensagem:''
    });
    
    function validar(){
        if(!nome) return setStatus({
            type: 'error',
            mensagem:'O campo nome é obrigatorio'
        })
        if(!nomeFiltrado) return setStatus({
            type: 'error',
            mensagem:'Por favor informe o sobrenome'
        })
        if(!idade) return setStatus({
            type: 'error',
            mensagem:'O campo idade é obrigatorio'
        })
        if(!cpf) return setStatus({
            type: 'error',
            mensagem:'O campo cpf é obrigatorio'
        })
        if(cpfFiltrado === true) return setStatus({
            type: 'error',
            mensagem:'informe um cpf valido'
        })
        if(!telefone) return setStatus({
            type: 'error',
            mensagem:'O campo telefone é obrigatorio'
        })
        if(telefoneFiltrado === true) return setStatus({
            type: 'error',
            mensagem:'informe um telefone valido'
        })
        if(!email) return setStatus({
            type: 'error',
            mensagem:'O campo email é obrigatorio'
        })
        if(emailFiltrado === false) return setStatus({
            type: 'error',
            mensagem:'informe um email valido'
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
                "nome_aluno": nome,
                "idade":idade,
                "cpf": cpf,
                "telefone":telefone,
                "email": email
        };
            api.post(`/aluno`, novo);
    
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
                <h1>Criação Novo Aluno</h1>
                {status.type === 'sucesso' ? <p style={{color: "green"}}>{status.mensagem}</p>:""}
                {status.type === 'error' ? <p style={{color: "#ff0000"}}>{status.mensagem}</p>:""}
                <label htmlFor="nome">NOME</label>
                <input id = "id" type= "text" placeholder = "Nome do aluno" value = {nome} onChange={handleNome}/>
                <label htmlFor="IDADE">IDADE</label>
                <input id = "idade" type= "number" placeholder = "Idade do Aluno" value = {idade} onChange={handleIdade}/>
                <label htmlFor="CPF">CPF</label>
                <InputMask mask ="999.999.999-99" id = "cpf" type= "text" placeholder = "Cpf do Aluno" value = {cpf} onChange={handleCpf}/>
                <label htmlFor="TELEFONE">TELEFONE</label>
                <InputMask mask ="(99)9999-99999" id = "telefone" type= "text" placeholder = "Telefone do aluno" value = {telefone} onChange={handleTelefone} />
                <label htmlFor="EMAIL">EMAIL</label>
                <input id = "email" type= "text" placeholder = "Email do aluno" value = {email} onChange={handleEmail}/>
                </Conteudo>
                <footer>
                <BotaoAtualizar onClick={handleSubmit} >Criar Novo Aluno</BotaoAtualizar>
                </footer>
        </Container>

    );




}
