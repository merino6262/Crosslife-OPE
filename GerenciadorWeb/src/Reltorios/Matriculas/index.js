import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function MatriculasPDF(matriculas){
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const reportTitle = [

        {
            text: 'Relatórios de Matriculas',
            style: 'header',
            fontSize: 15,
            bold: true,
            margin: [235, 20, 0, 45] // left, top, right, bottom
        }
    ];

    const dados = matriculas.map((matricula) => {

        return  [
                {text: matricula.id_aluno, fontSize: 8 , margin:[0,2,0,2]},
                {text: matricula.matricula_ativa, fontSize: 8 , margin:[0,2,0,2]},
                {text: matricula.tipo_matricula, fontSize: 8 , margin:[0,2,0,2]},
                {text: matricula.data_inicio, fontSize: 8 , margin:[0,2,0,2]},
                {text: matricula.data_fim,fontSize: 8 , margin:[0,2,0,2]}
                ]
    })

    const details = [
        {
            table:{
                headerRows:1,
                widths:[100,100,100,100,100],
                body: [
                    [
                    {text: 'Id_aluno', style: 'tableHeader', fontSize: 10},
                    {text: 'Matricula_ativa', style: 'tableHeader', fontSize: 10},
                    {text: 'Tipo_matricula', style: 'tableHeader', fontSize: 10},
                    {text: 'Data_inicio', style: 'tableHeader', fontSize: 10},
                    {text: 'Data_fim', style: 'tableHeader', fontSize: 10}
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



export default MatriculasPDF;