import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function ProdutosPDF(produtos){
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const reportTitle = [

        {
            text: 'Relatórios de Produtos',
            style: 'header',
            fontSize: 15,
            bold: true,
            margin: [235, 20, 0, 60] // left, top, right, bottom
        }
    ];

    const dados = produtos.map((produto) => {

        return  [
                {text: produto.produto, fontSize: 12 , margin:[0,2,0,2]},
                {text: produto.qtd, fontSize: 12 , margin:[0,2,0,2]},
                {text: produto.observacao, fontSize: 12 , margin:[0,2,0,2]},
                ]
    })

    const details = [
        {
            table:{
                headerRows:1,
                widths:[200, 100, 240],
                body: [
                    [
                    {text: 'Produto', style: 'tableHeader', fontSize: 14},
                    {text: 'Quantidade', style: 'tableHeader', fontSize: 14},
                    {text: 'Observação', style: 'tableHeader', fontSize: 14},

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



export default ProdutosPDF;