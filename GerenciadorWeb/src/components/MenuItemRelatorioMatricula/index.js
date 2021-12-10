import React from "react";
import { LinkArea, LinkIcon} from './styled'
import MatriculasPDF from "../../Reltorios/Matriculas";

export default ({ icon, matriculas }) => {


    const handleLinkClick = (e) =>{
        e.preventDefault();
        MatriculasPDF(matriculas)

    }


    return(
        <LinkArea onClick={handleLinkClick} >
            <LinkIcon src={icon}/>
        </LinkArea>

    );
}