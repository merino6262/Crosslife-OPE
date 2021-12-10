import React,{useState} from "react";
import {Container, Conteudo, Logo, BotaoAtualizar} from './styled'
import api from "../../apia";
import InputMask from 'react-input-mask'


export default ({ data, target, setModalStatus }) =>{

    const[matriculaAtiva, setMatriculaAtiva] = useState('')
    const[tipoMatricula, setTipoMatricula] = useState('')
    const[dataFim, setDataFim] = useState('')
    const[dataFimFiltrada, setDataFimFiltrada] = useState(false)

    function handleMatriculaAtiva(e) {
        setMatriculaAtiva(e.target.value)
    }
    function handleTipoMatricula(e) {
        setTipoMatricula(e.target.value)
    }

    function handleDataFim(e) {
        setDataFim(e.target.value)
    }
    










    const listaFiltrada = data.filter( valor => String(valor.id_matricula).includes(target))

    const idMatricula = listaFiltrada.map((valor)=>(
        valor.id_matricula
    ))




    const [status, setStatus] = useState({
        type:'',
        mensagem:''
    });
    
    function validar(){
        console.log(dataFim.includes('_'))
        if(!matriculaAtiva) return setStatus({
            type: 'error',
            mensagem:'O campo matricula ativa é obrigatorio'
        })
        if(matriculaAtiva != 0 && matriculaAtiva != 1) return setStatus({
            type: 'error',
            mensagem:'informe o numero 1 para ativa ou 0 para desativada'
        })
        if(!tipoMatricula) return setStatus({
            type: 'error',
            mensagem:'O campo tipo matricula é obrigatorio'
        })
        if(tipoMatricula != 30 && tipoMatricula != 90 && tipoMatricula != 180 && tipoMatricula != 360) return setStatus({
            type: 'error',
            mensagem:'insira um tipo de matricula valida (30,90,180 ou 360)'
        })

        if(!dataFim) return setStatus({
            type: 'error',
            mensagem:'O campo data fim é obrigatorio'
        })
        if(dataFimFiltrada === true) return setStatus({
            type: 'error',
            mensagem:'Infome uma data valida'
        })

        return true;
    }
    



    function handleSubmit(e){
        console.log(dataFim)
        console.log(dataFimFiltrada)
        e.preventDefault()


        if(!validar()) return;


        const saveDataForm = true;  

        if(saveDataForm){
            setStatus({
                type: 'sucesso',
                mensagem: "Usuario cadastrado com sucesso!" 
            });
            const atualizar = {
                "matricula_ativa":matriculaAtiva,
                "tipo_matricula":tipoMatricula,
                "data_fim":dataFim
                };
                if(idMatricula){
                    api.put(`matricula/${idMatricula}`, atualizar);
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
            {listaFiltrada.map((matricula) =>(
                <Conteudo>
                <h1>Dados da matricula</h1>
                {status.type === 'sucesso' ? <p style={{color: "green"}}>{status.mensagem}</p>:""}
                {status.type === 'error' ? <p style={{color: "#ff0000"}}>{status.mensagem}</p>:""}
                <label htmlFor="ID">ID ALUNO</label>
                <input id = "ida"  type= "number" value = {matricula.id_aluno}/>
                <label htmlFor="nome">MATRICULA ATIVA</label>
                <input id = "idma" type= "number" placeholder = {matricula.matricula_ativa} value = {matriculaAtiva} onChange={handleMatriculaAtiva}/>
                <label htmlFor="IDADE">TIPO MATRICULA</label>
                <input id = "idade" type= "number" placeholder = {matricula.tipo_matricula} value = {tipoMatricula} onChange={handleTipoMatricula}/>
                <label htmlFor="CPF">DATA INICIO</label>
                <InputMask mask="9999-99-99" id = "cpf" type= "text"value = {matricula.data_inicio}/>
                <label htmlFor="TELEFONE">DATA FIM</label>
                <InputMask mask="9999-99-99" id = "telefone" type= "text" placeholder = {matricula.data_fim} value = {dataFim} onChange={handleDataFim} />
                </Conteudo>
            ))}
                <footer>
                <BotaoAtualizar onClick={handleSubmit} >atualizar </BotaoAtualizar>
                </footer>
        </Container>

    );




}
