import Register from './components/Register/Register'
import Destination from './components/Destinations/Destination'

import './App.css'


function App() {

  return (
    <div className="App">
      <h1>Selecione seu próximo destino!</h1>
      <div className="container">
        <div>
          <Register />
        </div>
        <div>
          <Destination />
        </div>
      </div>
    </div>
  )
}

export default App
