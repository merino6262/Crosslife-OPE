import React from "react";
import { LinkArea, Titulo} from './styled'
import { useHistory} from 'react-router-dom'

export default ({link }) => {
    const history = useHistory();


    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push( link );

    }


    return(
            
            <LinkArea href={link}  onClick={handleLinkClick} >
                <Titulo>Avaliações físicas</Titulo>
            </LinkArea>


    );
}