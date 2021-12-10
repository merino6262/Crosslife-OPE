import React from "react";
import {Container, BotaoArea, Botao} from "./styled";

export default (handleSubmit) =>{


    return(
        <Container>
            <BotaoArea> 
                
                    
                    <Botao onSubmit = {handleSubmit} type="submit" variant="secondary">Atualizar</Botao>
                    <Botao type="submit" variant="secondary">Excluir</Botao>
               
            </BotaoArea>


        </Container>

    );
}









