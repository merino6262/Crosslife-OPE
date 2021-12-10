import React,{useState, useEffect} from "react";
import { ContainerAll, ContainerTable, ContainerBotao, BotaoNovoAluno,BotaoExcluirAluno, BotaoGerarRelatorio} from './styled'
import TabelaAlunoItem from "../../components/TabelaAlunoItem"
import Modal from "../../components/Modal";
import ModalAlunosAtualizar from "../../components/ModalAlunosAtualizar";
import ModalNovoAluno from "../../components/ModalNovoAluno"
import ModalNovoAlunoConteudo from "../../components/ModalNovoAlunoConteudo"
import ModalAlunosExcluir from "../../components/ModalAlunosExcluir"
import ModalAlunosExcluirConteudo from "../../components/ModalAlunosExcluirConteudo";
import AlunosPDF from "../../Reltorios/Alunos";

import BarraBusca from "../../components/BarraBusca";

import api from "../../api";
import AvaliacaoArea from "../../components/AvaliacaoArea";




export default () => {
    const[alunos , setAlunos] = useState([]);
    const[barraPesquisa, setBarraPesquisa] = useState('');
    const[modalStatus, setModalStatus] = useState(false);
    const[modalData, setModalData]= useState(null);
    const[modalNovoAluno, setModalNovoAluno] = useState(false);
    const[modalExcluirAluno, setModalExcluirAluno] = useState(false);




    const handleAlunoClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }
    const handleModal = () => {
        setModalNovoAluno(true);
    }

    const handleModalExcluir = () =>{
        setModalExcluirAluno(true);

    }
    



    const pegarAlunos = async () =>{
        const cat = await api.pegarAlunos();
        setAlunos(cat); 

    }

    useEffect(()=>{
        pegarAlunos();

    },[]);


    function search(rows) {
        const columns = rows[0] && Object.keys(rows[0]);
        return rows.filter(
            (row) =>
            columns.some(
                (column) => row[column] ?.toString().toLowerCase().indexOf(barraPesquisa.toLocaleLowerCase()) > -1
            )
        ); 
    }
    

    console.log(alunos)
    


    return(
        <ContainerAll>
            <BarraBusca search = {barraPesquisa} onSearch={setBarraPesquisa}/>

            
            <ContainerTable>
                
                {alunos.length > 0 &&
                <TabelaAlunoItem  
                data = {search(alunos)}
                onClick={handleAlunoClick}
                   />
                }

            </ContainerTable>
            <ContainerBotao>
                <AvaliacaoArea link="/avaliacao" />
                <BotaoNovoAluno onClick={handleModal} >Novo aluno</BotaoNovoAluno>
                <BotaoExcluirAluno onClick ={handleModalExcluir} >Excluir Aluno</BotaoExcluirAluno>
                <BotaoGerarRelatorio onClick ={(e)=> AlunosPDF(alunos)} >Gerar PDF</BotaoGerarRelatorio>

                <ModalNovoAluno status = {modalNovoAluno} setStatus={setModalNovoAluno}>
                    <ModalNovoAlunoConteudo  setModalStatus={setModalNovoAluno}  />
                </ModalNovoAluno>
                <ModalAlunosExcluir status ={modalExcluirAluno} setStatus={setModalExcluirAluno}>
                    <ModalAlunosExcluirConteudo data ={alunos} setModalStatus={setModalExcluirAluno}/>
                </ModalAlunosExcluir>  
            </ContainerBotao>
                <Modal status = {modalStatus} setStatus = {setModalStatus}>
                    <ModalAlunosAtualizar setModalStatus = {setModalStatus} data = {alunos} target = {modalData}/>
                </Modal>
        </ContainerAll>

    );
}