import React from 'react'

const Gini = ({population}) => {

    if(population.length == 0){
        return (
            <>
            </>
        )
    }
    
    const lorenz_area = population.slice(0,-1).reduce((acc,curr)=>{
        return parseFloat(acc + (curr[1]*parseFloat(1.0/population.length)))
    },0.0)
    

    // const population_with_income_share = 
    // console.log(population_with_income_share)
    // const lorenz = population_with_income_share.reduce((acc,curr)=>{
    //     return acc + (curr*parseFloat(1.0/ population.length))
    // },0)
    // console.log(lorenz)
    
    
    

    return (
        <>
             {population.length>=1 &&  <div>
                We can therefore estimate the value of your Gini coeffecient to be {(1-2*lorenz_area).toFixed(2)}
             </div> }
        </>
    )

    
}

export default Gini
