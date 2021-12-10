import React,{useState, useEffect} from "react";
import { ContainerAll, ContainerTable,BotaoGerarRelatorio,ContainerBotao} from './styled'
import TabelaMatriculaItem from "../../components/TabelaMatriculaItem";
import ModalMatriculasAtualizar from "../../components/ModalMatriculasAtualizar"
import ModalMatriculasAtualizarConteudo from "../../components/ModalMatriculasAtualizarConteudo"
import MatriculasPDF from "../../Reltorios/Matriculas";


import BarraBusca from "../../components/BarraBusca";

import api from "../../api";




export default () => {
    const[matriculas , setMatriculas] = useState([]);
    const[barraPesquisa, setBarraPesquisa] = useState('');
    const[modalStatus, setModalStatus] = useState(false);
    const[modalData, setModalData]= useState(null);



    const pegarMatriculas = async () =>{
        const res = await api.pegarMatriculas();
        setMatriculas(res); 

    }

    const handleMatriculaClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }

    useEffect(()=>{
        pegarMatriculas();

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
                
                {matriculas.length > 0 &&
                <TabelaMatriculaItem  
                data = {search(matriculas)}
                onClick ={handleMatriculaClick}
                   />
                }

            </ContainerTable>

            <ModalMatriculasAtualizar status = {modalStatus} setStatus = {setModalStatus}>
                <ModalMatriculasAtualizarConteudo setModalStatus = {setModalStatus} data = {matriculas} target = {modalData}/>
            </ModalMatriculasAtualizar>

            <ContainerBotao>
                <BotaoGerarRelatorio onClick ={(e)=> MatriculasPDF(matriculas)} >Gerar PDF</BotaoGerarRelatorio>
            </ContainerBotao>




            

        </ContainerAll>

    );
}