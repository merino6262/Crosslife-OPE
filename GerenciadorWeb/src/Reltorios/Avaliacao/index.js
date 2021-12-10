import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function AvaliacaoPDF(avaliacoes){
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const reportTitle = [

        {
            text: 'Relatórios de Avaliações',
            style: 'header',
            fontSize: 15,
            bold: true,
            margin: [235, 20, 0, 45] // left, top, right, bottom
        }
    ];

    const dados = avaliacoes.map((avaliacao) => {

        return  [
                {text: avaliacao.id_aluno, fontSize: 10 , margin:[0,2,0,2]},
                {text: avaliacao.massa_gorda, fontSize: 10 , margin:[0,2,0,2]},
                {text: avaliacao.massa_magra, fontSize: 10 , margin:[0,2,0,2]},
                {text: avaliacao.massa_muscular, fontSize: 10 , margin:[0,2,0,2]},
                {text: avaliacao.hidratacao,fontSize: 10 , margin:[0,2,0,2]},
                {text: avaliacao.densidade_ossea, fontSize: 10 , margin:[0,2,0,2]},
                {text: avaliacao.gordura_visceral, fontSize: 10 , margin:[0,2,0,2]},
                {text: avaliacao.metabolismo_basal,fontSize: 10 , margin:[0,2,0,2]}
                ]
    })

    const details = [
        {
            table:{
                headerRows:1,
                widths:[50,65,65,80,50,50,40,60],
                body: [
                    [
                    {text: 'Id_aluno', style: 'tableHeader', fontSize: 10},
                    {text: 'Massa_gorda', style: 'tableHeader', fontSize: 10},
                    {text: 'Massa_magra', style: 'tableHeader', fontSize: 10},
                    {text: 'Massa_muscular', style: 'tableHeader', fontSize: 10},
                    {text: 'hidratação', style: 'tableHeader', fontSize: 10},
                    {text: 'Densidade_ossea', style: 'tableHeader', fontSize: 10},
                    {text: 'Gordura_visceral', style: 'tableHeader', fontSize: 10},
                    {text: 'Metabolismo_basal', style: 'tableHeader', fontSize: 10}
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



export default AvaliacaoPDF;