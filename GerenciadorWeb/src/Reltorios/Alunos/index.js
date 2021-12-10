import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function AlunosPDF(alunos){
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const reportTitle = [

        {
            text: 'Relatórios de Alunos',
            style: 'header',
            fontSize: 15,
            bold: true,
            margin: [235, 20, 0, 45] // left, top, right, bottom
        }
    ];

    const dados = alunos.map((aluno) => {

        return  [
                {text: aluno.nome_aluno, fontSize: 8 , margin:[0,2,0,2]},
                {text: aluno.idade, fontSize: 8 , margin:[0,2,0,2]},
                {text: aluno.cpf, fontSize: 8 , margin:[0,2,0,2]},
                {text: aluno.telefone, fontSize: 8 , margin:[0,2,0,2]},
                {text: aluno.email,fontSize: 8 , margin:[0,2,0,2]}
                ]
    })

    const details = [
        {
            table:{
                headerRows:1,
                widths:[90,50,90,90,200],
                body: [
                    [
                    {text: 'Nome_aluno', style: 'tableHeader', fontSize: 10},
                    {text: 'Idade', style: 'tableHeader', fontSize: 10},
                    {text: 'Cpf', style: 'tableHeader', fontSize: 10},
                    {text: 'Telefone', style: 'tableHeader', fontSize: 10},
                    {text: 'Email', style: 'tableHeader', fontSize: 10}
                    ],
                    ...dados
                ]
            },
            layout: 'lightHorizontalLines'
        }

    ];



    function Rodape(currentPage, pageCount){
        return[
            {
                text: currentPage + '/' + pageCount,
                alignment:'right',
                fontSize: 9,
                margin: [0, 10, 20, 0] // left, top, right, bottom 
            }
        ]
    }

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins:[15, 50, 15, 40],
        header: [reportTitle],
        content: [details],
        footer: Rodape
    }

    pdfMake.createPdf(docDefinitions).download()

}



export default AlunosPDF;