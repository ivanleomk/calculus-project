import React from 'react'
import {VictoryLine, VictoryChart,VictoryTheme, VictoryGroup} from 'victory';

const Graph = ({population}) => {

    const delta_x = parseFloat(1.0/ population.length)
    let points = [{x:0,y:0}]

    for (var i = 0; i < population.length-1; i++) {
        if(i === 0){
            points.push({
                x:delta_x,
                y:0
            })
        }
        points.push({
            x:(i+1)*delta_x,
            y:population[i][1]
        })
        points.push({
            x:(i+2)*delta_x,
            y:population[i][1]
        })
    }
    
    
    const pop2 = population.map((item,index)=>{
        return {x:(index+1)*delta_x,y:item[1]}
    })
    

    return (
        <>
        {points.length > 1 && <VictoryChart>
            <VictoryGroup>
              <VictoryLine
                    style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc"}
                    }}
                    data={points}
                />
                <VictoryLine
                    style={{
                    data: { stroke: "#c43a31" },
                    parent: { border: "1px solid #ccc"}
                    }}
                    data={[
                        {x:0,y:0},
                        {x:1,y:1}
                    ]}
                />
                
            </VictoryGroup>
  
        </VictoryChart>}
        </>
    )
}

export default Graph
