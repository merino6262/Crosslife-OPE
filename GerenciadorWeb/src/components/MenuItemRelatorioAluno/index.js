import React from "react";
import { LinkArea, LinkIcon} from './styled'
import AlunosPDF from "../../Reltorios/Alunos";

export default ({ icon, alunos }) => {


    const handleLinkClick = (e) =>{
        e.preventDefault();
        AlunosPDF(alunos)

    }


    return(
        <LinkArea onClick={handleLinkClick} >
            <LinkIcon src={icon}/>
        </LinkArea>

    );
}