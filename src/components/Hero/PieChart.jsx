import React, { useState } from 'react'
import Chart from "react-apexcharts";
import {CiCalendarDate} from "react-icons/ci"

function BarChart() {
  const [state, setState] = useState(
    {    
      series: [44, 55, 13],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Stopline', 'Idle', 'Running'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    }
  );
  return (
      <div className='absolute w-[434px] h-[313px] bg-[#151618] ml-28 mt-14'>
        <div className='flex justify-between bg-[#151618]'>
          <p className='bg-[#151618]'>Time Machine Detail</p>
          <CiCalendarDate className='text-2xl mr-5 bg-[#151618]' />
        </div>
        <Chart options={state.options} series={state.series} type="pie" width={350} />
      </div>
  )
}

export default BarChart