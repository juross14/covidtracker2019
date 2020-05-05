import React from 'react'
import './styles.css'
import Fetchapi from './components/fetchapi'
import Todolist from './components/todolist'
import Covidchart from './components/covidchart'
import Moment from 'react-moment'
export default function App() {
  const dateToFormat = new Date()
  return (
    <div className="App appparent">
      <div className="appcol firstcol">
        <h1>Covid Tracker 2019</h1>
        <div className="real-date">
          As of <Moment date={dateToFormat} />
        </div>
        <Covidchart />
        <Fetchapi />
      </div>
      <div className="appcol secondcol">
        <h3>This Health Note Checklists</h3>
        <Todolist />
      </div>
    </div>
  )
}
