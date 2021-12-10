let BASE = "https://crosslifeapi.herokuapp.com" ;



export default {
    pegarAlunos: async () => {
        const resposta = await fetch(BASE+"/alunos")
        const json = await resposta.json();
        return json;

    },
    pegarMatriculas: async () => {
        const resposta = await fetch(BASE+"/matriculas")
        const json = await resposta.json();
        return json;
    },
    pegarOrcamentos: async () => {
        const resposta = await fetch(BASE+"/orcamentos")
        const json = await resposta.json();
        return json;
    },
    pegarProdutos: async () => {
        const resposta = await fetch(BASE+"/produtos")
        const json = await resposta.json();
        return json;
    },
    pegarAvaliacoes: async () => {
        const resposta = await fetch(BASE+"/avaliacoes")
        const json = await resposta.json();
        return json;
    }
    


}

