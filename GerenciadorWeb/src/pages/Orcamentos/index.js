import React,{useState, useEffect} from "react";
import { ContainerAll, ContainerTable, BotaoNovoOrcamento, BotaoExcluirOrcamento, ContainerBotao, BotaoGerarRelatorio} from './styled'
import TabelaOrcamentoItem from "../../components/TabelaOrcamentoItem";
import ModalOrcamentosAtualizar from "../../components/ModalOrcamentosAtualizar";
import ModalOrcamentosAtualizarConteudo from "../../components/ModalOrcamentosAtualizarConteudo";
import ModalNovoOrcamento from "../../components/ModalNovoOrcamento";
import ModalOrcamentoExcluir from "../../components/ModalOrcamentoExcluir";
import ModalOrcamentoExcluirConteudo from "../../components/ModalOrcamentoExcluirConteudo";
import OrcamentosPDF from "../../Reltorios/Orcamentos";

import BarraBusca from "../../components/BarraBusca";

import api from "../../api";
import ModalNovoOrcamentoConteudo from "../../components/ModalNovoOrcamentoConteudo";




export default () => {
    const[orcamentos , setOrcamentos] = useState([]);
    const[barraPesquisa, setBarraPesquisa] = useState('');
    const[modalStatus, setModalStatus] = useState(false);
    const[modalData, setModalData]= useState(null);
    const[modalNovoOrcamento, setModalNovoOrcamento] = useState(false)
    const[modalExcluirOrcamento, setModalExcluirOrcamento] = useState(false)








    const handleModal = () => {
        setModalNovoOrcamento(true);
    }

    const handleOrcamentoClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }
    const handleModalExcluir = () =>{
        setModalExcluirOrcamento(true);

    }



    const pegarOrcamentos = async () =>{
        const res = await api.pegarOrcamentos();
        setOrcamentos(res); 

    }

    useEffect(()=>{
        pegarOrcamentos();

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
    


    return(
        <ContainerAll>
            <BarraBusca search = {barraPesquisa} onSearch={setBarraPesquisa}/>

            
            <ContainerTable>
                
                {orcamentos.length > 0 &&
                <TabelaOrcamentoItem  
                data = {search(orcamentos)}
                onClick ={handleOrcamentoClick}
                   />
                }
            </ContainerTable>

        <ContainerBotao>
            <BotaoNovoOrcamento onClick={handleModal} >Novo Orçamento</BotaoNovoOrcamento>
            <BotaoExcluirOrcamento onClick ={handleModalExcluir} >Excluir Orçamento</BotaoExcluirOrcamento>
            <BotaoGerarRelatorio onClick ={(e)=> OrcamentosPDF(orcamentos)} >Gerar PDF</BotaoGerarRelatorio>
        </ContainerBotao>
        

            <ModalNovoOrcamento status = {modalNovoOrcamento} setStatus={setModalNovoOrcamento}>
                <ModalNovoOrcamentoConteudo setModalStatus={setModalNovoOrcamento} />
            </ModalNovoOrcamento>


            <ModalOrcamentosAtualizar status = {modalStatus} setStatus = {setModalStatus}>
                <ModalOrcamentosAtualizarConteudo setModalStatus = {setModalStatus} data = {orcamentos} target = {modalData}/>
            </ModalOrcamentosAtualizar>


            <ModalOrcamentoExcluir status ={modalExcluirOrcamento} setStatus={setModalExcluirOrcamento}>
                <ModalOrcamentoExcluirConteudo data ={orcamentos} setModalStatus={setModalExcluirOrcamento}/>
            </ModalOrcamentoExcluir>

        </ContainerAll>

    );
}