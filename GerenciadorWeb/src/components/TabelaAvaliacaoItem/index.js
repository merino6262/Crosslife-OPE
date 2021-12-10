import React from "react";
import {Container, TabelaArea} from "./styled";

export default ({data, onClick}) =>{
    const columns = data[0] && Object.keys(data[0]);

    const handleClick = (e) =>{
        onClick(e.target.getAttribute('keya'));
        
        
    }  


    return(
        <Container>
            <TabelaArea> 
                <h2>Tabela de Avaliações</h2>
                <table class="table table-dark table-hover" cellPadding={0} cellSpacing={0}>
                    <thead>
                        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)} </tr>
                    </thead>   
                    <tbody>
                        {data.map((row) => (
                        <tr>
                            {columns.map((column) =>(
                            <td keya ={row.id_avaliacao}  onClick={handleClick} key = {row.id_avaliacao.toString()}>{row[column]}</td>
                            ))}
                        </tr>
                        ))}    
                        
                    </tbody> 
                </table>   

               

            
            </TabelaArea>


        </Container>

    );
}









