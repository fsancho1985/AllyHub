import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import Register from './components/Register/Register'
import Destination from './components/Destinations/Destination'

import './App.css'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#666262',
          backgroundColor: '#cdb7b7',
        }
      }
    }
  }
})

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
      
      <ThemeProvider theme={theme}>
        <Button color='inherit' variant="contained" endIcon={<SendIcon />} sx={{borderRadius: 3}}>Enviar</Button>
      </ThemeProvider>
    </div>
  )
}

export default App
