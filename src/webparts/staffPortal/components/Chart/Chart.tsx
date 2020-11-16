import * as React from "react";
import { Bar } from "react-chartjs-2";


const Chart = () => {
    return(
        <div >
            <Bar
               data={{
                  labels:[ "My Manager", "My Appraisal", "HR", "Overall"],
                  datasets:[{
                      label: "Key Performance Indicator",
                      data: [12, 19, 3, 5, 2, 3],
                      backgroundColor: [
                          "rgba(255, 99, 125)",
                          "rgba(243, 247, 6)",
                          "rgba(100, 10, 245)",
                          "rgba(6, 168, 20)"
                      ],
                      borderColor:[
                          "rgba(255, 99, 125)",
                          "rgba(243, 247, 6)",
                          "rgba(100, 10, 245)",
                          "rgba(6, 168, 20)"
                      ],
                      borderWidth: 1
                  },
        
                ]
            }}
               height={330}
               width={600}
               options={{
                   maintainAspectRation: false,
                   scales:{
                       yAxes: [
                           {
                               ticks:{
                                   beginAtZero: true
                               }
                           }
                       ]
                   }
               }}
            />
        </div>
    )
}

export default Chart
