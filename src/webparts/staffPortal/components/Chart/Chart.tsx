import * as React from "react";
import { Bar } from "react-chartjs-2";


const Chart = (props) => {
    const {dataValue} = props;
    return(
        <div >
            <Bar
               data={{
                  labels:[ "My Appraisal", "HR", "Overall"],
                  datasets:[{
                      label: "Key Performance Indicator",
                      data: dataValue,
                      backgroundColor: [
                          "rgba(255, 99, 125)",
                          "rgba(255, 189, 7)",
                          "rgba(100, 10, 245)",
                      ],
                      borderColor:[
                          "rgba(255, 99, 125)",
                          "rgba(243, 247, 6)",
                          "rgba(100, 10, 245)",
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
