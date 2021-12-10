import React from "react";
import { Container, ModalBody} from './styled'


export default ({setStatus, status, children }) => {
    const handleModalClick = (e) =>{
        if(e.target.classList.contains('modalEXO')){
            setStatus(false)
        }
        
    }

    return(
        <Container
            className = 'modalEXO'
            status = {status} 
            onClick={handleModalClick}>
            <ModalBody>
                {children}
            </ModalBody>
        </Container>

);

}