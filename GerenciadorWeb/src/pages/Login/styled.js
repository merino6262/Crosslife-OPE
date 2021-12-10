import styled from "styled-components";




export const ContainerAll = styled.div`
    color: white;
    position: fixed;
    margin: 0;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #121214;
    

`;  

export const Titulo = styled.h1`
    font-family: 'Roboto Slab';
    font-size: 50px;
    margin-bottom: 40px;
`;

export const Login = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;

`;

export const ContainerLogo = styled.div`

`;


export const Logo = styled.img`
    width: 400px;
    height: 200px;
`;

export const LoginRight = styled.div`
    background-color: #29292E;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    padding: 20px;
    width: 500px;
    height: 500px;
`;

export const LoginInputUsuario = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    background-color: #1A1A1D;
    border-radius: 3px;
    padding: 3px;
    width: 98%;
    height: 50px;
`;

export const LoginInputPassword = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    background-color: #1A1A1D;
    border-radius: 3px;
    padding: 3px;
    width: 98%;
    height: 50px;
`;

export const InputUsuario = styled.input`
    background: transparent;
    width: 100%;
    outline-width: 0;
    color: #E1E1E6;
    border: none;
    font-size: 17px;
    margin-left: 10px;
    margin-right: 10px;

`;

export const InputSenha = styled.input`
    background: transparent;
    width: 100%;
    outline-width: 0;
    color: #E1E1E6;
    border: none;
    font-size: 17px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Botao = styled.button`
    width: 98%;
    background-color: #121214;
    color: #EDD2F5;
    font-weight: 800;
    height: 50px;
    border-radius: 5px;
    font-size: 18px;
    margin-top: 5px;
    &:hover{ 
        background-color: #171719;
        color: #EFF2F5;
        cursor: pointer;

    }
`;
export const TextOrPassword = styled.div`
    cursor: pointer;
`;