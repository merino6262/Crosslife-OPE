import React from "react";
import { Container, ModalBody} from './styled'


export default ({setStatus, status, children }) => {
    const handleModalClick = (e) =>{
        if(e.target.classList.contains('modalNA')){
            setStatus(false)
        }
        
    }

    return(
        <Container
            className = 'modalNA'
            status = {status} 
            onClick={handleModalClick}>
            <ModalBody>
                {children}
            </ModalBody>
        </Container>

);

}