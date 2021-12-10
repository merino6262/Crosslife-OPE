import styled from "styled-components";

 


export const Container = styled.div`
display: flex;
height: 100vh;
background-color: black;

`;

export const Menu = styled.div`
display: flex;
justify-content:center;
align-items: center;
background-color: #136713;
width:80px;
flex-direction: column;
`;

export const PageBody = styled.div`
display: flex;
background-image: url('/assets/plano_oficial.png');
background-color: grey;
flex: 1;
overflow-y: auto;
`;

export const TituloMenu = styled.div`
    color: white;
    font-size: 10px;
`;
export const TituloDivisaoMenu = styled.div`
    color: white;
    font-size: 15px;
`;

export const BotaoRelatorio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 150px;
    background-color: green;
    border-radius: 10px;
    margin-bottom: 10px;
    flex: 1 1 200px;
    margin-right: 230px;
    margin-left: 180px;
    flex-direction: column;
    color: white;
    cursor: pointer;
`;
export const Icon = styled.img`
    width: 130px;
    height: 100px;
`;