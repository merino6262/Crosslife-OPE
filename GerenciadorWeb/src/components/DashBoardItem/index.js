import React from "react";
import { Container } from './styled'
import { useHistory, useLocation } from 'react-router-dom'

export default ({ icon, link }) => {
    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname == link;


    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push( link );

    }


    return(
        <Container>
        </Container>

    );
}