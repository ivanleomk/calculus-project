import React from 'react';
import TableRow from './TableRow';

const Table = ({population,setPop}) => {
    return (
        <>
        {population.length >= 1 &&
        <div class="flex flex-col mt-10">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Income
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Percentile
                        </th>
                        
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                    {population.map((item,index) => <TableRow incomeLevel = {item[0]} percentile = {item[1]} setPop = {setPop} index = {index} population = {population} />)}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>}
            </>
    )
}

export default Table
