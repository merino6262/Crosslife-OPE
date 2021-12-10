import React from "react";
import { LinkArea, LinkIcon} from './styled'
import ProdutosPDF from "../../Reltorios/Produtos";

export default ({ icon, produtos }) => {


    const handleLinkClick = (e) =>{
        e.preventDefault();
        ProdutosPDF(produtos)

    }


    return(
        <LinkArea onClick={handleLinkClick} >
            <LinkIcon src={icon}/>
        </LinkArea>

    );
}