import React, { useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'


import { PatternFormat } from 'react-number-format'

import styles from './Register.module.css'


const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#666262',
          backgroundColor: '#cdb7b7'
        }
      }
    }
  }
})

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cpf, setCpf] = useState('')

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [cpfError, setCpfError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    setNameError(false)
    setEmailError(false)
    setPhoneError(false)
    setCpfError(false)

    if(name === '') {
      setNameError(true)
    }
    if(email === '') {
      setEmailError(true)
    }
    if(phone === '') {
      setPhoneError(true)
    }
    if(cpf === '') {
      setCpfError(true)
    }
    if (name && email && phone && cpf) {
      alert('Formulário enviado')
    } else {
      alert('Todos os campos devem ser preenchidos')
    }
    setName('')
    setEmail('')
    setPhone('')
    setCpf('')
  }

  return (
    <div className={styles.register}>
      <h1>Personal Data</h1>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 2, width: 500, boxShadow: 3 },
          '& input': { fontWeight: 'bold' }
        }}
        noValidate={false}
        autoComplete="off"
      >
        <TextField
          fontWeight="bold"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          required={true}
          placeholder="Type your name"
          value={name}
          onChange={e => setName(e.target.value)}
          error={nameError}
        />
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          required
          placeholder="Type your e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={emailError}
        />
        <PatternFormat
          label="Phone"
          required
          format="(##) #####-####"
          customInput={TextField}
          mask="_"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          error={phoneError}
        />
        <PatternFormat
          label="CPF"
          required
          format="###.###.###-##"
          customInput={TextField}
          mask="_"
          value={cpf}
          onChange={e => setCpf(e.target.value)}
          error={cpfError}
        />
        <ThemeProvider theme={theme}>
          <Button
            color="inherit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ borderRadius: 3 }}
            onClick={handleSubmit}
          >
            Cadastrar
          </Button>
        </ThemeProvider>
      </Box>
    </div>
  )
}

export default Register
