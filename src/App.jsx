import Register from './components/Register/Register'
import Destinations from './components/Destinations/Destinations'

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Selecione seu próximo destino!</h1>
      <div className='container'>
        <div>
          <Register />
        </div>
        <div>
          <Destinations />
        </div>
      </div>
      <button>Enviar</button>
    </div>
  )
}

export default App
