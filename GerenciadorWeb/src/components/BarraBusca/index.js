import React,{useState} from "react";
import { Container, Logo, SearchInput} from './styled'


export default ({search, onSearch}) => {
    const[inputActive, setInputActive ] = useState(search == '' ? false : true);


    const handleInputFocus = () =>{
        setInputActive(true);

    }
    const handleInputBlur = () =>{
        if(search == ''){
            setInputActive(false);
        }
    }
    const handleBarra = (e) =>{
        onSearch(e.target.value);
        

    }



    return(
        <Container>
            <Logo src="/assets/logo_crosslife.png" />
            <SearchInput  type="text"
             placeholder="Digite sua busca..."
             active={inputActive}
             onChange={handleBarra}
             value={search}
             onFocus={handleInputFocus}
             onBlur={handleInputBlur}
             
              />
        </Container>

    );
}