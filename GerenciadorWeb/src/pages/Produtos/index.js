import React,{useState, useEffect} from "react";
import { ContainerAll, ContainerTable, ContainerBotao, BotaoNovoProduto,BotaoExcluirProduto,BotaoGerarRelatorio} from './styled'
import TabelaProdutoItem from "../../components/TabelaProdutoItem";
import ModalProdutosAtualizar from "../../components/ModalProdutosAtualizar";
import ModalProdutosAtualizarConteudo from "../../components/ModalProdutosAtualizarConteudo";
import ModalProdutosExcluir from "../../components/ModalProdutosExcluir"
import ModalProdutosExcluirConteudo from "../../components/ModalProdutosExcluirConteudo"
import ModalNovoProduto from "../../components/ModalNovoProduto"
import ModalNovoProdutoConteudo from "../../components/ModalNovoProdutoConteudo"
import ProdutosPDF from "../../Reltorios/Produtos";

import BarraBusca from "../../components/BarraBusca";

import api from "../../api";




export default () => {
    const[produtos , setProdutos] = useState([]);
    const[barraPesquisa, setBarraPesquisa] = useState('');
    const[modalStatus, setModalStatus] = useState(false);
    const[modalData, setModalData]= useState(null);
    const[modalNovoProduto, setModalNovoProduto] = useState(false)
    const[modalExcluirProduto, setModalExcluirProduto] = useState(false)
    


    const handleModal = () => {
        setModalNovoProduto(true);
    }

    const handleProdutoClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }
    const handleModalExcluir = () =>{
        setModalExcluirProduto(true);

    }



    const pegarProdutos = async () =>{
        const res = await api.pegarProdutos();
        setProdutos(res); 

    }

    useEffect(()=>{
        pegarProdutos();

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
                
                {produtos.length > 0 &&
                <TabelaProdutoItem
                  data = {search(produtos)}
                  onClick={handleProdutoClick}
                   />
                }

            </ContainerTable>
            
                <ContainerBotao>
                    <BotaoNovoProduto onClick={handleModal}>Novo Produto</BotaoNovoProduto>
                    <BotaoExcluirProduto onClick ={handleModalExcluir}>Excluir Produto</BotaoExcluirProduto>
                    <BotaoGerarRelatorio onClick ={(e)=> ProdutosPDF(produtos)} >Gerar PDF</BotaoGerarRelatorio>
                </ContainerBotao>

                <ModalNovoProduto status = {modalNovoProduto} setStatus={setModalNovoProduto}>
                     <ModalNovoProdutoConteudo setModalStatus={setModalNovoProduto}/>
                </ModalNovoProduto>
    

                <ModalProdutosAtualizar status = {modalStatus} setStatus = {setModalStatus}>
                    <ModalProdutosAtualizarConteudo setModalStatus = {setModalStatus} data = {produtos} target = {modalData}/>
                </ModalProdutosAtualizar>

                <ModalProdutosExcluir status ={modalExcluirProduto} setStatus={setModalExcluirProduto}>
                    <ModalProdutosExcluirConteudo data ={produtos} setModalStatus={setModalExcluirProduto}/>
                </ModalProdutosExcluir>


        </ContainerAll>

    );
}