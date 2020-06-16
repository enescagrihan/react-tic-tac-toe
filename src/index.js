import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/Board'
import "./index.css"

function App() {
  return (
    <div>
      <Board/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));