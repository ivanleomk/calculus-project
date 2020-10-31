import React from 'react'

const TableRow = ({incomeLevel,percentile,index,setPop,population}) => {
    return (
        <tr onClick = {() => setPop(population.filter((item,itemIndex)=>itemIndex!==index))}>
        <td class="px-6 py-4 whitespace-no-wrap">
            <div class="flex items-center text-sm leading-5 font-medium text-gray 900">
            {incomeLevel}
            </div>
        </td>
        <td class="text-sm leading-5 text-gray-900">
            {(percentile*100).toFixed(1)}%
            
        </td>
        
        </tr>
    )
}

export default TableRow
