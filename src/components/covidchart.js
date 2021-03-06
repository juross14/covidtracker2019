import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import axios from 'axios'

const Covidchart = () => {
  const [chartData, setChartData] = useState({})
  const [graphver, graphset] = useState('line')
  const chart = () => {
    let covidint = []
    let covidlabel = [
      'New Confirmed',
      'Total Confirmed',
      'New Deaths',
      'Total Deaths',
      'New Recovered',
      'Total Recovered'
    ]
    axios
      .get('https://api.covid19api.com/summary')
      .then(res => {
        console.log(res.data.Global)
        const covidglobal = res.data.Global
        covidint = [
          covidglobal.NewConfirmed,
          covidglobal.TotalConfirmed,
          covidglobal.NewDeaths,
          covidglobal.TotalDeaths,
          covidglobal.NewRecovered,
          covidglobal.TotalRecovered
        ]
        console.log(covidint)
        // for (const dataObj of res.data.Countries) {
        //   empSal.push(dataObj.TotalConfirmed)
        //   empAge.push(dataObj.CountryCode)
        // }
        setChartData({
          labels: covidlabel,
          datasets: [
            {
              label: 'Global Count Covid Cases',
              data: covidint,
              borderWidth: 3,
              fill: true,
              lineTension: 0.1,
              backgroundColor: 'rgb(192, 224, 255)',
              borderColor: 'rgb(15, 95, 161)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgb(15, 95, 161)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10
            }
          ]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    chart()
  }, [])

  const optiongraph = {
    responsive: true,
    animationEnabled: true,
    title: { text: 'Pandemic Scale Overall', display: true },
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true
          },
          gridLines: {
            display: true
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: true
          }
        }
      ]
    }
  }

  let rendergraph
  if (graphver === 'line') {
    rendergraph = <Line data={chartData} options={optiongraph} />
  } else {
    rendergraph = <Bar data={chartData} options={optiongraph} />
  }

  console.log(graphver)
  return (
    <div className="chartcovid">
      <form className="dropdownsea">
        <label>Select Type Visualization:</label>
        <select
          id="sea"
          name="sealist"
          form="seaform"
          value={graphver}
          onChange={e => graphset(e.target.value)}
        >
          <option value="bar"> Bar</option>
          <option value="line"> Line </option>
        </select>
      </form>
      <div>{rendergraph}</div>
    </div>
  )
}

export default Covidchart
