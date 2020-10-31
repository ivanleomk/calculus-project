import React from 'react'
import Paragraph from './Paragraph'
import Table from './Table'
import Graph from './Graph'
import Gini from './Gini'


const Calculate = () => {
    const [population,setPopulation] = React.useState([])
    const [userInput,setInput] = React.useState(0)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let data = userInput.split(",").map(item => parseInt(item))
        data.sort(function(a, b){return a-b})
        console.log(data)
        let sum = data.reduce((acc,curr)=>acc+curr,0)
        let cum_data  = data.reduce(function(r, a) {
            if (r.length > 0)
              a += r[r.length - 1];
            r.push(a);
            return r;
          }, []).map(item=>parseFloat(parseFloat(item/sum).toFixed(2)))
          
        let combined = data.map((item,index)=> {return [item,cum_data[index]] })
        
        setPopulation(combined)
        setInput(0)
    }

    


    return (
        <div>
            <div>
                <Paragraph text  = "Now that you’ve had some time to learn about the Gini-Coefficient, its time to try your hand at calculating it! We’ve provided some sample data but feel free to change it" />
                <label for="price" class="block text-sm leading-5 font-medium text-gray-700">Input Values (Separate by ',' for multiple values) </label>
                <form onSubmit = {handleSubmit}>  
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" placeholder="Input Values"
                        value = {userInput}
                        onChange = {(e)=>setInput(e.target.value)} />
                    </div>
                </form>
            </div>

            <Table population = {population} setPop = {setPopulation} />
            <Graph population = {population} />
            <Gini population = {population} />
        </div>
    )
}

export default Calculate
