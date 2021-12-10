import React from "react";
import { LinkArea, LinkIcon} from './styled'

import OrcamentosPDF from "../../Reltorios/Orcamentos";

export default ({ icon, orcamentos }) => {


    const handleLinkClick = (e) =>{
        e.preventDefault();
        OrcamentosPDF(orcamentos)

    }


    return(
        <LinkArea onClick={handleLinkClick} >
            <LinkIcon src={icon}/>
        </LinkArea>

    );
}