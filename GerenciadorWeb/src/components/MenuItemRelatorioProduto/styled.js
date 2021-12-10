import styled from "styled-components";

export const LinkArea = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 60px;
background-color: ${props =>props.active ? '#0B4D0B' : 'transparent'};
border-radius: 10px;
margin-bottom: 10px;
cursor: pointer;

`;

export const LinkIcon = styled.img`
    width: 50px;
    height: 50px;
`;