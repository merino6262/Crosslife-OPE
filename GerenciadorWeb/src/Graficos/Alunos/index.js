import React from "react"
import { Bar } from 'react-chartjs-2'



export default () => {

<>

        <Bar
            data={{
                    labels:['Alunos','Matriculas', 'Produtos', 'Despesas'],
            datasets:[{
                label: 'Quantidade',
                data:[11,11,6,6],
                backgroundColor:[
                    'rgba(0, 0, 255)',
                    'rgba(0, 0, 255)',
                    'rgba(0, 0, 255)',
                    'rgba(0, 0, 255)'
                ]
            }]
                    

            }}
            height={100}
            width={150}
            options={{ maintainAspectRatio: false}}
        />
</>
}