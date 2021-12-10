import styled from "styled-components";


export const Container = styled.div`
    background-color: #136713;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;

`;


export const Logo = styled.img`
    width: auto;
    height: 70px;


`;

export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    width: ${props=>props.active ? 300 : 0}px;
    height: 50px;
    background-color: white;
    align-items: center;
    background-image: url('/assets/lupa.png');
    background-size: 28px;
    background-repeat: no-repeat;
    background-position: 12px center;
    outline: 0;
    padding-left: 50px;
    transition: all ease 0.3s;
    cursor: pointer;
    font-size: 15px;

    &:focus{
        cursor: text;
    }

`;