import React from "react";
import { Container ,LinkArea, LinkIcon} from './styled'
import { useHistory} from 'react-router-dom'

export default ({ nome,icon,link }) => {
    const history = useHistory();


    const handleLinkClick = (e) =>{
        e.preventDefault();
        history.push( link );

    }


    return(
            
            <LinkArea href={link}  onClick={handleLinkClick} >
                <p>{nome}</p>
                <LinkIcon src={icon}/>
            </LinkArea>


    );
}