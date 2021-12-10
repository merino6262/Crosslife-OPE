import React, {useState, useEffect} from "react";
import "./App.css"
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import { Container,TituloMenu , Menu, PageBody, TituloDivisaoMenu } from "./AppStyled"
import MenuItem from './components/MenuItem';
import Logo from "./components/Logo";
import Alunos from "./pages/Alunos";
import Matriculas from "./pages/Matriculas";
import Produtos from "./pages/Produtos";
import Orcamentos from "./pages/Orcamentos";
import Login from "./pages/Login";
import Avaliacoes from "./pages/Avaliacoes";
import ContactUs from "./pages/Email/Email";
import StoreProvider from "./components/Store/Provider";
import RoutesPrivate from "./components/Routes/Private/Private";
import api from "./api";
import MenuItemRelatorioAluno from "./components/MenuItemRelatorioAluno";
import MenuItemRelatorioMatricula from "./components/MenuItemRelatorioMatricula";
import MenuItemRelatorioOrcamento from "./components/MenuItemRelatorioOrcamento";
import MenuItemRelatorioProduto from "./components/MenuItemRelatorioProduto";



export default () =>{
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

  return(
    <BrowserRouter>
      <StoreProvider>
      <Container>
          <Menu>
            <Logo icon ="/assets/logo_crosslife.png" link="/" />
            <TituloDivisaoMenu>Gerar PDF</TituloDivisaoMenu><br/>
            <TituloMenu>Alunos</TituloMenu>
            <MenuItemRelatorioAluno icon ="/assets/alunos.png" alunos ={alunos} />
            <TituloMenu>Despesas</TituloMenu>
            <MenuItemRelatorioOrcamento icon ="/assets/orcamento.png" orcamentos={orcamentos} />
            <TituloMenu>Produtos</TituloMenu>
            <MenuItemRelatorioProduto icon ="/assets/produtos.png" produtos={produtos} />
            <TituloMenu>Matrículas</TituloMenu>
            <MenuItemRelatorioMatricula icon ="/assets/matriculas.png" matriculas ={matriculas} /><br/><br/>
            <TituloDivisaoMenu>Contato</TituloDivisaoMenu> <br/>
            <MenuItem icon ="/assets/icon_email.jpg" link="/email" />


          </Menu>
          <PageBody>
            <Switch>

              <RoutesPrivate exact path="/">
                <Home/>
              </RoutesPrivate>

              <RoutesPrivate path="/relatorios">
                <Sobre/>
              </RoutesPrivate>


              <RoutesPrivate path="/enviaremails">
                <Sobre/>
              </RoutesPrivate>

              <RoutesPrivate path="/status">
                <Sobre/>
              </RoutesPrivate>

              <RoutesPrivate path="/ajuda">
                <Sobre/>
              </RoutesPrivate>
              
              <RoutesPrivate path="/alunos">
                <Alunos/>
              </RoutesPrivate>

              <RoutesPrivate path="/matriculas">
                <Matriculas/>
              </RoutesPrivate>
              
              <RoutesPrivate path="/produtos">
                <Produtos/>
              </RoutesPrivate>

              <RoutesPrivate path="/orcamentos">
                <Orcamentos/>
              </RoutesPrivate>

              <Route path="/login">
                <Login/>
              </Route>

              <RoutesPrivate path="/avaliacao">
                <Avaliacoes/>
              </RoutesPrivate>

              <RoutesPrivate path="/email">
                <ContactUs/>
              </RoutesPrivate>

              <Route path="*">
                <h4>Pagina não encontrada !</h4>
              </Route>
          </Switch>

        </PageBody>
        
      </Container>
      </StoreProvider>

    </BrowserRouter>
  );
}
