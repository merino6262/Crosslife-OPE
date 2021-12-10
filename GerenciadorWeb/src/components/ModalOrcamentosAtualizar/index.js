import React from "react";
import { Container, ModalBody} from './styled'


export default ({setStatus, status, children }) => {
    const handleModalClick = (e) =>{
        if(e.target.classList.contains('modalOA')){
            setStatus(false)
        }
        
    }

    return(
        <Container
            className = 'modalOA'
            status = {status} 
            onClick={handleModalClick}>
            <ModalBody>
                {children}
            </ModalBody>
        </Container>

);

}