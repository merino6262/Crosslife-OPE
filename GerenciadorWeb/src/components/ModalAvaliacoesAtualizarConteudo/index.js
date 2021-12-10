import React,{useState} from "react";
import {Container, Conteudo, Logo, BotaoAtualizar} from './styled'
import api from "../../apia";


export default ({ data, target, setModalStatus }) =>{
    function handleGorduraVisceral(e) {
        setGorduraVisceral(e.target.value)

    }
    function handleMassaGorda(e) {
        setMassaGorda(e.target.value)
    }
    function handleMassaMagra(e) {
        setMassaMagra(e.target.value)
    }
    function handleMassaMuscular(e) {
        setMassaMuscular(e.target.value)
    }
    function handleHidratacao(e) {
        setHidratacao(e.target.value)
    }
    function handleDensidadeOssea(e) {
        setDensidadeOssea(e.target.value)
    }

    function handleMetabolismoBasal(e){
        setMetabolismoBasal(e.target.value)

    }







    
    const[massaGorda, setMassaGorda] = useState('')
    const[massaMagra, setMassaMagra] = useState('')
    const[massaMuscular, setMassaMuscular] = useState('')
    const[hidratacao, setHidratacao] = useState('')
    const[densidadeOssea, setDensidadeOssea] = useState('')
    const[gorduraVisceral, setGorduraVisceral] = useState('')
    const[metabolismoBasal, setMetabolismoBasal] = useState('')


    const listaFiltrada = data.filter( valor => String(valor.id_avaliacao).includes(target) )

    const idAvaliacao = listaFiltrada.map((valor)=>(
        valor.id_avaliacao
    ))
    
    console.log(idAvaliacao)










    const [status, setStatus] = useState({
        type:'',
        mensagem:''
    });
    
    function validar(){
        if(!massaGorda) return setStatus({
            type: 'error',
            mensagem:'O campo massa gorda é obrigatorio'
        })
        if(!massaMagra) return setStatus({
            type: 'error',
            mensagem:'O campo massa magra é obrigatorio'
        })
        if(!massaMuscular) return setStatus({
            type: 'error',
            mensagem:'O campo massa muscular é obrigatorio'
        })
        if(!hidratacao) return setStatus({
            type: 'error',
            mensagem:'O campo hidratacao é obrigatorio'
        })
        if(!densidadeOssea) return setStatus({
            type: 'error',
            mensagem:'O campo densidade ossea é obrigatorio'
        })
        if(!gorduraVisceral) return setStatus({
            type: 'error',
            mensagem:'O campo gordura visceral é obrigatorio'
        })
        if(!metabolismoBasal) return setStatus({
            type: 'error',
            mensagem:'O campo metabolismo basal é obrigatorio'
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
                "massa_gorda":massaGorda,
                "massa_magra":massaMagra,
                "massa_muscular":massaMuscular,
                "hidratacao":hidratacao,
                "densidade_ossea":densidadeOssea,
                "gordura_visceral":gorduraVisceral,
                "metabolismo_basal":metabolismoBasal	
            };
            if(idAvaliacao){
                api.put(`avaliacao/${idAvaliacao}`, atualizar);
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
            {listaFiltrada.map((avaliacao) =>(
                <Conteudo>
                {status.type === 'sucesso' ? <p style={{color: "green"}}>{status.mensagem}</p>:""}
                {status.type === 'error' ? <p style={{color: "#ff0000"}}>{status.mensagem}</p>:""}
                <label htmlFor="nome">MASSA GORDA</label>
                <input id = "id" type= "number" placeholder = {avaliacao.massa_gorda} value = {massaGorda} onChange={handleMassaGorda}/>
                <label htmlFor="IDADE">MASSA MAGRA</label>
                <input id = "idade" type= "number" placeholder = {avaliacao.massa_magra} value = {massaMagra} onChange={handleMassaMagra}/>
                <label htmlFor="CPF">MASSA MUSCULAR</label>
                <input id = "cpf" type= "number" placeholder = {avaliacao.massa_muscular} value = {massaMuscular} onChange={handleMassaMuscular}/>
                <label htmlFor="TELEFONE">HIDRATAÇÃO</label>
                <input id = "telefone" type= "number" placeholder = {avaliacao.hidratacao} value = {hidratacao} onChange={handleHidratacao} />
                <label htmlFor="EMAIL">DENSIDADE OSSEA</label>
                <input id = "email" type= "number" placeholder = {avaliacao.densidade_ossea} value = {densidadeOssea} onChange={handleDensidadeOssea}/>
                <label htmlFor="ID">GORDURA VISCERAL</label>
                <input id = "id" type = "number" placeholder = {avaliacao.gordura_visceral}   value = {gorduraVisceral} onChange={handleGorduraVisceral}/>
                <label htmlFor="ID">METABOLISMO BASAL</label>
                <input id = "id"  type = "number" placeholder = {avaliacao.metabolismo_basal}   value = {metabolismoBasal} onChange={handleMetabolismoBasal}/>
                </Conteudo>
                
            ))}
                <footer>
                <BotaoAtualizar onClick={handleSubmit} >atualizar</BotaoAtualizar>
                </footer>
        </Container>

    );




}
