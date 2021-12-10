
import React, {useState, useEffect, useContext} from "react";
import { ContainerAll, ContainerDashBoard, ContainerHomeItem,BotaoLogout, DadosGraficos, TiposGraficos, DadosEspecificos} from './styled'
import HomeItem from "../../components/HomeItem";
import { Bar } from 'react-chartjs-2'
import { Navbar,Container,Nav, } from 'react-bootstrap';
import api from "../../api";
import StoreContext from "../../components/Store/Context";
import { useHistory } from "react-router-dom";





const listaAvaliacaoAtiva = []
const listaMatriculaAtiva = []
const listaMatriculaInativa = []
const listaMatricula30 = []
const listaMatricula90 = []
const listaMatricula180 = []
const listaMatricula360 = []
const listaProdutos = []
const listaValoresOrcamentos =[]


export default () => {

    const [geral, setGeral] = useState(true);
    const [orcamentos, setOrcamentos] = useState(false);
    const [produtos, setProdutos] = useState(false);
    const [matriculas, setMatriculas] = useState(false);
    const [alunos, setAlunos] = useState(false);
    const [dadosAlunos, setDadosAlunos] = useState([]);
    const [dadosAvaliacoes, setDadosAvaliacoes] = useState([]);
    const [dadosMatriculas, setDadosMatriculas] = useState([]);
    const [dadosProdutos, setDadosProdutos] = useState([]);
    const [dadosOrcamentos, setDadosOrcamentos] = useState([]);
    const {token, setToken } = useContext(StoreContext);
    const history = useHistory();





    const pegarAlunos = async () =>{
        const cat = await api.pegarAlunos();
        setDadosAlunos(cat); 
        


    }

    useEffect(()=>{
        pegarAlunos();

    },[]);

    const pegarAvaliacoes = async () =>{
        const cat = await api.pegarAvaliacoes();
        setDadosAvaliacoes(cat); 

    }

    useEffect(()=>{
        pegarAvaliacoes();

    },[]);

    const pegarMatriculas = async () =>{
        const res = await api.pegarMatriculas();
        setDadosMatriculas(res); 

    }

    
    useEffect(()=>{
        pegarMatriculas();

    },[]);

    const pegarProdutos = async () =>{
        const res = await api.pegarProdutos();
        setDadosProdutos(res); 

    }

    
    useEffect(()=>{
        pegarProdutos();

    },[]);


    const pegarOrcamentos = async () =>{
        const res = await api.pegarOrcamentos();
        setDadosOrcamentos(res); 

    }

    
    useEffect(()=>{
        pegarOrcamentos();

    },[]);



    const orcamentoDados = () =>{
        dadosOrcamentos.map(orcamento =>{
            if(orcamento.valor_despesa > 0){
                listaValoresOrcamentos.push(orcamento.valor_despesa)

            }

        })
    }

    var soma = 0;
    for(var i = 0; i < listaValoresOrcamentos.length; i++) {
        soma += listaValoresOrcamentos[i];
    }

    var min = Math.min(...listaValoresOrcamentos)
    

    const resetOrcamentoLista = () =>{
        listaValoresOrcamentos.splice(0, listaValoresOrcamentos.length)
    }




    const produtoMaiorQtd = () =>{
        dadosProdutos.map(produto =>{   
            if(produto.qtd > 0){
                listaProdutos.push(produto.qtd)

            }
        })
    }
    var max = Math.max(...listaProdutos)




    const avaliacaoAtiva = () =>{
        dadosAvaliacoes.map(avaliacao =>{
            if(avaliacao.massa_gorda != 0 || avaliacao.massa_magra != 0 || avaliacao.massa_muscular != 0 || avaliacao.hidratacao != 0 || avaliacao.densidade_ossea != 0 || avaliacao.gordura_visceral !=0 || avaliacao.metabolismo_basal != 0){
                listaAvaliacaoAtiva.push(avaliacao.id_avaliacao)
            }                
        })
    }

    


    const matriculaAtiva = () =>{
        dadosMatriculas.map(matricula =>{
            if(matricula.matricula_ativa === 1){
                listaMatriculaAtiva.push(matricula.matricula_ativa)
                 
            }
            if(matricula.matricula_ativa === 0){
                listaMatriculaInativa.push(matricula.matricula_ativa)
                 
            }                
        })
    }

    const resetMatriculaAtiva = () => {
        listaMatriculaAtiva.splice(0, listaMatriculaAtiva.length)
        listaMatriculaInativa.splice(0, listaMatriculaInativa.length)
        listaAvaliacaoAtiva.splice(0, listaAvaliacaoAtiva.length)

    }


    const matriculaTipo = () =>{
        dadosMatriculas.map(matricula =>{
            if(matricula.tipo_matricula === 30){
                listaMatricula30.push(matricula.tipo_matricula)
               
            }
            if(matricula.tipo_matricula === 90) {
                listaMatricula90.push(matricula.tipo_matricula)

            }
            if(matricula.tipo_matricula === 180){
                listaMatricula180.push(matricula.tipo_matricula)
               
            }  
            if(matricula.tipo_matricula === 30){
                listaMatricula360.push(matricula.tipo_matricula)
               
            }     
        })
    }

    const resetMatriculaTipo = () =>{
        listaMatricula30.splice(0, listaMatricula30.length)
        listaMatricula90.splice(0, listaMatricula90.length)
        listaMatricula180.splice(0 , listaMatricula180.length)
        listaMatricula360.splice(0, listaMatricula360.length)
        listaProdutos.splice(0, listaProdutos.length)

    }
    console.log(listaMatriculaInativa)

    


    


    const handleGeral = () =>{
        resetOrcamentoLista()
        resetMatriculaTipo()
        resetMatriculaAtiva()
        setGeral(true)
        setOrcamentos(false)
        setProdutos(false)
        setMatriculas(false)
        setAlunos(false)
    }
    const handleOrcamentos = () =>{
        resetOrcamentoLista()
        resetMatriculaTipo()
        resetMatriculaAtiva()
        orcamentoDados()
        setGeral(false)
        setOrcamentos(true) 
        setProdutos(false)
        setMatriculas(false)
        setAlunos(false)
    }
    const handleProdutos = () =>{
        resetOrcamentoLista()
        resetMatriculaTipo()
        resetMatriculaAtiva()
        produtoMaiorQtd()
        setGeral(false)
        setOrcamentos(false)
        setProdutos(true)
        setMatriculas(false)
        setAlunos(false)
    }
    const handleMatriculas = () =>{
        resetOrcamentoLista()
        resetMatriculaTipo()
        resetMatriculaAtiva()
        matriculaTipo()
        setGeral(false)
        setOrcamentos(false)
        setProdutos(false)
        setMatriculas(true)
        setAlunos(false)
    }
    const handleAlunos = () =>{
        resetOrcamentoLista()
        resetMatriculaAtiva()
        resetMatriculaTipo()
        avaliacaoAtiva()
        matriculaAtiva()
        setGeral(false)
        setOrcamentos(false)
        setProdutos(false)
        setMatriculas(false)
        setAlunos(true)
    }
    
    function Logout(e){ 
        if(token){
            setToken("invalido");
            return history.push('/login')
        }
    }








    return(
        <ContainerAll>
            <BotaoLogout onClick={Logout}>Sair </BotaoLogout>
            <ContainerDashBoard>
                <TiposGraficos> 
                <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand >Gráficos</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link onClick = {handleGeral}>Geral</Nav.Link>
                <Nav.Link onClick = {handleOrcamentos}>Despesas</Nav.Link>
                <Nav.Link onClick = {handleProdutos}>Estoque</Nav.Link>
                <Nav.Link onClick = {handleMatriculas}>Matrículas</Nav.Link>
                <Nav.Link onClick = {handleAlunos}>Alunos</Nav.Link>
                </Nav>
                </Container>
                </Navbar>

                        {/* dados especifocos da tabela geral */}
                { geral ?(
                    <div>
                <DadosEspecificos>Total de alunos: {dadosAlunos.length}</DadosEspecificos>
                <DadosEspecificos>Total de matrículas: {dadosMatriculas.length}</DadosEspecificos>
                <DadosEspecificos>Produtos em estoque: {dadosProdutos.length}</DadosEspecificos>
                <DadosEspecificos>Despesas cadastradas: {dadosOrcamentos.length}</DadosEspecificos>
                    </div>
                )
                :(
                    <div></div>
                )
                }

                        {/* dados especificos da tabela de Produtos */}
                { produtos ?(
                    <div>
                <DadosEspecificos>Total de produtos: {dadosProdutos.length}</DadosEspecificos>
                <DadosEspecificos>Produto em maior quantidade: {max}</DadosEspecificos>
                    </div>
                )
                :(
                    <div></div>
                )
                }

                        {/* dados especificos da tabela de Matriculas */}

                { matriculas ?(
                    <div>
                <DadosEspecificos>Matriculas de 30 dias: {listaMatricula30.length}</DadosEspecificos>
                <DadosEspecificos>Matriculas de 90 dias: {listaMatricula90.length}</DadosEspecificos>
                <DadosEspecificos>Matriculas de 180 dias: {listaMatricula180.length}</DadosEspecificos>
                <DadosEspecificos>Matriculas de 360 dias: {listaMatricula360.length}</DadosEspecificos>
                    </div>
                )
                :(
                    <div></div>
                )
                }

                        {/* dados especificos da tabela de Orcamentos */}
                { orcamentos ?(
                    <div>
                <DadosEspecificos>Despesa mínima: {min}</DadosEspecificos>
                <DadosEspecificos>Valor total a pagar: {soma}</DadosEspecificos>
                    </div>
                )
                :(
                    <div></div>
                )
                }
                        {/* dados especificos da tabela de Alunos */}

                { alunos ?(
                    <div>
                <DadosEspecificos>Total de alunos: {dadosAlunos.length}</DadosEspecificos>
                <DadosEspecificos>Alunos com matrícula ativa: {listaMatriculaAtiva.length}</DadosEspecificos>
                <DadosEspecificos>Alunos com matrícula inativa: {listaMatriculaInativa.length}</DadosEspecificos>
                <DadosEspecificos>Avaliações físicas realizadas: {listaAvaliacaoAtiva.length}</DadosEspecificos>
                    </div>
                )
                :(
                    <div></div>
                )
                }




                </TiposGraficos>



                <DadosGraficos>

                                {/* Tabela Geral */}
                { geral ?(
                <Bar
                    data={{
                            labels:['Alunos','Matriculas', 'Produtos', 'Despesas'],
                    datasets:[{
                        label: 'Quantidade',
                        data:[dadosAlunos.length,dadosMatriculas.length,dadosProdutos.length,dadosOrcamentos.length],
                        backgroundColor:[
                                        'rgba(11, 156, 49,1)',
                                        'rgba(11, 156, 49,1)',
                                        'rgba(11, 156, 49,1)',
                                        'rgba(11, 156, 49,1)'
                        ]
                    }]
                            

                    }}
                    height={100}
                    width={150}
                    options={{ maintainAspectRatio: false}}
                />
                
                )
                :(
                    <div></div>
                )
                }
        

                                {/* Tabela de Produtos */}
                { produtos ? (
                    <Bar
                        data={{
                            labels:['Produtos','Produtos com maior quantidade'],
                            datasets:[{
                            label: 'Quantidade',
                            data:[dadosProdutos.length,max],
                            backgroundColor:[
                                            'rgba(11, 156, 49,1)',
                                            'rgba(11, 156, 49,1)'
                                            ]
                            }]
                                            
                
                            }}
                            height={100}
                            width={150}
                            options={{ maintainAspectRatio: false}}
                    />
                ) :(
                    <div></div>
                )
                }

                        {/* tabela de matricula */}
                { matriculas ? (
                    <Bar
                        data={{
                            labels:['30 Dias','90 Dias', '180 Dias', '360 Dias'],
                            datasets:[{
                            label: 'Quantidade',
                            data:[listaMatricula30.length,listaMatricula90.length,listaMatricula180.length,listaMatricula360.length],
                            backgroundColor:[
                                            'rgba(11, 156, 49,1)',
                                            'rgba(11, 156, 49,1)',
                                            'rgba(11, 156, 49,1)',
                                            'rgba(11, 156, 49,1)'
                                            ]
                            }]
                                            
                
                            }}
                            height={100}
                            width={150}
                            options={{ maintainAspectRatio: false}}
                    />
                ) :(
                    <div></div>
                )
                }

                                {/* Tabela de orçamento  */}
                { orcamentos ? (
                    <Bar
                        data={{
                            labels:['Despesa minima','Valor total das despesas'],
                            datasets:[{
                            label: 'Quantidade',
                            data:[min,soma],
                            backgroundColor:[
                                            'rgba(11, 156, 49,1)',
                                            'rgba(11, 156, 49,1)',
                                            'rgba(11, 156, 49,1)',
                                            'rgba(11, 156, 49,1)'
                                            ]
                            }]
                                            
                
                            }}
                            height={100}
                            width={150}
                            options={{ maintainAspectRatio: false}}
                    />
                ) :(
                    <div></div>
                )
                }

                        {/* tabela de alunos */}
                { alunos ? (
                    <Bar
                        data={{
                            labels:['Alunos','Matricula Ativa', 'Matricula Inativa', 'AV.Físicas'],
                            datasets:[{
                            label: 'Quantidade',
                            data:[dadosAlunos.length,listaMatriculaAtiva.length,listaMatriculaInativa.length,listaAvaliacaoAtiva.length],
                            backgroundColor:[
                                                'rgba(11, 156, 49,1)',
                                                'rgba(11, 156, 49,1)',
                                                'rgba(11, 156, 49,1)',
                                                'rgba(11, 156, 49,1)'
                                            ]
                            }]
                                            
                
                            }}
                            height={100}
                            width={150}
                            options={{ maintainAspectRatio: false}}
                    />
                ) :(
                    <div></div>
                )
                }





                </DadosGraficos>

            </ContainerDashBoard>
            <ContainerHomeItem>
                <HomeItem nome="ALUNOS" icon ="/assets/alunos.png" link="/alunos" />
                <HomeItem nome="ORÇAMENTOS" icon ="/assets/orcamento.png" link="/orcamentos" />
                <HomeItem nome="MATRICULAS" icon ="/assets/matriculas.png" link="/matriculas" />
                <HomeItem nome="PRODUTOS" icon ="/assets/produtos.png" link="/produtos" />

            </ContainerHomeItem>

        </ContainerAll>

    );
}