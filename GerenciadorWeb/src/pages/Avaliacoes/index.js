import React,{useState, useEffect} from "react";
import { ContainerAll, ContainerTable, ContainerBotao,BotaoGerarRelatorio} from './styled'
import TabelaAvaliacaoItem from "../../components/TabelaAvaliacaoItem";
import ModalAvaliacoesAtualizar from "../../components/ModalAvaliacoesAtualizar";
import ModalAvaliacoesAtualizarConteudo from "../../components/ModalAvaliacoesAtualizarConteudo";
import AvaliacaoPDF from "../../Reltorios/Avaliacao";

import BarraBusca from "../../components/BarraBusca";

import api from "../../api";




export default () => {
    const[avaliacoes , setAvaliacoes] = useState([]);
    const[barraPesquisa, setBarraPesquisa] = useState('');
    const[modalData, setModalData] = useState(null)
    const[modalStatus, setModalStatus] = useState(false)


    const handleAvaliacaoClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }



    const pegarAvaliacoes = async () =>{
        const cat = await api.pegarAvaliacoes();
        setAvaliacoes(cat); 

    }

    useEffect(()=>{
        pegarAvaliacoes();

    },[]);


    function search(rows) {
        console.log(rows)
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
                
                {avaliacoes.length > 0 &&
                <TabelaAvaliacaoItem  
                onClick={handleAvaliacaoClick}
                data = {search(avaliacoes)}
                   />
                }

            </ContainerTable>
            <ContainerBotao>
            <BotaoGerarRelatorio onClick ={(e)=> AvaliacaoPDF(avaliacoes)} >Gerar PDF</BotaoGerarRelatorio>
            </ContainerBotao>

            <ModalAvaliacoesAtualizar status = {modalStatus} setStatus = {setModalStatus}>
                    <ModalAvaliacoesAtualizarConteudo setModalStatus = {setModalStatus} data = {avaliacoes} target = {modalData}/>
                </ModalAvaliacoesAtualizar>
        </ContainerAll>

    );
}