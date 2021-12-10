import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function OrcamentosPDF(orcamentos){
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const reportTitle = [

        {
            text: 'Relatórios de Orçamentos ',
            style: 'header',
            fontSize: 15,
            bold: true,
            margin: [235, 20, 0, 45] // left, top, right, bottom
        }
    ];

    const dados = orcamentos.map((orcamento) => {

        return  [
                {text: orcamento.nome_despesa, fontSize: 8 , margin:[0,2,0,2]},
                {text: orcamento.valor_despesa, fontSize: 8 , margin:[0,2,0,2]},
                {text: orcamento.data_pagamento, fontSize: 8 , margin:[0,2,0,2]},
                {text: orcamento.observacao, fontSize: 8 , margin:[0,2,0,2]}
                ]
    })

    const details = [
        {
            table:{
                headerRows:1,
                widths:[150,120,100,150],
                body: [
                    [
                    {text: 'Nome_despesa', style: 'tableHeader', fontSize: 10},
                    {text: 'Valor_despesa', style: 'tableHeader', fontSize: 10},
                    {text: 'Data_pagamento', style: 'tableHeader', fontSize: 10},
                    {text: 'Observacao', style: 'tableHeader', fontSize: 10}
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



export default OrcamentosPDF;