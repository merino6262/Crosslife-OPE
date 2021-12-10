import React, {useState, useContext, useEffect} from "react"
import { useHistory } from "react-router-dom";
import { ContainerAll, ContainerLogo, Logo, LoginRight, LoginInputUsuario, LoginInputPassword, InputSenha, InputUsuario, Botao, Login, Titulo, TextOrPassword } from "./styled";
import { MdAccountBox, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff }  from "react-icons/hi"
import StoreContext from "../../components/Store/Context";
import api from "../../api";

function initialState(){
    return{user:'',password:''};

}

function login({user, password}){
    if(user === 'fivetech' && password === 'admin'){
        return{ token: "autenticado"};
    }
    return {error: 'Usuario ou senha invalido'}
}



 
export default () => {

    const [values, setValues] = useState(initialState)
    const[showSenha, setShowSenha] = useState(false);
    const { setToken } = useContext(StoreContext);
    const history = useHistory();
    const[alunos, setAlunos] = useState([]);
    const[matriculas, setMatriculas] = useState([]);
    const[orcamentos , setOrcamentos] = useState([]);
    const[produtos , setProdutos] = useState([]);



  const pegarProdutos = async () =>{
    const res = await api.pegarProdutos();
    setProdutos(res); 

  }

  useEffect(()=>{
      pegarProdutos();

  },[]);


  const pegarOrcamentos = async () =>{
    const res = await api.pegarOrcamentos();
    setOrcamentos(res); 

}

  useEffect(()=>{
    pegarOrcamentos();

  },[]);



  const pegarMatriculas = async () =>{
    const res = await api.pegarMatriculas();
    setMatriculas(res); 

}
  useEffect(()=>{
    pegarMatriculas();

},[]);
  


  const pegarAlunos = async () =>{
    const cat = await api.pegarAlunos();
    setAlunos(cat); 

  }

  useEffect(()=>{
      pegarAlunos();

  },[]);

    function onChange(event){
        const { value, name } = event.target;


        setValues({
            ...values,
            [name]:value
        });

    }
    

    function handleClickTrue (e){
        e.preventDefault()
        setShowSenha(!showSenha)
    }

    function handleClickFalse (e){
        e.preventDefault()
        setShowSenha(!showSenha)
    }

    function Logar(e){
        
        const { token } = login(values);
        
        if(token){
            setToken(token);
            return history.push('/')
        }
        alert("usuário ou senha incorretos")
        
        setValues(initialState);
    }

    return(
        <ContainerAll>
            <Login>
            <ContainerLogo>
                <Logo src="/assets/logo_crosslife.png" />
            </ContainerLogo>

            <LoginRight>
                <Titulo>Acessar o Gerenciador</Titulo>

                <LoginInputUsuario>
                    <MdAccountBox />
                <InputUsuario
                type="text"
                placeholder="Digite seu Usuario"
                name="user"
                value = {values.user}
                onChange={onChange}
                />
            </LoginInputUsuario>

            <LoginInputPassword>
                <MdLock/>
                <InputSenha
                type={showSenha ? "text": "password"}
                placeholder="Digite sua senha"
                name="password"
                value= {values.password}
                onChange={onChange}
                />
                <TextOrPassword>
                    {showSenha ? (
                        <HiEye
                        size={20}
                        onClick={handleClickTrue}
                        />
                        
                    )
                    :(
                        <HiEyeOff
                        size={20}
                        onClick={handleClickFalse}
                        />
                    )
                    }    

            </TextOrPassword>
            </LoginInputPassword>

            
            <Botao 
            type= "submit"
            onClick ={Logar}

            >  
            ENTRAR
            </Botao>





            </LoginRight>
        </Login>


        </ContainerAll>
        
    );
}